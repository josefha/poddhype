import React from "react";

import { Row, Col } from 'antd';
import PageWrapper from '../../common/components/PageWrapper/PageWrapper'
import { ButtonCta } from '../../common/components/Buttons/index.js'

import './style.less';
import '../Home/static/header.less'

const podcasterIcon = require('./../../common/assets/podcast-girl-icon.svg');
const investIcon = require('./../../common/assets/invest-icon.svg');
const clockIcon = require('./../../common/assets/clock-icon.svg');
const worldIcon = require('./../../common/assets/world-girl-icon.svg');
const mailIcon = require('./../../common/assets/mail-guy-icon.svg');

class Podcasters extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const infoBox1 =
            <Row align="middle" gutter={[8, 8]} justify="space-around" className="podcasters-info-box-row" >
                <Col align="middle" xs={24} md={12} className="podcasters-info-box-column">
                    <div className="podcasters-info-box-column-content">
                        <h2>Få det du är värd </h2>
                        <p>Dina lyssnare är värdefulla, vi hjälper dig ta betalt för din nichade målgrupp genom en bra sponsor matchning.</p>
                    </div>
                </Col>
                <Col xs={24} md={12} >
                    <div className="podcasters-info-box-icon">
                        <img src={investIcon} />
                    </div>
                </Col>
            </Row>

        const infoBox2 =
            <Row align="middle" gutter={[8, 8]} justify="space-around" className="podcasters-info-box-row" >
                <Col xs={24} md={12} className="podcasters-info-box-icon">
                    <img src={clockIcon} />
                </Col>
                <Col align="middle" xs={24} md={12} className="podcasters-info-box-column">
                    <div className="podcasters-info-box-column-content">
                        <h2>Tidseffektivt</h2>
                        <p>Allt du behöver göra är att bli medlem så brands kan hitta dig i vår portal. Du jobbar vidare som vanligt och kontaktas endast när ett brand vill diskutera sammarbete. </p>
                    </div>
                </Col>
            </Row>
        const infoBox3 =
            <Row align="middle" gutter={[8, 8]} justify="space-around" className="podcasters-info-box-row" >
                <Col align="middle" xs={24} md={12} className="podcasters-info-box-column">
                    <div className="podcasters-info-box-column-content">
                        <h2>Nå fler</h2>
                        <p>Vi ger dig möjligheten att bli upptäckt av brands som annars inte skulle ha hitta dig.</p>

                    </div>
                </Col>
                <Col xs={24} md={12} className="podcasters-info-box-icon">
                    <img src={worldIcon} />
                </Col>
            </Row>

        const infoBox4 =
            <Row align="middle" gutter={[8, 8]} justify="space-around" className="podcasters-info-box-row" >
                <Col xs={24} md={12} className="podcasters-info-box-icon">
                    <img src={mailIcon} />
                </Col>
                <Col align="middle" xs={24} md={12} className="podcasters-info-box-column">
                    <div className="podcasters-info-box-column-content">
                        <h2>Inget spam</h2>
                        <p>Vi släpper bara in brands med bra värdegrund och vi delar inte din mail med någon. </p>
                    </div>
                </Col>
            </Row>

        return (
            <PageWrapper
                pageTitle="Poddhype | Partnerskap för Poddcaters"
                footer={true}
            >
                <div className="page" id="podcasters">
                    <div className="wrapper-content">
                        <img className="header-image" src={podcasterIcon} />
                        <h1 key="h1" id="lp-title">
                            Partnerskap för Podcasters
                            </h1>
                        <h2 id="banner_description">
                            Vi hjälper dig att hitta dom bästa sponsorskapen.
                        </h2>

                    </div>
                    {infoBox1}
                    {infoBox2}
                    {infoBox3}
                    {infoBox4}
                    <div id="podcasters-part2">
                        <ButtonCta
                            to="/bli-en-partner"
                            title="Bli medlem"
                        />
                    </div>
                    <div id="podcasters-part3">
                        <div className="wrapper-content">
                            <div>
                                <p>Fortfarande inte övertygad? Maila oss! <span style={{ fontWeight: 600 }}> partner@poddhype.com</span> </p>
                            </div>
                        </div>
                    </div>
                </div>

            </PageWrapper>
        )
    }
}

export default Podcasters
