
import './style.less';
import React from 'react';

import { Steps, Layout, Typography, Divider, Input } from 'antd'
import { SecondaryButton } from '../../common/components/Buttons'
import { PostFeedbackForm } from '../../common/api/db/podcastProfile.js'
import { getFirebase } from "../../common/api/firebase"

const { Title, Text } = Typography;


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
                <Title level={2}>Du är nu en parnerpodd! </Title>
                <p> Vi planerar att öppna vår plattform för Brands senare i vår. </p>
                <p> Vi håller självklart dig uppdaterad. Om du har några funderingar kan du nå oss på partner@poddhype.com</p>
                <br />

                <span style={{ fontWeight: 600 }}> Team Poddhype</span >
                <br />
                <Divider />
                <Text> Lämna feedback </Text>
                <Input.TextArea style={{ margin: '5px 0 20px 0' }}
                    placeholder="Var det något du tyckte saknades?"
                    autoSize={{ minRows: 2, maxRows: 6 }}
                    onChange={(e) => this.onChange(e)}>
                </Input.TextArea>
                <SecondaryButton title="Skicka feeback" onClick={() => this.sendFeedback()} ></SecondaryButton>
            </div>)
    }
}