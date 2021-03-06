import React from 'react'
import { Link } from 'gatsby'
import './style.less'

const logo = require('../../assets/poddhype-logo-blackandwhite.png');


const MobileNavbar = () => {
    return (
        <header class="header navbar-fixed-top mobile-only">
            <nav class="navbar" role="navigation">
                <div class="container">
                    <div class="menu-container js_nav-item">
                    </div>
                    <img id="mobile-logo-img" src={logo}></img>
                    <input type="checkbox" name="toggle" id="toggle" />
                    <label for="navbar-toggle"></label>
                    <div class="menu-mobile">
                        <div class="collapse navbar-collapse nav-collapse ">
                            <div class="menu-container">
                                <ul class="nav navbar-nav container-right ">
                                    <li class="js_nav-item nav-item"><Link to="/"><a class="nav-item-child">Hem</a></Link></li>
                                    <li class="js_nav-item nav-item"><Link to="/brands"><a class="nav-item-child" >Brands</a></Link></li>
                                    <li class="js_nav-item nav-item"><Link to="/podcasters"><a class="nav-item-child">Poddare</a></Link></li>
                                    <li class="js_nav-item nav-item"><Link to="/about-us"><a class="nav-item-child">Om Poddhype</a></Link></li>
                                    {/* <li class="js_nav-item nav-item"><a class="nav-item-child" target="_blank" href="medium.com/poddhype">Nyheter</a></li> */}
                                    <li class="js_nav-item nav-item"><Link to="/signup"><a class="nav-item-child">Bli medlem</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </header>)
}

export default MobileNavbar
