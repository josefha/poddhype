import React from 'react';
import { Button } from 'antd'
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header {...props} id="header">
      <div id="logo">
        <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
      </div>
      {props.isMobile != true &&
        <div style={{ float: 'right', margin: 'auto', marginTop: '15px' }}>
          <Button onClick={() => console.log("click")} type="primary" size='large'><Link to="/bli-en-partner"></Link>Bli partner</Button>
        </div>}
    </header >
  );
}
