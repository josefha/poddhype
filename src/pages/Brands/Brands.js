import React from "react";
import Header from "../Home/Header"

import { addLocaleData, IntlProvider } from 'react-intl';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import cnLocale from '../../zh-CN'
import './style.less';
import '../Home/static/style'

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
            <div className="page-wrapper">
                <Header isMobile={this.state.isMobile} />
                <h1>BRANDS PAGE</h1>
                <DocumentTitle title="Poddhype - Matchar Brands med Podcasts" key="title" />
            </div>
        )
    }
}

export default Brands
