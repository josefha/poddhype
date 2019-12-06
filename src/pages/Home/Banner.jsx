import React from 'react';
import QueueAnim from 'rc-queue-anim';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import { ButtonCta, ButtonTransparent } from '../../common/components/Buttons/index.js'

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
            <h1 key="h1" id="lp-title">
              Matchar Podcasters med Brands
            </h1>
            <h2 id="banner_description">
              Hitta sponsorskap du är stolt över och ger värde till dina lyssnare.
              Vi bygger en portal som gör det lättare att hitta värdefulla samarbeten.
            </h2>
            <div className="ant-divider ant-divider-horizontal ant-divider-with-text-center" role="separator">
              <span className="ant-divider-inner-text">Bli medlem</span>
            </div>
            <div className="button-container">
              <ButtonTransparent
                to="/brands"
                title="För Brands"
              />
              <ButtonCta
                to="/podcasters"
                title="För Podcasters"
              />
            </div>
          </QueueAnim>
        </QueueAnim>
      </div >
    );
  }
}

export default Banner;