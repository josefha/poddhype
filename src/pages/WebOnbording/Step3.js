
import './style.less';
import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';

import { Button, Steps, Layout, Typography, Divider, Input } from 'antd'
import { getKeyFromChildrenIndex } from 'rc-menu/lib/util';
const { Content } = Layout;
const { Title, Text } = Typography;
const { Step } = Steps;


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
                <Title level={2}>Grattis! Du är nu en Poddhype partner. </Title>
                <Text> Vi planerar att släppa vår platform för annonsörer senare i vår. </Text>
                <Text> Du kan nå oss på partner@poddhype.com om du har några funderingar.</Text>
                <br/>
                <div style={{paddingTop: '20px'}} >
                <Text> Vi vill tacka dig ännu en gång för du tror på oss, tillsamns kommer vi skapa fantastiska sammarbeten.</Text>
                </div>
                <br />
                <Text> // Team Poddhype </Text>
                <br/>
                <Divider />
                <Text>Var det något du tyckte saknades? andra förlsag eller funderingar? </Text>
                <Input.TextArea style={{margin: '20px 0'}} 
                    placeholder="Lämna feedback"
                    autoSize={{ minRows: 2, maxRows: 6 }}>
                </Input.TextArea>
                <Button style={{}} onClick={() => this.props.nextForm()} type="secondary" size='large'>Skicka feedback</Button>
            </div>)
    }
}