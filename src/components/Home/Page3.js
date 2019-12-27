import React from 'react';
import { ButtonCta, ButtonTransparent } from '../../common/components/Buttons/index'

export default function Page3() {
  return (
    <div className="home-page-wrapper page3" id="page3">
      <div className="page" >

        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <div style={{ maxWidth: '500px', margin: 'auto' }} >
            <div className="ant-divider ant-divider-horizontal ant-divider-with-text-center" role="separator">
              <span className="ant-divider-inner-text">Bli medlem</span>
            </div>
          </div>
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
    </div >
  );
}
