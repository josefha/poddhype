
import './style.less';
import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";

import { Button, Spin, Typography, Divider, Input, Checkbox } from 'antd'
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
        var email = this.state.email
        var password = this.state.password

        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            alert('Please enter a password.');
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
                return;
            } else {
                alert(error.message);
                return;
            }
        }

        try {
            await firebase.auth().currentUser.sendEmailVerification()
            console.log("email sent")
        } catch (error) {
            alert(error.message);
            return;
        }

        console.log(this.state)
        console.log("Created account")
        this.hideLoading()
        this.props.nextForm()
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
                    <Title level={2}>Kul att du vill bli en Poddhype partner! </Title>
                    <Text>För att vi ska kunna erbjuda en så bra tjänst som möjligt så måste vi veta lite mer om dig och din podcast.
                        Efter 5 bara minuter har vi allt beheöver för att kunna matcha dig med brands som letar efter partnerskap. </Text>
                    <Divider />
                    <Input style={{ marginBottom: '20px' }}
                        placeholder="Ditt namn"
                        value={this.state.name}
                        onChange={(e) => this.handleChange(e, "name")} />
                    <Input placeholder="Din podcasts titel"
                        value={this.state.titel}
                        onChange={(e) => this.handleChange(e, "titel")} />
                    <Divider />
                    {this.state.part == 0 ?
                        (<Button style={{}} onClick={() => this.nextPart()} type="primary" size='large'>Nästa</Button>)
                        : (
                            <div >
                                <Text> Första steget är att skapa ditt konto hos oss, oroa dig inte det är helt gratis. </Text>
                                <Input style={{ margin: '20px 0' }} placeholder="Email"
                                    value={this.state.email}
                                    onChange={(e) => this.handleChange(e, "email")} />
                                <Input.Password style={{ marginBottom: '20px' }} placeholder="Lösenord"
                                    value={this.state.password}
                                    onChange={(e) => this.handleChange(e, "password")} />
                                <Input.Password style={{ marginBottom: '20px' }} placeholder="Upprepa lösenord"
                                    value={this.state.repeatPassword}
                                    onChange={(e) => this.handleChange(e, "repeatPassword")} />
                                <a style={{ textDecoration: 'underline' }}>Användarvilkor</a><br />
                                <Checkbox style={{ marginTop: '10px' }} onChange={this.checkBoxChange}>Jag accepterar användatvilkor och GDPR </Checkbox>
                                <Button id="createAccountButton" onClick={() => this.createAccountHandler()} type="primary" size='large'>Skapa konto</Button>
                            </div>
                        )
                    }
                </Spin>
            </div >)
    }
}