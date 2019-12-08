import React from "react";

import ContentImageBox from '../../common/components/ContentImageBox'


const person_sitting = require('./../../common/assets/person-sitting-music.svg');
const book_with_girl = require('./../../common/assets/book-with-girl.svg');
const target_with_person = require('./../../common/assets/target-with-person.svg');
const agreement = require('./../../common/assets/agreement.svg');

const BrandPart = () => (
    <div className="brand-part-wrapper">
        <div className="header-text-box">
            <h2>Poddhype för Brands</h2>
            <h3>Marknadsför ditt företag i en podcast</h3>
            <p> Få rätt information utan att spendera dagar på google, på poddhypes brand platform kan du sortera efter målgrupp och niche för att sedan direkt kontakta podcasts med en publik som passar dig.</p>
        </div>
        {/* <div className="brand-part-subheading">
            <h2 >Varför podcast marknadsföring?</h2>
        </div> */}
        <ContentImageBox
            img={person_sitting}
            textPosition='left'>
            <h2>Inga distraktioner</h2>
            <p>Nå kunder på deras villkor, på gymmet, under solsemestern eller på bussen.</p>
        </ContentImageBox>
        <ContentImageBox
            img={book_with_girl}>
            <h2>Personligt</h2>
            <p>Poddcasters berättar med sin egen röst er story till sina trogna lyssnare.</p>
        </ContentImageBox>
        <ContentImageBox
            img={target_with_person}
            textPosition='left'>
            <h2>Hitta rätt direkt</h2>
            <p>Nå relevanta kunder genom podcasts med en matchande målgrupp.</p>
        </ContentImageBox>
    </div>)

export default BrandPart

