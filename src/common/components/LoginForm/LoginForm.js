import React from "react"
import antd from "antd"
import { navigate } from "gatsby"
import { DefaultButton, SecondaryButton } from '../../components/Buttons'
const { Icon, Input, Divider } = antd;


class LoginForm extends React.Component {


    login = () => {
        console.log("Login");
        navigate('/portal')
    };

    render() {
        return (
            <>
                <Divider></Divider>
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Email"
                />
                <Input
                    style={{ marginTop: '25px' }}
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                />

                <Divider></Divider>
                <div style={{ textAlign: 'center' }}>

                    <DefaultButton
                        title="Logga in"
                        onClick={() => this.login()}
                    />

                    <SecondaryButton
                        title="Skapa nytt konto"
                        onClick={() => navigate('/signup')}
                    >
                    </SecondaryButton>
                </div>
            </>
        );
    }
}


export default LoginForm 