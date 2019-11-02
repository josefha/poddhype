
import './style.less';
import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';

import { Button, Steps, Layout, Typography, Divider, Input, Checkbox } from 'antd'
const { Content } = Layout;
const { Title, Text } = Typography;
const { Step } = Steps;


export default class Step1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { part: 0, termsAccepted: false }
    }

    nextPart = () => {
        const nextpart = this.state.part + 1
        this.setState({ part: nextpart })
    }

    onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }

    render() {
        return (
            <div className='form-content'>
                <Title level={2}>Kul att du vill bli en Poddhype partner! </Title>
                <Text>För att vi ska kunna erbjuda en så bra tjänst som möjligt så måste vi veta lite mer om dig och din podcast.
                        Efter 5 bara minuter har vi allt beheöver för att kunna matcha dig med brands som letar efter partnerskap. </Text>
                <Divider />
                <Input style={{ marginBottom: '20px' }} placeholder="Ditt namn" />
                <Input placeholder="Din podcasts titel" />
                <Divider />
                {this.state.part == 0 ?
                    (<Button style={{}} onClick={() => this.nextPart()} type="primary" size='large'>Nästa</Button>)
                    : (
                        <div >
                            <Text> Första steget är att skapa ditt konto hos oss, oroa dig inte det är helt gratis. </Text>
                            <Input style={{ margin: '20px 0' }} placeholder="Email" />
                            <Input.Password style={{ marginBottom: '20px' }} placeholder="Lösenord" />
                            <Input.Password style={{ marginBottom: '20px' }} placeholder="Upprepa lösenord" />
                            <a style={{ textDecoration: 'underline' }}>Användarvilkor</a><br />
                            <Checkbox style={{ marginTop: '10px' }} onChange={this.onChange}>Jag accepterar användatvilkor och GDPR </Checkbox>
                            <Button id="createAccountButton" onClick={() => this.props.nextForm()} type="primary" size='large'>Skapa konto</Button>
                        </div>
                    )
                }
            </div>)
    }
}