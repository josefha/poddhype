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
        this.state = { part: 1, visible: true }
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
                            <Text style={{ margin: '5px 0' }}> Antal lyssnare per avsnitt: </Text>

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
                        <div className="text-and-buttons-box">
                            <Text style={{ margin: '5px 0' }}> Ålder: </Text>
                            <ButtonGroup style={{ float: 'right' }}>
                                <Button>12-18</Button>
                                <Button>18-27</Button>
                                <Button>28-40</Button>
                                <Button>40+</Button>
                            </ButtonGroup>
                        </div>
                        <div className="text-and-buttons-box">
                            <Text style={{ margin: '5px 0' }}> Kön: </Text>
                            <ButtonGroup style={{ float: 'right' }}>
                                <Button>Fler män</Button>
                                <Button>Fler kvinnor</Button>
                                <Button>Blandat</Button>
                            </ButtonGroup>
                        </div>
                        <Text>Beskriv dina lyssnare:</Text>
                        <TextArea
                            style={{ margin: '10px 0' }}
                            placeholder="Vilka är det som lyssnar?"
                            autoSize={{ minRows: 2, maxRows: 6 }}>
                        </TextArea>
                        <Divider />
                        <Button style={{}} onClick={() => this.prevPart()} type="secondary" size='large'>Tillbaka</Button>
                        <Button style={{ float: 'right' }} onClick={() => this.nextPart()} type="primary" size='large'>Nästa</Button>
                    </React.Fragment>
                )}
                {part == 2 && (
                    <React.Fragment>
                        <h3>Länkar</h3>
                        <Input style={{ marginBottom: '20px' }} placeholder="Itunes" />
                        <Input style={{ marginBottom: '20px' }} placeholder="Spotify" />
                        <Input style={{ marginBottom: '20px' }} placeholder="Ett avsnitt du är extra stolt över" />
                        <Divider />
                        <Button style={{}} onClick={() => this.prevPart()} type="secondary" size='large'>Tillbaka</Button>
                        <Button style={{ float: 'right' }} onClick={() => this.props.nextForm()} type="primary" size='large'>Klar</Button>
                    </React.Fragment>
                )}
            </div >)
    }


}