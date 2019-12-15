import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <span style={{ marginRight: 12 }}>Copyright © <FormattedMessage id="app.footer.company" /></span>
      </div>
    </footer>
  );
}

export default Footer;
