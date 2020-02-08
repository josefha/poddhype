import React from "react";
import antd from "antd"
import { getFirebase, getCurrentUser } from "../../common/api/firebase"
import { getPodcastProfile } from "../../common/api/db/podcastProfile"
import { getFile } from '../../common/api/storage'
import { Link, navigate } from 'gatsby'
import { SecondaryButton } from '../../common/components/Buttons'
import ViewPodcastProfile from '../../common/components/ViewPodcastProfile/ViewPodcastProfile'
import EditPodcastProfile from '../../common/components/EditPodcastProfile/EditPodcastProfile'

import './style.less';
import '../Home/static/header.less'

const { Layout, Menu, Breadcrumb, Icon } = antd;

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const logo = require('../../common/assets/poddhype-logo-white-small.png')


class Portal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firebase: null,
            profile: null,
            user: null,

        };
    }

    loadFirebase = () => {
        const app = import("firebase/app");
        const db = import("firebase/firestore");
        const analytics = import("firebase/analytics");
        const storage = import("firebase/storage");

        Promise.all([app, db, analytics, storage]).then(([firebase]) => {
            const fb = getFirebase(firebase)
            fb.analytics()
            this.setState({ firebase: fb })
        })
    }

    componentDidMount() {
        this.loadFirebase()
    }

    componentDidUpdate(_, prevState) {
        if (prevState.firebase !== this.state.firebase) {
            this.initUser()
        }
    }

    initUser = async () => {
        let firebase = this.state.firebase
        let user = await getCurrentUser(firebase)

        if (!user) {
            navigate('/login')
            return
        }
        let result = await getPodcastProfile(firebase, user)
        if (!result.sucess) {
            // ERROR
        }
        console.log("User: ", result)

        let profile = result.profile
        let fileResult = await getFile(firebase, profile.data.AvatarPath);
        if (fileResult.success) {
            console.log(fileResult.url)
            profile['avatarUrl'] = fileResult.url
        } else {
            console.log(fileResult)
            profile['avatarUrl'] = ""
        }
        this.setState({ user, profile })

    }

    signOut = async () => {
        await this.state.firebase.auth().signOut()
        this.setState({ user: null, profile: null })
        navigate('/')
    }

    render() {
        let profile = this.state.profile
        return (
            <Layout>
                <div className="portal-header">
                    <div className="portal-logo" >
                        <Link to="/"><img alt="logo" src={logo} /></Link>
                    </div>
                    {/* <p style={{ color: '#fff' }}>{"this.state.profile.name"}</p> */}
                    {/* <div style={{ float: 'right' }}>
                        <SecondaryButton
                            title="Logga ut"
                            onClick={() => this.signOut()} >
                        </SecondaryButton>
                    </div> */}
                </div>
                <Layout style={{ height: '100%' }}>
                    <Content
                        style={{

                            background: '#fff',
                            padding: 24,
                            margin: '20px',
                            minHeight: '600px',
                            maxWidth: '900px',
                        }}
                    >
                        {profile && <ViewPodcastProfile
                            profile={profile}
                            user={this.state.user}
                            firebase={this.state.firebase}
                        />}
                    </Content>
                </Layout>
            </Layout >
        )
    }
}

export default Portal
