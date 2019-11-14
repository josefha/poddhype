import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Footer from './Footer';
import cnLocale from '../../zh-CN';
import './static/style';

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    const appLocale = cnLocale;
    addLocaleData(appLocale.data);
    this.state = {
      appLocale,
      isMobile,
    };
  }

  setUpSmothScrolling = async () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }

  componentDidMount() {
    this.setUpSmothScrolling()

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
        <div className="page-wrapper home">
          <Header isMobile={this.state.isMobile} />
          <Banner isMobile={this.state.isMobile} />
          <Page1 isMobile={this.state.isMobile} />
          <Page2 isMobile={this.state.isMobile} />
          <Page3 isMobile={this.state.isMobile} />
          <Footer />
          <DocumentTitle title="Poddhype - Matchar Brands med Podcasts" key="title" />
        </div>
      </IntlProvider>
    );
  }
}
export default Home;
