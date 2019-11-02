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
          <Link to="/bli-en-partner">
            <Button onClick={() => console.log("")} type="primary" size='large'>Bli partner</Button>
          </Link>
        </div>}
    </header >
  );
}
