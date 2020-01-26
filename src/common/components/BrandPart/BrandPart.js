import React from "react";

import ContentImageBox from '../ContentImageBox';
import { PurpleSubheading } from '../Texts/Texts'
import './style.less';

const girl_relaxing_icon = require('../../assets/girl-relaxing-icon.svg');
const book_with_girl = require('../../assets/book-with-girl.svg');
const target_with_person = require('../../assets/target-with-person.svg');
const busniess_deal = require('../../assets/business-deal.svg');


const BrandPart = () => (
    <div className="brand-part-wrapper">
        <div className="header-text-box">
            <img style={{ width: '300px', margin: '0 0 40px 0', height: 'auto' }} src={busniess_deal} />

            <h1>Poddhype för Brands</h1>
            <PurpleSubheading>Marknadsför ditt företag i en podcast</PurpleSubheading>
            <p> Få rätt information utan att spendera dagar på google, via poddhypes plattform kan du sortera efter ämne och målgrupp för att sedan direkt kontakta poddar med en publik som passar dig.</p>
        </div>
        <ContentImageBox
            img={target_with_person}
            textPosition='left'>
            <h2>Hitta rätt direkt</h2>
            <p>Nå relevanta kunder genom poddar med en matchande målgrupp.</p>
        </ContentImageBox>
        <ContentImageBox
            img={book_with_girl}>
            <h2>Personligt</h2>
            <p>Poddcasters berättar med sin egen röst er story till sina trogna lyssnare.</p>
        </ContentImageBox>
        <ContentImageBox
            img={girl_relaxing_icon}
            textPosition='left'>
            <h2>Inga distraktioner</h2>
            <p>Nå kunder på deras villkor, på gymmet, under solsemestern eller på bussen.</p>
        </ContentImageBox>
    </div>)

export default BrandPart

