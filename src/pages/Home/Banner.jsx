import React from 'react';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import { FormattedMessage } from 'react-intl';
import BannerImage from './BannerImage';
import { Button, Icon } from 'antd'
import { Link } from "@reach/router"


const loop = {
  duration: 3000,
  yoyo: true,
  repeat: -1,
};

class Banner extends React.PureComponent {
  static defaultProps = {
    className: 'banner',
  }

  render() {
    const { className, isMobile } = this.props;
    return (
      <div className="home-page-wrapper banner-wrapper" id="banner">
        <div className="banner-bg-wrapper">
          <ScrollParallax location="banner" className="banner-bg" animation={{ playScale: [1, 1.5], rotate: 0 }} />
        </div>
        <QueueAnim className={`${className} page`} type="alpha" delay={150}>
          {/* {isMobile && (
            <div className="img-wrapper" key="image">
              <BannerImage />
            </div>)} */}
          <QueueAnim
            className="text-wrapper"
            key="text"
            type="bottom"
          >
            <h1 key="h1" style={{ fontSize: '40px' }}>
              Matchar Podcasts med Brands
            </h1>
            <h2 key="h2" style={{ fontSize: '32px', textAlign: 'left' }}>
              <FormattedMessage id="app.home.introduce" />
            </h2>
            <Link to="/bli-en-partner">
              <Button
                type="primary"
                size='large'>
                Bli partner nu
            </Button>
            </Link>
          </QueueAnim>
          {/* {!isMobile && (
            <div className="img-wrapper" key="image">
              <ScrollParallax location="banner" component={BannerImage} animation={{ playScale: [1, 1.5], y: 80 }} />
            </div>)} */}
        </QueueAnim>
      </div >
    );
  }
}

export default Banner;
