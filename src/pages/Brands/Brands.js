import React from "react";
import Header from "../Home/Header"

import { addLocaleData, IntlProvider } from 'react-intl';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import cnLocale from '../../zh-CN'
import PageWrapper from '../../common/components/PageWrapper/PageWrapper'
import { ButtonCta, ButtonTransparent } from '../../common/components/Buttons/index.js'
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

    render() {
        return (
            <div>
                <PageWrapper>
                    <div className="page">
                        <div className="wrapper-content-box">
                            <h1 key="h1" id="lp-title">
                                Vi öppnar snart vår portal för Brands
                            </h1>
                            <h2 id="banner_description" style={{ marginTop: '10px' }}>
                                Signa gärna upp dig på vårt nyhetsbrev undertiden.
                            </h2>

                            <Input placeholder="Din email"
                                value={this.state.email}
                                onChange={(e) => this.setState({ email: e.value })} />
                            <ButtonTransparent
                                style={{ marginTop: '40px' }}
                                to="/"
                                title="Sign-up"
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
