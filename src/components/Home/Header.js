import React from 'react';
import { Link } from "@reach/router"
import { ButtonCta } from '../../common/components/Buttons/index'
import { HeaderLink } from '../../common/components/HeaderLink/index'
import MobileNavbar from '../../common/components/mobileNavbar'
import './static/header.less';

const logo = require('./../../common/assets/poddhype-logo-blackandwhite.png');

export default function Header(props) {
  return (
    <>
      <header {...props} id="header" class="desktop-only">
        <Link to="/">
          <div id="logo">
            <img alt="logo" src={logo} />
          </div>
        </Link>
        <div className="header-right">
          <HeaderLink to="/">Hem</HeaderLink>
          <HeaderLink to="/brands">Brands</HeaderLink>
          <HeaderLink to="/podcasters">Poddare </HeaderLink>
          <HeaderLink type='normal' to="https://medium.com/poddhype"> Nyheter </HeaderLink>
          <ButtonCta
            size="small"
            to="/signup"
            title="Skapa konto"
          />
        </div>
      </header >
      <MobileNavbar />
    </>
  );
}
