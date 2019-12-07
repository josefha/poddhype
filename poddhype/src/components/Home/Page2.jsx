import React from 'react';
import { Row, Col, Icon } from 'antd';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import { FormattedMessage } from 'react-intl';

import svgBgToParallax from './util';


const person_sitting = require('./../../common/assets/person-sitting-music.svg');
const book_with_girl = require('./../../common/assets/book-with-girl.svg');
const target_with_person = require('./../../common/assets/target-with-person.svg');
const agreement = require('./../../common/assets/agreement.svg');


const page2Data = [
  {
    img: agreement,
    name: 'Poddhype för Brands ',
  },
  {
    img: person_sitting,
    name: 'Inga distraktioner',
    slogan: (<FormattedMessage id="app.home.spons-1" />),
  },
  {
    img: book_with_girl,
    name: 'Personligt',
    slogan: (<FormattedMessage id="app.home.spons-2" />),
  },
  {
    img: target_with_person,
    name: 'Hitta rätt direkt',
    slogan: (<FormattedMessage id="app.home.spons-3" />),
  },
];

const svgBgChild = [
  (
    <svg width="100%" height="100%" viewBox="0 0 1401 1109" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" preserveAspectRatio="xMidYMid slice" >
    </svg >
  ),
  (
    <svg width="1311px" height="920px" viewBox="0 0 1311 920" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Group-11" transform="translate(1207.000000, 419.000000)" fill="#13C2C2">
        <image xlinkHref="https://gw.alipayobjects.com/zos/rmsportal/MnLEmwjipfhzPUmBJnJE.svg" />
      </g>
    </svg>
  ),
];

const svgBgChildArray = svgBgChild.map((item, i) => {
  const { props } = item;
  return React.cloneElement(item, { children: svgBgToParallax(props.children, i) });
});
export default function Page2({ isMobile }) {
  const componentButton = (
    <div key="b" className="components-button-wrapper">
      <p> hej@poddhype.com</p>
    </div>
  );
  const children = page2Data.map((item, i) => {
    if (!isMobile && !i) {
      return null;
    }
    const content = isMobile && !i ? componentButton : [
      <p key="p">{item.slogan}</p>
    ];
    return (
      <Row className="product-block" key={i.toString()}>
        <Col
          xs={8}
          md={i === 2 ? 6 : 8}
          className={`block-image-wrapper${i % 2 ? ' right' : ''}`}
        >
          <img src={item.img} style={isMobile && i === 2 ? { marginLeft: 16 } : {}} />
        </Col>
        <Col xs={16} md={i === 2 ? 18 : 16} className="block-text-wrapper">
          <h4>{item.name}</h4>
          {content}
        </Col>
      </Row>
    );
  });
  return (
    <div className="home-page-wrapper page2" id="page2">
      <div className="page" >
        <h2>Sponsra en podd</h2>
        <ScrollOverPack component={Row} className="page2-content" playScale="0.4">
          <div
            component={Col}
            componentProps={{ xs: 24, md: 12 }}
            className="page2-components"
            key="left"
            type="bottom"
            leaveReverse
          >
            <h3 key="h1">Poddhype för Brands</h3>
            <p key="p"><FormattedMessage id="app.home.brand-selling" /></p>
            {componentButton}
          </div>
          <div
            component={Col}
            componentProps={{ xs: 24, md: 12 }}
            className="page2-product"
            key="right"
            type="bottom"
            leaveReverse
          >
            {children}
          </div>
        </ScrollOverPack>
      </div>
      <div className="parallax-bg bottom" >
        {svgBgChildArray[0]}
      </div>
      <div className="parallax-bg top" >
        {svgBgChildArray[1]}
      </div>
    </div>
  );
}
