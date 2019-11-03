import React from 'react';
import { Button } from 'antd'
import { Link } from "@reach/router"

const logo = require('./../../common/assets/logo-with-text2.png');

export default function Header(props) {

  return (
    <header {...props} id="header">
      <div id="logo">
        <img alt="logo" src={logo} />
      </div>
      {props.isMobile != true &&
        <div style={{ float: 'right', margin: 'auto', marginTop: '15px' }}>
          {/* <Link to="/bli-en-partner">
            <Button onClick={() => console.log("")} type="primary" size='large'>Bli partner</Button>
          </Link> */}
          {/* <Link to="/login"> Brands </Link>
          <Link to="/login"> Podcasts </Link> */}
          <Link style={{ color: '#000' }} to="/login"> Logga in </Link>

        </div>}
    </header >
  );
}
