import './style.less';
import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';

import { Button, Steps, Layout, Typography, Divider, Input} from 'antd'
const { Content } = Layout;
const { Title, Text } = Typography;
const { Step } = Steps;


class WebOnbording extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: 0 }
    }

    nextForm = () => {
        const nextPage = this.state.currentPage + 1
        this.setState({ currentPage: nextPage })
    }
    prevForm = () => {
        if (this.state.currentPage > 0){
            const nextPage = this.state.currentPage - 1
            this.setState({ currentPage: nextPage })
        }
    }
    render() {
        const currentPage = this.state.currentPage
        return (
            <Layout style={{
                height: '100vh',
            }}
            >
                <Content className='content'>
                    <Steps current={currentPage} className='steps'>
                        <Step title="Berätta om dig själv" />
                        <Step title="Berätta om din podcast" />
                        <Step title="Färdig!" />
                    </Steps>

                    {currentPage == 0 && (<div className='form-content'>
                        <Title style={{textAlign: 'center'}} level={2}>Det glädjer oss att du vill bli en Poddhype podcast partner! </Title>
                        <Text>För att vi ska kunna erbjuda en så bra tjänst som möjligt så måste vi veta lite mer om dig och din podcast.
                            Efter 5 minuter har vi beheöver för att kunna matcha dig med de brands på jakt efter ett sponsorskap </Text>
                        <Divider />
                        <Input style={{marginBottom: '20px'}} placeholder="Ditt namn" />
                        <Input placeholder="Din podcasts titel" />
                        <Divider />
                        <Button style={{}} onClick={() => this.nextForm()} type="primary" size='large'>Nästa</Button>
                    </div>)
                    }{currentPage == 1 && (<div className='form-content'>
                        <Title level={2}>Berätta lite mer om din podcast </Title>
                        <Text>Vissa frågor kan vara svåra att svara på, men försök så gott det går! All info är viktig för annonsöerar  </Text>
                        <Divider />
                        <Button style={{}} onClick={() => this.prevForm()} type="secondary" size='large'>Tillbaka</Button>
                        <Button style={{marginLeft: '50px'}} onClick={() => this.nextForm()} type="primary" size='large'>Nästa</Button>
                    </div>)
                    }{currentPage == 2 && (<div className='form-content'>
                        <Title level={2}>Du är nu en Poddhype partner! </Title>
                        <Text> Vi planerar att släppa våra platformen för annonsörer senare i vår.</Text>

                        <Text> hör gärna av dig till parter@poddhype.com om du har några funderingar</Text>
                        <Text> Vi vill tacka dig ännu en gång för du tror på oss, tillsamns är vi </Text>
                        <Text> // teamet på poddhype </Text>
                        <Divider />
                        <Button style={{}} onClick={() => this.prevForm()} type="secondary" size='large'>Tillbaka</Button>
                        <Button style={{marginLeft: '50px'}} onClick={() => this.nextForm()} type="primary" size='large'>Slutför</Button>
                    </div>)
                    }{currentPage == 3 && (<div className='form-content'>
                    <Title level={2}>Tack! </Title>
                </div>)
                }
                </Content>
            </Layout >
        );
    }
}
export default WebOnbording;
