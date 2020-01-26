
import React from "react";
import cnLocale from '../../zh-CN'
import PageWrapper from '../../common/components/PageWrapper/PageWrapper'
import SEO from '../../common/components/seo'
import { Input, Collapse } from 'antd'
import './style.less';
import '../Home/static/header.less'

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
                                Poddhype är just nu i en tidig uppstarts fas, vi pratar just nu med poddar som vi tror skulle passa in i vår plattform. Vi planerar att nå ut till annonsörer när vi har en bra bas av podcasts och har färdigutvecklat vår webb platform. Vi tror att marknadsföring i podcasts är något som kommer se en starkt tillväxt under 2020 och vi ser det som vårt uppdrag att sprida kunskap om värdet i det. Om ni väljer att gå med nu innebär det att ni är med från start och då när är vi pratar med annonsörer har stor chans att bli matchade. Ni har inga skyldigheter efter registrering utan om en annonsör hittar er i vår platform och tycker ni verkar intressanta så skickar dom ett förslag om samarbete. Ni kan då ta beslut om detta skulle vara något för er. Fördelen att finnas i vår platform är helt enkelt att ni utökar era chanser att få intressanta förfrågningar. Vi kommer också personliga rekommendera passande matchningar och det är därför viktigt för oss att veta vad ni värderar i ett lyckat samarbete. Dessa frågor är en del av vår registrerings process men kommer också att utforskas genom en kontinuerlig dialog mellan er och oss.
                            </p>

                            <h2 id="second-title">Vanliga frågor</h2>
                            <Collapse style={{ textAlign: 'left' }} bordered={true} defaultActiveKey={['0']}>
                                {this.question.map((q, i) => (
                                    <Panel header={q.title} key={i}>
                                        <p class="about-answer-text">
                                            {q.answer}
                                        </p>
                                    </Panel>
                                ))}
                            </Collapse>
                        </div>
                    </div>
                </PageWrapper>
            </div >
        )
    }
}

export default About
