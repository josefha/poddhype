
import './style.less';
import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';

import { Button, Steps, Layout, Typography, Divider, Input } from 'antd'
import { getKeyFromChildrenIndex } from 'rc-menu/lib/util';
const { Content } = Layout;
const { Title, Text } = Typography;
const { Step } = Steps;

import {SecondaryButton } from '../../common/components/Buttons'


export default class Step3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { part: 0 }
    }

    sendFeedback = () => {
        //this.sendFeedback()
    }

    nextPart = () => {
        this.sendFeedback()
        this.setState({ part: this.state.part + 1})
    }

    render() {
        return (
            <div className='form-content'>
                <Title level={2}>Du är nu en Poddhype partner! </Title>
                <p> Vi planerar att öppna vår platform för annonsörer senare i vår. </p>
                <p> Självklart kommer vi hålla dig uppdaterad, du kan nå oss på partner@poddhype.com om du har några funderingar.</p>
                <br />
                <p> // Team Poddhype </p>
                <br/>
                <Divider style={{'marginTop': '0'}}/>
                <h3> Lämna feedback </h3>
                <Input.TextArea style={{margin: '5px 0 20px 0'}} 
                    placeholder="Var det något du tyckte saknades? andra förlsag eller funderingar?"
                    autoSize={{ minRows: 2, maxRows: 6 }}>
                </Input.TextArea>
                <SecondaryButton title="Skicka feeback" onClick={() => this.props.nextForm()} ></SecondaryButton>
            </div>)
    }   
}