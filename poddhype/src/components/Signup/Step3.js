
import './style.less';
import React from 'react';

import { Steps, Layout, Typography, Divider, Input } from 'antd'
import { SecondaryButton } from '../../common/components/Buttons'
import { PostFeedbackForm } from '../../common/api/db/podcastProfile.js'
import { getFirebase } from "../../common/api/firebase"

const { Content } = Layout;
const { Title, Text } = Typography;
const { Step } = Steps;


export default class Step3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            part: 0,
            feedback: '',
            firebase: null,
        }
    }

    loadFirebase = () => {
        const app = import("firebase/app");
        const db = import("firebase/firestore");

        Promise.all([app, db]).then(([firebase]) => {
            const f2 = getFirebase(firebase)
            this.setState({ firebase: f2 })
        })
    }

    componentDidMount = () => {
        this.loadFirebase()
    }

    sendFeedback = () => {
        PostFeedbackForm(this.state.firebase, { feedback: this.state.feedback })
        this.props.nextForm()
    }

    nextPart = () => {
        this.sendFeedback()
        this.setState({ part: this.state.part + 1 })
    }

    onChange = (e) => {
        this.setState({ feedback: e.target.value })
    }

    render() {
        return (
            <div className='form-content'>
                <Title level={2}>Du är nu en partner podd! </Title>
                <p> Vi planerar att öppna vår platform för annonsörer senare i vår. </p>
                <p> Vi håller självklart dig uppdaterad men under tiden kan du nå oss på partner@poddhype.com</p>
                <br />
                <span style={{ fontWeight: 600 }}> Team Poddhype</span >
                <br />
                <Divider style={{ 'marginTop': '0' }} />
                <h3> Lämna gärna feedback </h3>
                <Input.TextArea style={{ margin: '5px 0 20px 0' }}
                    placeholder="Var det något du tyckte saknades?"
                    autoSize={{ minRows: 2, maxRows: 6 }}
                    onChange={(e) => this.onChange(e)}>
                </Input.TextArea>
                <SecondaryButton title="Skicka feeback" onClick={() => this.sendFeedback()} ></SecondaryButton>
            </div>)
    }
}