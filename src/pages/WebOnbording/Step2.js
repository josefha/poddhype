import './style.less';
import React from 'react';

import { Button, Steps, Layout, Typography, Divider, Input, Modal, notification } from 'antd'
const ButtonGroup = Button.Group;
const { Title, Text } = Typography;
const { TextArea } = Input;

import Avatar from './Avatar'
import TagPicker from './TagPicker'


export default class Step2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { part: 0, visible: true }
    }

    nextPart = () => {
        this.setState({ part: this.state.part + 1 })


    }

    prevPart = () => {
        this.setState({ part: this.state.part - 1 })

    }

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        const part = this.state.part;
        return (
            <div className='form-content'>
                <Title level={2}>Berätta lite mer om din podcast. </Title>
                <Text>Vissa frågor kan vara svåra att svara på, försök så gott det går. </Text>
                <Divider />
                {part == 0 && (
                    <React.Fragment>
                        <h3>Din podcast</h3>
                        <TextArea
                            style={{ margin: '10px 0' }}
                            placeholder="Vad handlar din podcast om?"
                            autoSize={{ minRows: 2, maxRows: 6 }}>
                        </TextArea>
                        <TagPicker placeholder="Kategori" />
                        <TagPicker placeholder="Välj några taggar" />
                        <div style={{ margin: '20px 0', width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            <Text style={{ margin: '5px 0' }}> Anatal lyssnare per avsnitt: </Text>

                            <ButtonGroup style={{ float: 'right' }}>
                                <Button>Under 1000</Button>
                                <Button>1000 - 5000</Button>
                                <Button>Fler än 5000</Button>
                            </ButtonGroup>
                        </div>
                        <Divider />
                        <Text> Ladda upp en profilbild:</Text>
                        <Avatar />
                        <Divider />
                        <Button style={{}} onClick={() => this.nextPart()} type="primary" size='large'>Nästa</Button>
                    </React.Fragment>)
                }
                {part == 1 && (
                    <React.Fragment>
                        <h3>Dina lyssnare</h3>
                        <Divider />
                        <Button style={{}} onClick={() => this.prevPart()} type="secondary" size='large'>Tillbaka</Button>
                        <Button style={{ float: 'right' }} onClick={() => this.props.nextForm()} type="primary" size='large'>Nästa</Button>
                    </React.Fragment>
                )}
            </div >)
    }


}