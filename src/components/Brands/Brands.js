import React from "react";
import cnLocale from '../../zh-CN'
import PageWrapper from '../../common/components/PageWrapper/PageWrapper'
import SEO from '../../common/components/seo'
import { ButtonTransparent } from '../../common/components/Buttons/index.js'
import { Input } from 'antd'
import { PostBrandEmailSignUp } from '../../common/api/db/brands.js'
import { getFirebase } from "../../common/api/firebase"
import { Link } from 'gatsby'
import BrandPart from '../../common/components/BrandPart/BrandPart'
import './style.less';
import '../Home/static/header.less'

const workInProgressIcon = require("../../common/assets/work-in-progress-icon.svg")

class Brands extends React.Component {
    constructor(props) {
        super(props);
        const appLocale = cnLocale;
        this.state = {
            appLocale,
            email: '',
            done: false,
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

    emailSignup = () => {
        const email = this.state.email
        if (!this.state.done && email != "") {
            const date = new Date()
            PostBrandEmailSignUp(this.state.firebase, { date, email })
            this.setState({ done: true })
        }
    }

    render() {
        return (
            <div>
                <SEO
                    title="Poddhype | Marknadsför ditt företag i podcasts"
                    description="Via poddhypes plattform kan du sortera efter ämne och målgrupp för att sedan direkt kontakta poddar med en publik som passar dig."
                />
                <PageWrapper footer={true}>
                    <BrandPart />
                    <div className="page">
                        <div className="wrapper-content-box">

                            <p>
                                Poddhype är under utveckling, snart öppnar vi upp vår portal för Brands.
                            </p>
                            <h3>Håll dig informerad, premunera på vårt nyhetsbrev.</h3>
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
                                title={this.state.done ? 'Tack!' : 'Sign up'}
                                onClick={() => this.emailSignup()}
                            />
                        </div>
                    </div>
                </PageWrapper>
            </div >
        )
    }
}

export default Brands
