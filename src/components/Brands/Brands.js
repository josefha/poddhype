import React from "react";

import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import cnLocale from '../../zh-CN'
import PageWrapper from '../../common/components/PageWrapper/PageWrapper'
import SEO from '../../common/components/seo'
import { ButtonTransparent } from '../../common/components/Buttons/index.js'
import { Input } from 'antd'
import { PostBrandEmailSignUp } from '../../common/api/db/brands.js'
import { getFirebase } from "../../common/api/firebase"
import { Link } from 'gatsby'
import './style.less';
import '../Home/static/header.less'

const workInProgressIcon = require("../../common/assets/work-in-progress-icon.svg")

let isMobile = false;
enquireScreen((b) => {
    isMobile = b;
});

class Brands extends React.Component {
    constructor(props) {
        super(props);
        const appLocale = cnLocale;
        this.state = {
            appLocale,
            isMobile,
            email: '',
            done: false,
            firebase: null
        };
    }

    loadFirebase = () => {
        const app = import("firebase/app");
        const db = import("firebase/firestore");

        Promise.all([app, db]).then(([firebase]) => {
            const f2 = getFirebase(firebase)
            this.setState({ firebase: f2 })
        })
    }

    componentDidMount() {
        enquireScreen((b) => {
            this.setState({
                isMobile: !!b,
            });
        });

        this.loadFirebase()
    }

    emailSignup = () => {
        const email = this.state.email
        if (!this.state.done && email != "") {
            const date = new Date()
            PostBrandEmailSignUp(this.state.firebase, { date, email })
            this.setState({ done: true })
        }
    }

    render() {
        const done = this.state.done
        return (
            <div>
                <SEO
                    title="Poddhype | Marknadsför ditt företag i podcasts"
                    description="Via poddhypes plattform kan du sortera efter ämne och målgrupp för att sedan direkt kontakta poddar med en publik som passar dig."
                />
                <PageWrapper>
                    <div className="page">
                        <div className="wrapper-content-box">
                            <img className="header-image" src={workInProgressIcon} />
                            <h1 key="h1" id="lp-title">
                                Marknadsför ditt företag i podcasts
                            </h1>
                            <h2 id="banner_description" style={{ marginTop: '0px' }}>
                                Vi öppnar snart vår plattform för Brands, läsa mer <Link to="/#part2">här.</Link>
                            </h2>
                            <br></br>
                            <h3>Prenumerera på vårt nyhetsbrev</h3>
                            <Input
                                placeholder="Email"
                                style={{
                                    textAlign: 'center',
                                    fontFamily: 'Source Sans Pro',
                                    maxWidth: '400px',
                                    height: '40px',
                                    fontSize: '14px',
                                    margin: '5px 0 0px 0'
                                }}
                                value={this.state.email}
                                onChange={(e) => this.setState({ email: e.target.value })} />
                            <ButtonTransparent
                                title={done ? 'Tack!' : 'Sign up'}
                                onClick={() => this.emailSignup()}
                            />
                        </div>
                    </div>
                </PageWrapper>
                <DocumentTitle title="Poddhype - Matchar Brands med Podcasts" key="title" />
            </div >
        )
    }
}

export default Brands
