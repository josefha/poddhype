import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'antd';

const logo = require('./../../common/assets/poddhype-logo-white-small.png');

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>PODDHYPE</h2>
              <div>
                <a target="_blank " href="">
                  För brands
                </a>
              </div>
              <div>
                <a target="_blank " href="">
                  För podcasts
                </a>
              </div>
              <div>
                <a target="_blank " href="">
                  Kontakt
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col md={4} sm={24} >
          <span className="foter-logo">
            <img style={{ height: '24px', marginLeft: '90px' }} alt="logo" src={logo} />
          </span>
        </Col>
        <Col md={20} sm={24}>
          <span style={{ marginRight: 12 }}>Copyright © <FormattedMessage id="app.footer.company" /></span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
