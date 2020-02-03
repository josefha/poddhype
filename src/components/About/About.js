
import React from "react";
import PageWrapper from '../../common/components/PageWrapper/PageWrapper'
import SignupBlock from '../../common/components/SignupBlock'
import SEO from '../../common/components/seo'
import { Collapse } from 'antd'
import './style.less';
import '../Home/static/header.less'

const faqIcon = require("../../common/assets/faq.svg")


const { Panel } = Collapse;

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    question = [
        {
            title: 'Är det helt gratis för podcasts att gå med i Poddhype?',
            answer: "Ja det helt gratis, Poddhype tar endast betalt av företagen som letar efter marknadsföring."
        },
        {
            title: 'Har jag några skyldigheter efter registrering?',
            answer: "Nej, du har inga skyldigheter att ingå i något samarbete. Utan när ett företag skickar ett förslag tar du då beslut om det skulle vara något för dig eller inte."
        },
        {
            title: 'När får jag min första förfrågan?',
            answer: "Poddhype är fortfarande i ett väldigt tidigt stadie, just nu pratar vi med podcasts som skulle vara intresserad av att gå med i vår plattform. Vi utvecklar samtidigt vår företagsportal och planerar att börja marknadsföra Poddhype mot Brands i mitten på mars."
        },
        {
            title: 'Vart kan jag logga in?',
            answer: "Poddhype webbsida är fortfarande under utveckling så just kan du endast registrera dig. Men oroa dig inte efter du registrerat din podd kontaktar vi dig via mail när mer funktionalitet är på plats."
        }
    ]

    render() {
        return (
            <div>
                <SEO
                    title="Poddhype | En plattform som för samman podcasts med sponsorer"
                    description="Podcasts, sponsorskap, sponsorer, reklam, annonsering, poddar"
                />
                <PageWrapper footer={true}>
                    <div className="page about-page" >
                        <div className="about-wrapper-content-box">
                            <h1 key="h1" id="lp-title">
                                Om Poddhype
                            </h1>
                            <p>
                                Poddhype är en nystartad plattform som matchar poddare med företag som vill marknadsföra sig i podcasts.
                                Podcast är ett fantastiskt medium att göra reklam i och vi ser att många företag börjar inse just detta.
                                Poddhype sprider kunskap och förenklar processen för dessa företag att hitta passande poddar.
                            </p>
                            <p>
                                <b>Det bästa</b> är att den enda en poddare behöver göra är att registrera ett konto.
                                    Efter det kan företag hitta podden i vår portal och skicka förslag om samarbete.
                                    Under tiden jobbar poddarna på som vanligt.
                            </p>
                            <img id="faq-icon" src={faqIcon} />
                            {/* <h2 id="second-title">Vanliga frågor</h2> */}
                            <Collapse style={{ textAlign: 'left', marginBottom: '100px' }} bordered={true} defaultActiveKey={['0', '1']}>
                                {this.question.map((q, i) => (
                                    <Panel header={q.title} key={i}>
                                        <p class="about-answer-text">
                                            {q.answer}
                                        </p>
                                    </Panel>
                                ))}
                            </Collapse>
                            <SignupBlock />
                        </div>
                    </div>
                </PageWrapper>
            </div >
        )
    }
}

export default About
