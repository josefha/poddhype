import React from 'react';
import { Button } from 'antd'
import { Link } from "@reach/router"
import { ButtonCta } from '../../common/components/Buttons/index'
import { HeaderLink } from '../../common/components/HeaderLink/index'
import './static/header.less';

const logo = require('./../../common/assets/poddhype-logo-black-09.png');

export default function Header(props) {

  return (
    <header {...props} id="header">
      <div id="logo">
        <img alt="logo" src={logo} />
      </div>
      {props.isMobile != true &&
        <div className="header-right">
          <HeaderLink to="/brands" >Brands</HeaderLink>
          <HeaderLink to="/podcasts"> Podcasts </HeaderLink>
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
