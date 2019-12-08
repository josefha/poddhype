import React from 'react'
import "./style.less"
import { Row, Col } from 'antd';


// props needed img 
// optional textPosition

const ContentImageBox = (props) => {
    return (
        props.textPosition == 'left' ?
            <Row align="middle" gutter={[8, 8]} justify="space-around" className="podcasters-info-box-row" >
                <Col align="middle" xs={24} md={12} className="podcasters-info-box-column">
                    <div className="podcasters-info-box-column-content">
                        {props.children}
                    </div>
                </Col>
                <Col xs={24} md={12} >
                    <div className="podcasters-info-box-icon">
                        <img src={props.img} />
                    </div>
                </Col>
            </Row>
            :
            <Row align="middle" gutter={[8, 8]} justify="space-around" className="podcasters-info-box-row" >
                <Col xs={24} md={12} className="podcasters-info-box-icon">
                    <img src={props.img} />
                </Col>
                <Col align="middle" xs={24} md={12} className="podcasters-info-box-column">
                    <div className="podcasters-info-box-column-content">
                        {props.children}
                    </div>
                </Col>
            </Row>
    )
}

export default ContentImageBox