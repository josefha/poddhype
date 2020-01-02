import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import { getFirebase } from "../../api/firebase"

import Header from '../../../components/Home/Header';

import cnLocale from '../../../zh-CN';
import './style.less';


export default class PageWrapper extends React.Component {
    constructor(props) {
        super(props);
        const appLocale = cnLocale;
        addLocaleData(appLocale.data);
        this.state = {
            appLocale,
            firebase: null,
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

        const Footer = () =>
            <div className="footer-wrapper">
                <div className="footer-text">Copyright © <FormattedMessage id="app.footer.company" /></div>
            </div>


        const { appLocale } = this.state;
        return (
            <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
                <>
                    <Header id="header-large" />
                    <div className="page-wrapper-component">
                        {this.props.children}
                        {this.props.footer == true && Footer()}
                    </div>
                </>
            </IntlProvider>
        );
    }
}