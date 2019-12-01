import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import Header from '../../../pages/Home/Header';
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
        const { appLocale } = this.state;
        return (
            <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
                <div className="page-wrapper-component">
                    <Header isMobile={this.state.isMobile} />
                    {this.props.children}
                    {/* <Footer /> */}
                    <DocumentTitle title={this.props.pageTitle} key="title" />
                </div>
            </IntlProvider>
        );
    }
}