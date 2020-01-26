import React from "react";

import ContentImageBox from '../ContentImageBox'

const girl_relaxing_icon = require('../../assets/girl-relaxing-icon.svg');
const book_with_girl = require('../../assets/book-with-girl.svg');
const target_with_person = require('../../assets/target-with-person.svg');
const busniess_deal = require('../../assets/business-deal.svg');

const BrandPart = () => (
    <div className="brand-part-wrapper" id="part2">
        <div className="header-text-box">
            <img className="header-image" src={busniess_deal} />

            <h2>Poddhype för Brands</h2>
            <h3>Marknadsför ditt företag i en podcast</h3>
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
