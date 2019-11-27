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
      <div id="logo">
        <img alt="logo" src={logo} />
      </div>
      {props.isMobile != true &&
        <div className="header-right">
          <HeaderLink type='normal' to="#page1">Podcasters </HeaderLink>
          <HeaderLink type='normal' to="#page2">Brands</HeaderLink>
          <HeaderLink to="/blogg"> Blogg </HeaderLink>
          {/* <div className="underbar"></div> */}
          <ButtonCta
            size="small"
            to="/bli-en-partner"
            title="Skapa konto"
          />
        </div>}
    </header >
  );
}
