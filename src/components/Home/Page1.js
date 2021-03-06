import React from 'react';
import { Row, Col } from 'antd';
import { FormattedMessage } from 'react-intl';
import { ArrowDown } from '../../common/components/ArrowDown/ArrowDown'

const one = require('../../common/assets/one-green.png')
const two = require('../../common/assets/two-green.png')
const three = require('../../common/assets/three-green.png')

const themeColor = '#009E7E' // bb5a5f

const page1Data = [
  {
    img: one,
    name: 'Podcasters',
    nameEn: 'Poddare beskriver sin podd, sin målgrupp och vad de vill få ut av ett sponsorskap.',
    svgBg: (
      <svg width="213px" height="303px" viewBox="0 0 213 303" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <circle id="Oval-12-Copy-6" fill={themeColor} opacity="0.45" cx="60" cy="157" r="25" />
        <circle id="Oval-12-Copy" fill={themeColor} opacity="0.35" cx="167.5" cy="65.5" r="11.5" />
        <circle id="Path" fill={themeColor} opacity="0.5" cx="195.5" cy="117.5" r="3.5" />
        <circle id="Path" fill={themeColor} opacity="0.5" cx="117" cy="2" r="2" />
        <circle id="Path" fill={themeColor} opacity="0.6" cx="82" cy="36" r="2" />
        <circle id="Path" fill={themeColor} opacity="0.6" cx="26.5" cy="102.5" r="1.5" />
      </svg>
    ),
  },
  {
    img: two,
    name: 'Brands',
    nameEn: 'Brands hittar passande poddar i portalen och skickar förslag om sammarbete.',
    svgBg: (
      <svg width="207px" height="295px" viewBox="0 0 207 295" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <circle id="Oval-12-Copy-2" fill={themeColor} opacity="0.45" cx="21.5" cy="90.5" r="21.5" />
        <circle id="Oval-12-Copy-3" fill={themeColor} opacity="0.35" cx="162.5" cy="163.5" r="14.5" />
        <circle id="Path" fill={themeColor} opacity="0.5" cx="164.5" cy="117.5" r="3.5" />
        <circle id="Path" fill={themeColor} opacity="0.5" cx="96" cy="2" r="2" />
        <circle id="Path" fill={themeColor} opacity="0.6" cx="141" cy="36" r="2" />
        <circle id="Path" fill={themeColor} opacity="0.6" cx="34.5" cy="142.5" r="1.5" />
      </svg>
    ),
  },
  {
    img: three,
    name: 'Förslag',
    nameEn: 'Om alla parter är nöjda kan sponsorskapet genomföras och värde skapas.',
    svgBg: (
      <svg width="215px" height="286px" viewBox="0 0 215 286" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" style={{ transform: 'translateX(-30px)' }}>
        <circle id="Oval-12-Copy-4" fill={themeColor} opacity="0.35" cx="77" cy="152" r="10" />
        <circle id="Oval-12-Copy-5" fill={themeColor} opacity="0.45" cx="194.5" cy="74.5" r="20.5" />
        <circle id="Path" fill={themeColor} opacity="0.5" cx="44.5" cy="117.5" r="3.5" />
        <circle id="Path" fill={themeColor} opacity="0.5" cx="132" cy="2" r="2" />
        <circle id="Path" fill={themeColor} opacity="0.6" cx="177" cy="36" r="2" />
        <circle id="Path" fill={themeColor} opacity="0.6" cx="147.5" cy="182.5" r="1.5" />
      </svg>
    ),
  }
];

const getTransformXY = (t) => {
  const s = t.replace(/[a-z|(|)]/g, '').split(',');
  return {
    x: s[0],
    y: s[1],
  };
};

const svgToXY = page1Data.map((item) => {
  const c = item.svgBg.props.children;
  return c.map((child) => {
    const p = child.props;
    const trnasformXY = p.transform ? getTransformXY(p.transform) : {};
    return {
      x: parseFloat(p.x || p.cx || trnasformXY.x),
      y: parseFloat(p.y || p.cy || trnasformXY.y),
    };
  });
});

export default class Page1 extends React.PureComponent {
  state = {
    hoverKey: null,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    let text = document.getElementById("how-it-works-text")
    if (text) {
      setTimeout(function () {
        text.style.opacity = 1;
      }.bind(this), 220);
    }
    let icons = document.getElementById("home-number-icons-container");
    if (icons) {
      setTimeout(function () {
        icons.style.opacity = 1;
      }.bind(this), 320);
    };
  }

  getEnter = (i, e) => {
    const ii = e.index;
    const r = (Math.random() * 2) - 1;
    const y = (Math.random() * 10) + 10;
    const delay = Math.round(Math.random() * (ii * 30));
    const pos = svgToXY[i][ii];
    return [
      { x: 100, y: 150, duration: 0 },
      {
        delay, opacity: 1, x: pos.x, y: pos.y, ease: 'easeOutBack', duration: 300,
      },
      {
        y: r > 0 ? `+=${y}` : `-=${y}`,
        duration: (Math.random() * 1000) + 2000,
        yoyo: true,
        repeat: -1,
      },
    ];
  };

  leave = {
    opacity: 0, duration: 300, x: 100, y: 150, ease: 'easeInBack',
  };

  render() {
    const children = page1Data.map((item, i) => {
      return (
        <Col key={item.nameEn} md={8} xs={24}>
          <div
            className="page1-point-wrapper"
            enter={e => this.getEnter(i, e)}
            leave={this.leave}
            {...item.svgBg.props}
            component="svg"
            resetStyleBool={false}
          >
          </div>
          <div
            className="page1-block"
            type="bottom"
            componentProps={{ to: item.to }}
          >
            <div className="page1-image">
              <img className="number-icons" src={item.img} />
            </div>
            <p>{item.nameEn}</p>
          </div>
        </Col>
      );
    });

    return (
      <div className="home-page-wrapper page1" id="page1">
        <div className="page" >
          <h2 id="how-it-works-text"><FormattedMessage id="app.home.design-language" /></h2>
          <ArrowDown />
          <Row
            id="home-number-icons-container"
            justify="center"
            key="queue"
            type="bottom"
          >
            {children}
          </Row>
        </div>
      </div>
    );
  }
}
