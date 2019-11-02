
import './style.less';
import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';

import { Button, Steps, Layout, Typography, Divider, Input } from 'antd'
const { Content } = Layout;
const { Title, Text } = Typography;
const { Step } = Steps;


export default class Step2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { part: 0 }
    }

    nextPart = () => {
        const nextpart = this.state.part + 1
        this.setState({ part: nextpart })
    }

    render() {
        return (
            <div className='form-content'>
                <Title level={2}>Berätta lite mer om din podcast </Title>
                <Text>Vissa frågor kan vara svåra att svara på, men försök så gott det går! All info är viktig för annonsöerar  </Text>
                <Divider />
                <Button style={{}} onClick={() => this.props.prevForm()} type="secondary" size='large'>Tillbaka</Button>
                <Button style={{ marginLeft: '50px' }} onClick={() => this.props.nextForm()} type="primary" size='large'>Nästa</Button>
            </div>)
    }
}