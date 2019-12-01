
import './style.less';
import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';

import { Button, Steps, Layout, Typography, Divider, Input } from 'antd'
import { getKeyFromChildrenIndex } from 'rc-menu/lib/util';
const { Content } = Layout;
const { Title, Text } = Typography;
const { Step } = Steps;

import {SecondaryButton } from '../../common/components/Buttons'
import {PostFeedbackForm} from '../../common/api/db/podcastProfile.js'


export default class Step3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            part: 0,
            feedback:''
            }
    }

    sendFeedback = () => {
        const feedback = this.state.feedback
        PostFeedbackForm({feedback})
        this.props.nextForm()
    }

    nextPart = () => {
        this.sendFeedback()
        this.setState({ part: this.state.part + 1})
    }

    onChange = (e) => {
        this.setState({feedback: e.target.value})
    }

    render() {
        return (
            <div className='form-content'>
                <Title level={2}>Du är nu en partner podd! </Title>
                <p> Vi planerar att öppna vår platform för annonsörer senare i vår. </p>
                <p> Vi håller självklart dig uppdaterad men under tiden kan du nå oss på partner@poddhype.com</p>
                <br />
                <p> // Team Poddhype </p>
                <br/>
                <Divider style={{'marginTop': '0'}}/>
                <h3> Lämna gärna feedback </h3>
                <Input.TextArea style={{margin: '5px 0 20px 0'}} 
                    placeholder="Var det något du tyckte saknades?"
                    autoSize={{ minRows: 2, maxRows: 6 }}
                    onChange={(e) => this.onChange(e)}>
                </Input.TextArea>
                <SecondaryButton title="Skicka feeback" onClick={() => this.sendFeedback()} ></SecondaryButton>
            </div>)
    }   
}