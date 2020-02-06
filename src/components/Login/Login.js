import React from "react";
import PageWrapper from '../../common/components/PageWrapper/PageWrapper'
import SEO from '../../common/components/seo'
import LoginForm from '../../common/components/LoginForm/LoginForm'
import { Input, Divider } from 'antd'
import { getFirebase } from "../../common/api/firebase"
import { Link } from 'gatsby'
import './style.less';
import '../Home/static/header.less'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firebase: null
        };
    }

    loadFirebase = () => {
        const app = import("firebase/app");
        const db = import("firebase/firestore");
        const analytics = import("firebase/analytics");

        Promise.all([app, db, analytics]).then(([firebase]) => {
            const fb = getFirebase(firebase)
            fb.analytics()
            this.setState({ firebase: fb })
        })
    }

    componentDidMount() {
        this.loadFirebase()
    }

    render() {
        return (
            <div>
                <SEO
                    title="Poddhype | Login"
                    description="Logga in för att se vilka sponsorer som vill nå dig."
                />
                <PageWrapper footer={false}>
                    <div class="login-box-wrapper">
                        <div style={{ textAlign: 'center' }}>
                            <h2>Podcast login</h2>
                        </div>
                        <LoginForm />
                    </div>
                </PageWrapper>
            </div >
        )
    }
}

export default Login
