
import './style.less';
import React from 'react';
import * as firebase from "firebase/app";
import { navigate } from "@reach/router"

import "firebase/auth";
import { addPodcastProfileInfo } from "../../common/api/db/podcastProfile"

import { Spin, Typography, Divider, Input, Checkbox } from 'antd'
import { Link } from "@reach/router"
import { DefaultButton } from '../../common/components/Buttons'


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
        }
    }

    showLoading = () => this.setState({ isLoading: true })
    hideLoading = () => this.setState({ isLoading: false })

    createAccountHandler = async () => {
        // var email = this.state.email
        // var password = this.state.password

        // if (email.length < 4) {
        //     alert('Please enter an email address.');
        //     return;
        // }
        // if (password.length < 7) {
        //     alert('Password must be longer than 6 characters .');
        //     return;
        // }

        // if (this.state.name.length < 3) {
        //     alert('Please enter a name.');
        //     return;
        // }

        // if (this.state.title.length < 4) {
        //     alert('Please enter a title.');
        //     return;
        // }

        // if (password != this.state.repeatPassword) {
        //     alert('Password do not match');
        //     return;
        // }

        // if (this.state.checkBox == false) {
        //     alert('Du måste acceptera användarvilkoren');
        //     return;
        // }

        // this.showLoading()

        // try {
        //     await firebase.auth().createUserWithEmailAndPassword(email, password)
        // } catch (error) {
        //     if (error.code == 'auth/weak-password') {
        //         alert('The password is too weak.');
        //     } else {
        //         alert(error.message);
        //     }
        //     this.hideLoading()
        //     return;
        // }

        // try {
        //     await firebase.auth().currentUser.sendEmailVerification()
        // } catch (error) {
        //     alert(error.message);
        //     this.hideLoading()
        //     return;
        // }
        // let uid = firebase.auth().currentUser.uid;
        // let name = this.state.name
        // let title = this.state.title
        // addPodcastProfileInfo({ uid, name, title })
        // this.hideLoading()
        this.navigate('/step2')
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
                <Spin spinning={this.state.isLoading} tip="Skapar konto...">
                    <Title style={{ textAlign: 'center' }} level={2}>Bli en Partner Podd</Title>
                    <Text>Beskriv din podd och dina mål så sköter vi resten.</Text>
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

                                <Checkbox style={{ 'width': '100%', margin: '10px 0' }} onChange={this.checkBoxChange}> <span style={{ display: 'inline' }}> Jag accepterar <Link to="/terms-of-use"><span style={{ width: '120px', marginBottom: '10px', color: 'black', fontSize: '14px', textDecoration: 'underline' }}>användarvilkoren</span></Link> </span></Checkbox>
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