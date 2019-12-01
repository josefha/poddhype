import React from "react";
import Header from "../Home/Header"

import { addLocaleData, IntlProvider } from 'react-intl';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import cnLocale from '../../zh-CN'
import PageWrapper from '../../common/components/PageWrapper/PageWrapper'
import { ButtonCta, ButtonTransparent } from '../../common/components/Buttons/index.js'
import { CustomInput } from '../../common/components/CustomInput'
import { Input, Divider } from 'antd'
import { PostBrandEmailSignUp } from '../../common/api/db/brands.js'

import './style.less';
import '../Home/static/header.less'

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
            done: false
        };
    }

    componentDidMount() {
        enquireScreen((b) => {
            this.setState({
                isMobile: !!b,
            });
        });
    }

    emailSignup = () => {
        if (!this.state.done) {
            console.log("Email Signup")
            const email = this.state.email
            const date = new Date()
            PostBrandEmailSignUp({ date, email })
            this.setState({ done: true })
        }
    }

    render() {
        const done = this.state.done
        return (
            <div>
                <PageWrapper
                    pageTitle="Poddhype förenklar din podcast marknadsföring "
                >
                    <div className="page">
                        <div className="wrapper-content-box">
                            <h1 key="h1" id="lp-title">
                                Snart öppnar vi vår portal för brands
                            </h1>
                            <h2 id="banner_description" style={{ marginTop: '10px' }}>
                                Prenumerera gärna på vårt nyhetsbrev så länge.
                            </h2>
                            <Input
                                placeholder="Din Email"
                                style={{
                                    fontFamily: 'Montserrat',
                                    height: '90px',
                                    height: '40px',
                                    fontSize: '14px',
                                    margin: '20px 0'
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
