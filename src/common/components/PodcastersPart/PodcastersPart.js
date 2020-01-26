import React from "react";

import { PurpleSubheading } from '../Texts/Texts'
import './style.less';


import { ButtonCta } from '../Buttons/index.js'
import ContentImageBox from '../ContentImageBox'

import './style.less';

const podcasterIcon = require('../../assets/podcast-girl-icon.svg');
const investIcon = require('../../assets/invest-icon.svg');
const clockIcon = require('../../assets/clock-icon.svg');
const worldIcon = require('../../assets/world-girl-icon.svg');
const mailIcon = require('../../assets/mail-guy-icon.svg');


const PodcastersPart = (props) => {
    const infoBox1 = <ContentImageBox
        img={investIcon}
        textPosition='left'>
        <h2>Få det du är värd </h2>
        <p>Dina lyssnare är värdefulla, vi hjälper dig ta betalt för din nichade målgrupp genom en bra sponsor matchning.</p>
    </ContentImageBox>

    const infoBox2 = <ContentImageBox
        img={clockIcon}>
        <h2>Tidseffektivt</h2>
        <p>Allt du behöver göra är att bli medlem så brands kan hitta dig i vår plattform. Du jobbar vidare som vanligt och kontaktas endast när ett brand vill diskutera sammarbete. </p>
    </ContentImageBox>

    const infoBox3 = <ContentImageBox
        img={worldIcon}
        textPosition='left'>
        <h2>Nå ut till fler</h2>
        <p>Vi ger dig möjligheten att bli upptäckt av brands som annars inte skulle ha hitta dig. Vi släpper bara in seriösa Brands.</p>
    </ContentImageBox>

    const infoBox4 = <ContentImageBox
        img={mailIcon}>
        <h2>Support hela vägen</h2>
        <p>Teamet på poddhype ger dig stöd hela vägen. Vi jobbar hårt för att sammarbetet mellan dig och Brands ska bli så bra som möjligt.</p>
    </ContentImageBox>

    return (
        < div className="page" id="podcasters" >
            <div className="wrapper-content">
                <img style={{ width: '300px', margin: '0 0 40px 0', height: 'auto' }} src={podcasterIcon} />
                <h1 key="h1" id="lp-title">
                    Partnerskap för poddar
                </h1>
                {/* <PurpleSubheading>
                    test text
                </PurpleSubheading> */}

                <h2 id="banner_description">
                    Poddhype hjälper dig att hitta sponsorer till din podcast.
            </h2>
            </div>
            {infoBox1}
            {infoBox2}
            {infoBox3}
            {infoBox4}
            <div style={{ textAlign: 'center' }}>
                <ButtonCta
                    to="/signup"
                    title="Bli medlem"
                />
            </div>
            {!props.isHomePage && (<div id="podcasters-part3">
                <div className="wrapper-content">
                    <div>
                        <p>Fortfarande inte övertygad? <span style={{ fontWeight: 600 }}> partner@poddhype.com</span> </p>
                    </div>
                </div>
            </div>)
            }
        </div >
    )
}

export default PodcastersPart

