import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>PODDHYPE</h2>
              <div>
                <a target="_blank " href="https://github.com/ant-design/ant-design">
                  För brands
                </a>
              </div>
              <div>
                <a target="_blank " href="https://github.com/ant-design/ant-design">
                  För podcasts
                </a>
              </div>
              <div>
                <a target="_blank " href="https://github.com/ant-design/ant-design">
                  Kontakt
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col md={4} sm={24} />
        <Col md={20} sm={24}>
          <span style={{ marginRight: 12 }}>Copyright © <FormattedMessage id="app.footer.company" /></span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
