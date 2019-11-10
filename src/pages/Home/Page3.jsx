import React from 'react';
import svgBgToParallax from './util';
import { Divider, Input, Button } from 'antd'
import { ButtonCta, ButtonTransparent } from '../../common/components/Buttons/index'

const svgBg = [
];
const svgChildren = svgBgToParallax(svgBg);

export default function Page3() {
  return (
    <div className="home-page-wrapper page3" id="page3">
      <div className="parallax-bg top" >
        <svg width="1440px" height="557px" viewBox="0 0 1440 557" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" >
          {svgChildren}
        </svg>
      </div>
      <div className="page" >
        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <h2 id='email-block-title'>Bli medlem</h2>
          {/* <div style={{ marginTop: '140px' }} className="ant-divider ant-divider-horizontal ant-divider-with-text-center" role="separator">
            <span className="ant-divider-inner-text">Bli medlem</span>
          </div> */}
          <ButtonCta
            to="/bli-en-partner"
            title="För Podcasts"
          />
          <ButtonTransparent
            to="/brands"
            title="För Brands"
          />
        </div>
      </div>
    </div >
  );
}
