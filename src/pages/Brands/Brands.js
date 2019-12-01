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
        console.log("sign up to email")
    }

    render() {
        return (
            <div>
                <PageWrapper
                    pageTitle="Poddhype förenklar din podcast marknadsföring "
                >
                    <div className="page">
                        <div className="wrapper-content-box">
                            <h1 key="h1" id="lp-title">
                                Vi öppnar snart vår portal för Brands
                            </h1>
                            <h2 id="banner_description" style={{ marginTop: '10px' }}>
                                Signa gärna upp dig på vårt nyhetsbrev.
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
                                title="Sign-up"
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
