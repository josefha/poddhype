import React from 'react';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import { ButtonCta, ButtonTransparent } from '../../common/components/Buttons/index.js'

const celebrationIcon = require('./../../common/assets/people-celebration-icon.svg');


class Banner extends React.PureComponent {
  static defaultProps = {
    className: 'banner',
  }

  render() {
    const { className } = this.props;
    return (
      <div className="home-page-wrapper banner-wrapper" id="banner">
        <div className="banner-bg-wrapper">
          <ScrollParallax location="banner" className="banner-bg" animation={{ playScale: [1, 1.5], rotate: 0 }} />
        </div>
        <div className={`${className} page`} type="alpha" delay={150}>
          <div
            className="text-wrapper"
            key="text"
            type="bottom"
          >
            <img id="home-main-image" src={celebrationIcon}></img>
            <h1 key="h1" id="lp-title">
              Matchar Brands med poddar
            </h1>
            <h2 id="banner_description">
              Marknadsför ditt företag i podcasts med en målgrupp som passar dig.
              Vi bygger en plattform som gör det lättare att hitta värdefulla samarbeten.
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
                title="För poddar"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;