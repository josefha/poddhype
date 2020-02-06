import React from "react"
import antd from "antd"
import { navigate } from "gatsby"
import { DefaultButton, SecondaryButton } from '../../components/Buttons'
import { firebaseLogin } from '../../api/auth/auth'
import { async } from "q";
const { Icon, Input, Divider } = antd;


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }



    login = async () => {
        console.log(this.state);
        let result = await firebaseLogin(this.props.firebase, this.state.email, this.state.password)
        console.log(result)
        if (result.sucess) {
            console.log("Login Sucess")
            navigate('/portal')
        } else {
            console.log(result.error.message)
        }
    };

    render() {
        return (
            <>
                <Divider></Divider>
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })} />
                <Input
                    style={{ marginTop: '25px' }}
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(e) => this.setState({ password: e.target.value })} />

                <Divider></Divider>
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
            </>
        );
    }
}


export default LoginForm 