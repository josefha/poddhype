import React from "react";
import antd from "antd"
import { getFirebase, getCurrentUser } from "../../common/api/firebase"
import { getPodcastProfile } from "../../common/api/db/podcastProfile"
import { getFile } from '../../common/api/storage'
import { Link, navigate } from 'gatsby'
import { SecondaryButton, ButtonCta, DefaultButton } from '../../common/components/Buttons'
import ViewPodcastProfile from '../../common/components/ViewPodcastProfile/ViewPodcastProfile'


import './style.less';
import '../Home/static/header.less'

const { Layout, Menu, Spin } = antd;

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

            isLoading: true,
            editMode: false
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
        this.setState({ user, profile, isLoading: false })

    }

    signOut = async () => {
        await this.state.firebase.auth().signOut()
        this.setState({ user: null, profile: null })
        navigate('/')
    }

    showLoading = () => this.setState({ isLoading: true })
    hideLoading = () => this.setState({ isLoading: false })

    render() {
        let profile = this.state.profile
        let name
        if (profile) {
            name = profile.name
        }
        return (
            <>
                <div className="portal-header">
                    <span className="portal-logo" >
                        <Link to="/"><img alt="logo" src={logo} /></Link>
                    </span>
                    <div style={{ float: 'right' }}>
                        <DefaultButton
                            title="Editera Profil"
                            onClick={() => {
                                console.log("Click");
                                this.setState({ editMode: true })
                            }}
                            size='small' />
                        <ButtonCta
                            size="small"
                            title="Logga ut"
                            to="/"
                            onClick={() => this.signOut()} />
                    </div>

                </div>

                {/* <div className="portal-toolbar">

                </div> */}
                <div className="profile-container">
                    <Spin style={{ marginTop: '100px' }} spinning={this.state.isLoading}
                        tip="Hämtar data...">
                        {profile && <ViewPodcastProfile
                            editMode={this.state.editMode}
                            profile={profile}
                            user={this.state.user}
                            firebase={this.state.firebase}
                        />}
                    </Spin>
                </div>
            </>
        )
    }
}

export default Portal
