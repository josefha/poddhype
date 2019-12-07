import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'antd';

const logo = require('./../../common/assets/poddhype-logo-white-small.png');

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        {/*  <Row style={{ padding: '86px 24px 0px 24px' }}>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <span className="foter-logo">
                <img style={{ height: '34px', marginLeft: '0px' }} alt="logo" src={logo} />
              </span>
              <div>
                <p>hej@poddhype.com</p>
              </div>
              <div>
              </div>
            </div>
          </Col> */}
        {/* <Col offset={12} md={6} sm={24} xs={24}>
            <div className="footer-center">
              <a href="">
                Podcasts
                </a>
            </div>
            <div>
              <a href="">
                Brands
                </a>
            </div>
          </Col> */}

        {/* <Col md={24} sm={24} xs={24}>
            <div
              style={{ margin: '20 50px' }}
              className="ant-divider ant-divider-horizontal ant-divider-with-text-center" role="separator">
            </div>
          </Col>
        </Row> */}
        <Row style={{ height: '60px', paddingTop: '90px' }}>
          <span style={{ marginRight: 12 }}>Copyright © <FormattedMessage id="app.footer.company" /></span>
        </Row>
      </div>
      {/* <Row className="bottom-bar">
        <Col md={4} sm={24} >
          <span className="foter-logo">
            <img style={{ height: '24px', marginLeft: '90px' }} alt="logo" src={logo} />
          </span>
        </Col>
        <Col md={20} sm={24}>
          <span style={{ marginRight: 12 }}>Copyright © <FormattedMessage id="app.footer.company" /></span>
        </Col>
      </Row> */}
    </footer>
  );
}

export default Footer;
