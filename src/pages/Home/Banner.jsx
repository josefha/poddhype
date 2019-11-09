import React from 'react';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import { FormattedMessage } from 'react-intl';
import { Button } from 'antd'
import { Link } from "@reach/router"
import { ButtonCta, ButtonTransparent } from '../../common/components/Buttons/index.js'


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
          <QueueAnim
            className="text-wrapper"
            key="text"
            type="bottom"
          >
            <h1 key="h1" className="lp-title">
              Matchar Podcasts med Brands
            </h1>
            <h2 key="h2">
              <FormattedMessage id="app.home.introduce" />
            </h2>
            <div className="ant-divider ant-divider-horizontal ant-divider-with-text-center" role="separator">
              <span className="ant-divider-inner-text">Bli medlem</span>
            </div>
            <div className="button-container">
              <ButtonCta
                to="/bli-en-partner"
                title="För Podcasts"
              />
              <ButtonTransparent
                to="/brand-sponring"
                title="För Brands"
              />
            </div>
          </QueueAnim>
        </QueueAnim>
      </div >
    );
  }
}

export default Banner;