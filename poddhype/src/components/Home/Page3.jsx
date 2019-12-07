import React from 'react';
import svgBgToParallax from './util';
import { Divider, Input, Button } from 'antd'
import { ButtonCta, ButtonTransparent } from '../../common/components/Buttons/index'


const readMoreIcon = require('./../../common/assets/read-more-icon.svg');

export default function Page3() {
  return (
    <div className="home-page-wrapper page3" id="page3">
      <div className="page" >

        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <div style={{ maxWidth: '500px', margin: 'auto' }} >
            <img style={{ width: '250px', margin: '0 auto 20px' }} src={readMoreIcon}></img>
            <div className="ant-divider ant-divider-horizontal ant-divider-with-text-center" role="separator">
              <span className="ant-divider-inner-text">Läs mer</span>
            </div>
          </div>
          <ButtonTransparent
            to="/brands"
            title="Om Brands"
          />
          <ButtonCta
            to="/podcasters"
            title="Om Podcasters"
          />
        </div>
      </div>
    </div >
  );
}
