import React from "react";
import antd from "antd"
import { getFirebase, getCurrentUser } from "../../common/api/firebase"
import { getPodcastProfile, putPodcastProfileInfo } from "../../common/api/db/podcastProfile"
import { getFile } from '../../common/api/storage'
import { Link, navigate } from 'gatsby'
import { SecondaryButton, ButtonCta, DefaultButton } from '../../common/components/Buttons'
import ViewPodcastProfile from '../../common/components/ViewPodcastProfile/ViewPodcastProfile'

import './style.less';

const { Layout, Menu, Spin } = antd;
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
        return (
            <>
                <div className="portal-header">
                    <span className="portal-logo" >
                        <Link to="/"><img alt="logo" src={logo} /></Link>
                    </span>
                </div>

                <span className="profile-toolbar">
                    <SecondaryButton
                        title="See profil"
                        size='large'
                        onClick={() => {
                            this.setState({ editMode: false })
                        }} />
                    <SecondaryButton
                        title="Editera profil"
                        size='large'
                        onClick={() => {
                            this.setState({ editMode: true })
                        }} />
                    <SecondaryButton
                        title="Logga ut"
                        size='large'
                        onClick={() => this.signOut()} />
                </span>
                <div className="profile-container">
                    <Spin style={{ marginTop: '100px' }} spinning={this.state.isLoading}
                        tip="Hämtar data...">
                        {this.state.profile && <ViewPodcastProfile
                            editMode={this.state.editMode}
                            profile={this.state.profile}
                            // updateProfile={(e) => this.updateProfile(e)}
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
