import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import { FormattedMessage } from 'react-intl';
import { enquireScreen } from 'enquire-js';
import Header from '../../../components/Home/Header';

import cnLocale from '../../../zh-CN';
import './style.less';

let isMobile = false;
enquireScreen((b) => {
    isMobile = b;
});

export default class PageWrapper extends React.PureComponent {
    constructor(props) {
        super(props);
        const appLocale = cnLocale;
        addLocaleData(appLocale.data);
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

        const Footer = () =>
            <div className="footer-wrapper">
                <div className="footer-text">Copyright © <FormattedMessage id="app.footer.company" /></div>
            </div>


        const { appLocale } = this.state;
        return (
            <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
                <>
                    <Header id="header-large" isMobile={this.state.isMobile} />
                    <div className="page-wrapper-component">
                        {this.props.children}
                        {this.props.footer == true && Footer()}
                    </div>
                </>
            </IntlProvider>
        );
    }
}