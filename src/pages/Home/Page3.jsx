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
      <div className="page" >
        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <div style={{ maxWidth: '500px', margin: 'auto' }} >
            <div className="ant-divider ant-divider-horizontal ant-divider-with-text-center" role="separator">
              <span className="ant-divider-inner-text">Läs mer</span>
            </div>
          </div>
          <ButtonTransparent
            to="/brands"
            title="För Brands"
          />
          <ButtonCta
            to="/bli-en-partner"
            title="För Podcasts"
          />
        </div>
      </div>
    </div >
  );
}
