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
                <PageWrapper
                    pageTitle="Poddhypes blogg"
                >
                    <div className="page">
                        <div className="wrapper-content-box">
                            <h1 style={{ marginBottom: '25px' }} key="h1" id="lp-title">
                                bloggen öppnar snart
                            </h1>
                            <h2 id="banner_description" style={{ marginTop: '10px' }}>

                            </h2>
                            <ButtonTransparent
                                to="/"
                                title="Tillbaka"
                            />
                        </div>
                    </div>
                </PageWrapper>
            </div >
        )
    }
}

export default Brands
