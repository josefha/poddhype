import React from 'react';
import { Button } from 'antd'
import { Link } from "@reach/router"
import { ButtonCta } from '../../common/components/Buttons/index'

const logo = require('./../../common/assets/poddhype-logo-dark.png');

export default function Header(props) {

  return (
    <header {...props} id="header">
      <div id="logo">
        <img alt="logo" src={logo} />
      </div>
      {props.isMobile != true &&
        <div style={{ float: 'right', margin: 'auto' }}>
          <Link to="/brands"> Brands </Link>
          <Link to="/podcasts"> Podcasts </Link>
          <Link to="/Blogg"> Blogg </Link>

          <ButtonCta
            size="small"
            to="/bli-en-partner"
            title="Skapa konto"
          />
        </div>}
    </header >
  );
}
