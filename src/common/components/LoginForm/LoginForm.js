import React from "react"
import antd from "antd"
import { navigate } from "gatsby"
import { DefaultButton, SecondaryButton } from '../../components/Buttons'
import { firebaseLogin } from '../../api/auth/auth'
const { Icon, Input, Divider, Alert, Spin } = antd;


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: null,
            userMsg: null,
            isLoading: null
        };
    }


    login = async () => {
        this.showLoading()
        let result = await firebaseLogin(this.props.firebase, this.state.email, this.state.password)
        console.log(result)
        if (result.sucess) {
            navigate('/portal')
        } else {
            this.setState({ error: result.error })
            console.log(result.error)
        }
        this.hideLoading()
    };

    forgotPassword = async () => {
        let email = this.state.email
        if (email.length < 4) {
            this.setState({ error: "Fyll i en emailadress" })
            return
        }

        this.props.firebase.auth().sendPasswordResetEmail(email).then(function () {
            console.log("email sent")
            this.setState({ error: null, userMsg: "Återställnings mail har skickas" })
        }).catch(function (error) {
            console.log("Could not send email", error)
            this.setState({ error: "Fyll i en giltig email" })
        });
    }

    showLoading = () => this.setState({ error: null, isLoading: true })
    hideLoading = () => this.setState({ isLoading: false })

    render() {
        return (
            <>
                <Spin spinning={this.state.isLoading}>
                    <Divider></Divider>
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })} />
                    <Input
                        style={{ margin: '25px 0' }}
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={(e) => this.setState({ password: e.target.value })} />
                    <div style={{ textAlign: 'center' }}>
                        <DefaultButton
                            title="Logga in"
                            onClick={() => this.login()}
                        />
                        <SecondaryButton
                            title="Skapa konto"
                            onClick={() => navigate('/signup')}
                        />
                    </div>
                    <div style={{ marginTop: '10px', textAlign: 'center' }}>
                        <a
                            onClick={() => this.forgotPassword()}> Glömt ditt Lösenord?
                        </a>
                    </div>
                    <div>
                        {this.state.error && <Alert style={{ margin: '20px 0' }} message={this.state.error} type="error" />}
                        {this.state.userMsg && <Alert style={{ margin: '20px 0' }} message={this.state.userMsg} />}
                    </div>
                </Spin>
            </>
        );
    }
}


export default LoginForm 