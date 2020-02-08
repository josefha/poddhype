import React from "react";
import PageWrapper from '../../common/components/PageWrapper/PageWrapper'
import SEO from '../../common/components/seo'
import LoginForm from '../../common/components/LoginForm/LoginForm'
import { Input, Divider } from 'antd'
import { getFirebase, getCurrentUser } from "../../common/api/firebase"
import { Link, navigate } from 'gatsby'
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

    componentDidUpdate(_, prevState) {
        if (prevState.firebase !== this.state.firebase) {
            this.checkIfLoggedin()
        }
    }

    checkIfLoggedin = async () => {
        let firebase = this.state.firebase
        let user = await getCurrentUser(firebase)

        if (user) {
            navigate('/portal')
            return
        }
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
                        <LoginForm
                            firebase={this.state.firebase}
                        />
                    </div>
                </PageWrapper>
            </div >
        )
    }
}

export default Login
