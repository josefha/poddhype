
import React from "react";
import cnLocale from '../../zh-CN'
import PageWrapper from '../../common/components/PageWrapper/PageWrapper'
import SignupBlock from '../../common/components/SignupBlock'
import SEO from '../../common/components/seo'
import { Input, Collapse } from 'antd'
import './style.less';
import '../Home/static/header.less'

const faqIcon = require("../../common/assets/faq.svg")


const { Panel } = Collapse;

class About extends React.Component {
    constructor(props) {
        super(props);
        const appLocale = cnLocale;
        this.state = {
            appLocale,
            email: '',
        };
    }

    question = [
        { title: 'Varför är Poddhype gratis för poddar?', answer: "Poddhype matchar podcast med företag" },
        { title: 'Vad betyder det att vara en partnerpodd?', answer: "GRATIS" },
        { title: 'Varför är det gratis att registrera sig?', answer: "För en poddcast " }
    ]

    render() {
        return (
            <div>
                <SEO
                    title="Poddhype | En plattform som för samman podcasts med sponsorer"
                    description="Podcasts, sponsorskap, sponsorer, reklam, annonsering"
                />
                <PageWrapper footer={true}>
                    <div className="page about-page" >
                        <div className="about-wrapper-content-box">
                            <h1 key="h1" id="lp-title">
                                Om Poddhype
                            </h1>
                            <p>
                                Poddhype är just nu i en tidig uppstarts fas, vi pratar just nu med poddar som vi tror skulle passa in i vår plattform. Vi planerar att nå ut till annonsörer när vi har en bra bas av podcasts och har färdigutvecklat vår webb platform. Vi tror att marknadsföring i podcasts är något som kommer se en starkt tillväxt under 2020 och vi ser det som vårt uppdrag att sprida kunskap om värdet i det.
                            </p>
                            <img id="faq-icon" src={faqIcon} />
                            <h2 id="second-title">Vanliga frågor</h2>
                            <Collapse style={{ textAlign: 'left', marginBottom: '100px' }} bordered={true} defaultActiveKey={['0']}>
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
