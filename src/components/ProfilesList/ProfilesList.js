import React from "react";
import antd from "antd"
import { getFirebase, getCurrentUser } from "../../common/api/firebase"
import { getAllPodcastProfiles } from "../../common/api/db/podcastProfile"
import { getFile } from '../../common/api/storage'
import { Link, navigate } from 'gatsby'
import { SecondaryButton, ButtonCta, DefaultButton } from '../../common/components/Buttons'
import ProfileRow from '../../common/components/ProfileRow/ProfileRow'
import ViewPodcastProfile from '../../common/components/ViewPodcastProfile/ViewPodcastProfile'


import './style.less';
import '../Home/static/header.less'
import PodcastCard from "../../common/components/PodcastCard/PodcastCard";

const { Spin } = antd;


const logo = require('../../common/assets/poddhype-logo-white-small.png')


class ProfileList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firebase: null,
            user: null,
            profileList: null,
            isLoading: true,
            selectedProfile: null,
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

        //TODO Check if brand

        if (!user) {
            navigate('/login')
            return
        }

        let result = await getAllPodcastProfiles(firebase)

        if (!result.success) {
            console.log('error')
        }
        console.log(result)
        let profileList = result.data

        // Get all Profile data
        this.setState({ user, profileList, isLoading: false })

    }

    showLoading = () => this.setState({ isLoading: true })
    hideLoading = () => this.setState({ isLoading: false })


    goToProfile = (profile) => {
        this.setState({ selectedProfile: profile })
    }

    render() {
        let profileList = this.state.profileList
        console.log(this.state)
        return (
            <>
                <div className="portal-header">
                    <span className="portal-logo" >
                        <Link to="/"><img alt="logo" src={logo} /></Link>
                    </span>
                </div>
                {this.state.selectedProfile ?
                    <div>
                        <div>
                            <DefaultButton
                                title="<--"
                                onClick={() => this.setState({ selectedProfile: null })}
                            ></DefaultButton>
                        </div>

                        <PodcastCard
                            profile={this.state.selectedProfile} genderText={"genderText"} />
                    </div>
                    :
                    <div className="profile-listing-container">
                        <Spin style={{ color: '#fff', marginTop: '100px' }} spinning={this.state.isLoading}
                            tip="Hämtar data...">
                            {profileList &&
                                profileList.map((profile) => {
                                    return (
                                        <ProfileRow
                                            goToProfile={(p) => this.goToProfile(p)}
                                            key={profile.uid}
                                            profile={profile}
                                        />
                                    )
                                })}
                        </Spin>
                    </div>
                }
            </>
        )
    }
}

export default ProfileList
