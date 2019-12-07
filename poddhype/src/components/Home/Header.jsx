import React from 'react';
import { Button } from 'antd'
import { Link } from "@reach/router"
import { ButtonCta } from '../../common/components/Buttons/index'
import { HeaderLink } from '../../common/components/HeaderLink/index'
import './static/header.less';

const logo = require('./../../common/assets/poddhype-logo-blackandwhite.png');

export default function Header(props) {

  return (
    <header {...props} id="header">
      <Link to="/">
        <div id="logo">
          <img alt="logo" src={logo} />
        </div>
      </Link>
      {props.isMobile != true &&
        <div className="header-right">
          <HeaderLink to="/podcasters">Podcasters </HeaderLink>
          <HeaderLink to="/brands">Brands</HeaderLink>
          <HeaderLink type='normal' to="https://medium.com/poddhype"> Blogg </HeaderLink>
          <ButtonCta
            size="small"
            to="/signup"
            title="Skapa konto"
          />
        </div>}
    </header >
  );
}