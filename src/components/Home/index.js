import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import DocumentTitle from 'react-document-title';
import SEO from '../../common/components/seo'
import { enquireScreen } from 'enquire-js';
import { getFirebase } from "../../common/api/firebase"
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import BrandPart from './BrandPart';
import Page3 from './Page3';
import Footer from './Footer';
import cnLocale from '../../zh-CN';
import './static/style';


let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    const appLocale = cnLocale;
    addLocaleData(appLocale.data);
    this.state = {
      appLocale,
      isMobile,
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
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });

    this.loadFirebase()
  }
  render() {
    const { appLocale } = this.state;
    return (
      <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
        <>
          <SEO
            title="Poddhype | Matchar Brands med poddar"
            description="Marknadsför ditt företag i podcasts med en målgrupp som passar dig. Vi bygger en plattform som gör det lättare att hitta värdefulla samarbeten."
          />
          <Header />
          <div className="page-wrapper home">
            <Banner isMobile={this.state.isMobile} />
            <Page1 isMobile={true} />
            <BrandPart />
            <Page3 isMobile={this.state.isMobile} />
            <Footer />
            <DocumentTitle title="Poddhype | Matchar Podcasters med Brands" key="title" />
          </div>
        </>
      </IntlProvider>
    );
  }
}
export default Home;
