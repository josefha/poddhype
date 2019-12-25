
import './style.less';
import React from 'react';
import { navigate } from "gatsby"

import "firebase/auth";
import { addPodcastProfileInfo } from "../../common/api/db/podcastProfile"

import { Spin, Typography, Divider, Input, Checkbox, Modal } from 'antd'
import { Link } from "@reach/router"
import { DefaultButton } from '../../common/components/Buttons'
import { getFirebase } from "../../common/api/firebase"



const { Title, Text } = Typography;


export default class Step1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            part: 0,
            isLoading: false,
            checkBox: false,
            name: "",
            titel: "",
            email: "",
            password: "",
            repeatPassword: "",
            firebase: null,
            showTerms: false,
        }
    }

    loadFirebase = () => {
        const app = import("firebase/app");
        const db = import("firebase/firestore");
        const auth = import("firebase/auth");

        Promise.all([app, db, auth]).then(([firebase]) => {
            const f2 = getFirebase(firebase)
            this.setState({ firebase: f2 })
        })
    }

    componentDidMount = () => {
        this.loadFirebase()
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
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 7) {
            alert('Password must be longer than 6 characters .');
            return;
        }

        if (this.state.name.length < 3) {
            alert('Please enter a name.');
            return;
        }

        if (this.state.title.length < 4) {
            alert('Please enter a title.');
            return;
        }

        if (password != this.state.repeatPassword) {
            alert('Password do not match');
            return;
        }

        if (this.state.checkBox == false) {
            alert('Du måste acceptera användarvilkoren');
            return;
        }

        this.showLoading()

        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
        } catch (error) {
            if (error.code == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(error.message);
            }
            this.hideLoading()
            return;
        }

        try {
            await firebase.auth().currentUser.sendEmailVerification()
        } catch (error) {
            alert(error.message);
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

    render() {
        return (
            <div className='form-content' >
                <Modal
                    bodyStyle={{ fontSize: '10px' }}
                    title="Terms and Conditions"
                    visible={this.state.showTerms}
                    onOk={this.handleOk}
                    onCancel={this.hideTerms}
                >
                    <h2><strong>Welcome to poddhype.com</strong></h2>

                    <h2><strong>iFrames</strong></h2>

                    <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>

                    <h2><strong>Cookies</strong></h2>

                    <p>We employ the use of cookies. By accessing poddhype.com, you agreed to use cookies in agreement with the Poddhype's Privacy Policy.</p>

                    <h2><strong>Privacy Policy</strong></h2>
                    <h2> What information do we collect?</h2>
                    <p>In Short: We collect personal information that you provide to us such as name, address, contact information, passwords and security data, and information about your podcast that you enter in the signup.
                    We collect personal information that you voluntarily provide to us when registering at the Services expressing an interest in obtaining information about us or our products and services, when participating in activities on the Services (such as posting messages in our online forums or entering competitions, contests or giveaways) or otherwise contacting us.
                    The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make and the products and features you use. The personal information we collect can include the following:
                    Personal Information Provided by You. We collect app usage, and other similar data.
                    Credentials. We collect passwords, password hints, and similar security information used for authentication and account access.
                    All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.
                    We store cookies for analytics on how our users use our site and to keep track if you are a returning visitor.
                    </p>
                    <h2> Why do we store this information? </h2>
                    <p> Your information is used on our platform to show display your profile. Your email will not be shared or displayed on the website.
                        We will not sell your data to any third party. We have the right to use your podcast name and podcast image in marketing for poddhype.com unless you have told us otherwise.
                        You can at any time tell us you don't want us to store your information, you can do so by sening an email to info@podhype.com.
                    </p>
                </Modal>
                <Spin spinning={this.state.isLoading} tip="Skapar konto...">
                    <Title style={{ textAlign: 'center' }} level={2}>Bli en partnerpodd</Title>
                    <p>Beskriv din podd och dina mål så sköter vi resten.</p>
                    <Divider />
                    <Input style={{ marginBottom: '20px' }}
                        placeholder="Ditt namn"
                        value={this.state.name}
                        onChange={(e) => this.handleChange(e, "name")} />
                    <Input placeholder="Din podcasts titel"
                        value={this.state.title}
                        onChange={(e) => this.handleChange(e, "title")} />
                    <Divider />
                    {this.state.part == 0 ?
                        (<DefaultButton title="Nästa" style={{ margin: 'auto' }} onClick={() => this.nextPart()} size='large'></DefaultButton>)
                        : (
                            <div >
                                <Text> Skapa ett konto hos oss. </Text>
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
            </div >)
    }
}