
import './style.less';
import React from 'react';
import { navigate } from "gatsby"

import "firebase/auth";
import { addPodcastProfileInfo, signupIsCompleted } from "../../common/api/db/podcastProfile"

import { Spin, Typography, Divider, Input, Checkbox, message } from 'antd'
import { DefaultButton, SecondaryButton } from '../../common/components/Buttons'
import { getFirebase, getCurrentUser } from "../../common/api/firebase"

import TermsOfUse from '../../common/components/TermsOfUse';

const { Title, Text } = Typography

export default class Step1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            part: 0,
            isLoading: false,
            checkBox: false,
            name: "",
            title: "",
            email: "",
            password: "",
            repeatPassword: "",
            firebase: null,
            showTerms: false,
            user: null,
        }
    }

    loadFirebase = () => {
        const app = import("firebase/app");
        const db = import("firebase/firestore");
        const auth = import("firebase/auth");
        const storage = import("firebase/storage");
        const analytics = import("firebase/analytics");

        Promise.all([app, db, auth, storage, analytics]).then(([firebase]) => {
            const fb = getFirebase(firebase)
            fb.analytics()
            this.setState({ firebase: fb })
        })
    }

    getUser = async () => {
        let firebase = this.state.firebase
        let user = await getCurrentUser(firebase)
        if (user) {
            let completed = await signupIsCompleted(firebase, user.uid)
            this.setState({ user: user, signupIsCompleted: completed })
        }
    }

    componentDidMount = () => {
        this.loadFirebase()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.firebase !== this.state.firebase) {
            this.getUser()
        }
    }


    handleOk = e => this.setState({ showTerms: false });
    showTerms = () => this.setState({ showTerms: true })
    hideTerms = () => this.setState({ showTerms: false })
    showLoading = () => this.setState({ isLoading: true })
    hideLoading = () => this.setState({ isLoading: false })

    createAccountHandler = async () => {
        let firebase = this.state.firebase
        var email = this.state.email
        var password = this.state.password

        if (email.length < 4) {
            message.error('Please enter an email address.');
            return;
        }
        if (password.length < 7) {
            message.error('Password must be longer than 6 characters .');
            return;
        }

        if (this.state.name.length < 3) {
            message.error('Please enter a name.');
            return;
        }

        if (this.state.title.length < 3) {
            message.error('Please enter a title.');
            return;
        }

        if (password != this.state.repeatPassword) {
            message.error('Password do not match');
            return;
        }

        if (this.state.checkBox == false) {
            message.error('Du måste acceptera användarvilkoren');
            return;
        }

        this.showLoading()

        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
        } catch (error) {
            if (error.code == 'auth/weak-password') {
                message.error('The password is too weak.');
            } else {
                message.error(error.message);
            }
            this.hideLoading()
            return;
        }

        try {
            await firebase.auth().currentUser.sendEmailVerification()
        } catch (error) {
            message.error(error.message);
            this.hideLoading()
            return;
        }

        let uid = firebase.auth().currentUser.uid;
        let name = this.state.name
        let title = this.state.title
        addPodcastProfileInfo(firebase, { uid, name, title })
        this.hideLoading()
        navigate('signup/step2')
    }


    nextPart = () => {
        const nextpart = this.state.part + 1
        this.setState({ part: nextpart })
    }

    handleChange = (e, field) => {
        this.setState({ [field]: e.target.value });
    }

    checkBoxChange = (e) => {
        this.setState({ checkBox: e.target.checked });
    }

    signOut = async () => {
        await this.state.firebase.auth().signOut()
        //force rerender
        this.setState({ part: 1, SignupCompleted: false, user: null });
    }

    render() {
        const LogginBox = (
            <Spin spinning={this.state.isLoading}
                tip="Skapar konto...">
                <TermsOfUse
                    showTerms={this.state.showTerms}
                    handleOk={this.handleOk}
                    hideTerms={this.hideTerms}
                />
                <Title style={{ textAlign: 'center' }} level={2}>Bli en partnerpodd</Title>
                <p>Beskriv din podd och dina mål så sköter vi resten.</p>
                <Divider />
                <Input style={{ marginBottom: '20px' }}
                    placeholder="Ditt namn"
                    value={this.state.name}
                    onChange={(e) => this.handleChange(e, "name")} />
                <Input placeholder="Podcaststitel"
                    value={this.state.title}
                    onChange={(e) => this.handleChange(e, "title")} />
                <Divider />
                {this.state.part == 0 ?
                    (<DefaultButton title="Nästa" style={{ margin: 'auto' }} onClick={() => this.nextPart()} size='large'></DefaultButton>)
                    : (
                        <div >
                            <Text> Skapa ett konto </Text>
                            <Input style={{ margin: '20px 0' }} placeholder="Email"
                                value={this.state.email}
                                onChange={(e) => this.handleChange(e, "email")} />
                            <Input.Password style={{ marginBottom: '20px' }} placeholder="Lösenord"
                                value={this.state.password}
                                onChange={(e) => this.handleChange(e, "password")} />
                            <Input.Password style={{ marginBottom: '20px' }} placeholder="Upprepa lösenord"
                                value={this.state.repeatPassword}
                                onChange={(e) => this.handleChange(e, "repeatPassword")} />

                            <Checkbox style={{ 'width': '100%', margin: '10px 0' }}
                                onChange={this.checkBoxChange}>
                                <span style={{ display: 'inline' }}>Jag accepterar </span>
                                <span
                                    onClick={this.showTerms}
                                    style={{ width: '120px', marginBottom: '10px', color: '#333', fontSize: '14px', textDecoration: 'underline' }}>
                                    användarvilkoren</span>
                            </Checkbox>
                            <DefaultButton
                                style={{ 'float': 'right' }}
                                title="Skapa konto"
                                id="createAccountButton"
                                onClick={() => this.createAccountHandler()}>
                            </DefaultButton>
                        </div>
                    )
                }
            </Spin>
        )

        const FailedSignup = (
            <>
                <Title style={{ textAlign: 'center' }} level={2}>Du har redan påbörjat registreringen</Title>
                <p>Fortsätt till nästa sida för att beskriva podden</p>

                <DefaultButton
                    style={{ 'float': 'right' }}
                    title="Beskriv podden"
                    id="describePodcast"
                    onClick={() => navigate('signup/step2')}>
                </DefaultButton>
            </>
        )

        const SignupCompleted = (
            <>
                <Title style={{ textAlign: 'center' }} level={2}>Du har redan registrerat ett konto</Title>
                <p>Poddhype är under utveckling så just nu går det inte att logga in, den funktionaliteten och mycket annat kommer snart.</p>
                <p>hej@poddhype.com </p>
                <SecondaryButton
                    title="Skapa nytt konto"
                    onClick={() => this.signOut()} >
                </SecondaryButton>
                <DefaultButton
                    style={{ 'float': 'right' }}
                    title="Gå till startsidan"
                    id="createAccountButton"
                    onClick={() => navigate('../')}>
                </DefaultButton>
            </>
        )
        return (
            <div className='form-content' >
                {this.state.user ? (this.state.signupIsCompleted ? SignupCompleted : FailedSignup) : LogginBox}
            </div>)
    }
}