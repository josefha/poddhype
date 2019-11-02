import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import { FormattedMessage } from 'react-intl';
import BannerImage from './BannerImage';
import { Button, Icon } from 'antd'
import { Redirect } from "react-router-dom";


const loop = {
  duration: 3000,
  yoyo: true,
  repeat: -1,
};

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }
  static defaultProps = {
    className: 'banner',
  }

  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/target' />
    }
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
            {this.renderRedirect()}
            <Button onClick={() => this.setRedirect}
              type="primary"
              size='large'>
              Bli partner nu<Icon type="right" />
            </Button>
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
