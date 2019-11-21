import './style.less';
import React from 'react';

import { Button, message, Typography, Divider, Input, Spin } from 'antd'
const ButtonGroup = Button.Group;
const { Title, Text } = Typography;
const { TextArea } = Input;


import Avatar from './Avatar'
import TagPicker from './TagPicker'
import { putFile } from '../../common/api/storage'
import { putPodcastProfileInfo } from '../../common/api/db/podcastProfile'
import { DefaultButton, SecondaryButton } from '../../common/components/Buttons'



export default class Step2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            part: 0,
            // Step 1
            description: "",
            category: [],
            tags: [],
            listenersAmount: "",
            avatar: null,
            selectedButton: -1,
            // Step 2
            age: "",
            gender: "",
            listenersDescription: "",
            selectedAgeButton: -1,
            selectedGenderButton: -1,
            //Step 3
            podcastLink: "",
            isLoading: false,
        }
    }

    componentDidMount = () => {
        if (this.props.notFirstTime)
            return

        message.config({
            top: 110,
            duration: 2.5,
        });
        message.success('Ditt konto är skapat');
    }

    nextPart = () => {
        this.setState({ part: this.state.part + 1 })
    }

    prevPart = () => {
        this.setState({ part: this.state.part - 1 })
    }

    handleChange = (e, field) => {
        this.setState({ [field]: e.target.value });
    }

    handlePickerChange = (value, field) => {
        this.setState({ [field]: value });
    }

    setAvatar = (file) => {
        this.setState({ avatar: file })
    }

    onButtonGroupClick = (n) => {
        this.setState({ selectedButton: n })
        switch (n) {
            case 1:
                this.setState({ listenersAmount: "<1000" })
                break;
            case 2:
                this.setState({ listenersAmount: "2000-5000" })
            case 3:
                this.setState({ listenersAmount: "5000+" })
            default:
                break;
        }
    }

    onButtonGroupAgeClick = (n) => {
        this.setState({ selectedAgeButton: n })
        switch (n) {
            case 1:
                this.setState({ age: "12-18" })
                break;
            case 2:
                this.setState({ age: "18-27" })
            case 3:
                this.setState({ age: "27-40" })
            case 4:
                this.setState({ age: "40+" })
            default:
                break;
        }
    }

    onButtonGroupGenderClick = (n) => {
        this.setState({ selectedGenderButton: n })
        switch (n) {
            case 1:
                this.setState({ gender: "male" })
                break;
            case 2:
                this.setState({ gender: "female" })
            case 3:
                this.setState({ gender: "mixed" })
            default:
                break;
        }
    }

    showLoading = () => this.setState({ isLoading: true })
    hideLoading = () => this.setState({ isLoading: false })

    sendDataToServer = async () => {
        this.showLoading()

        // adding avatar image to cloud-storage 
        // TODO - get current user and change file name based on user id
        let avatarLocation = await putFile("userid-icon-5.jpeg", "podcast_icons/", this.state.avatar)
        if (avatarLocation) {
            const data = (({
                description,
                category,
                tags,
                listenersAmount,
                age,
                gender,
                listenersDescription,
                podcastLink }) => ({
                    description,
                    category,
                    tags,
                    listenersAmount,
                    age,
                    gender,
                    listenersDescription,
                    podcastLink,
                }))(this.state);

            // adding the path in cloud-storage to db data obj 
            data["AvatarPath"] = avatarLocation;

            //TODO: Fix error handling
            putPodcastProfileInfo(data)
            this.hideLoading()
            this.props.nextForm()
        } else {
            this.hideLoading()
            console.log("could not upload image")
        }
    }

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
                            autoSize={{ minRows: 4, maxRows: 4 }}
                            value={this.state.description}
                            onChange={(e) => this.handleChange(e, "description")}>
                        </TextArea>
                        <TagPicker
                            categories={true}
                            placeholder="Kategori"
                            onChange={(v) => this.handlePickerChange(v, "category")}
                            value={this.state.category} />
                        <TagPicker
                            placeholder="Välj några taggar"
                            onChange={(v) => this.handlePickerChange(v, "tags")}
                            value={this.state.tags} />
                        <div style={{ margin: '20px 0', width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            <Text style={{ margin: '5px 0' }}> Antal lyssnare per avsnitt: </Text>

                            <ButtonGroup style={{ float: 'right' }}>
                                <Button
                                    type={this.state.selectedButton == 1 ? "primary" : "default"}
                                    onClick={() => this.onButtonGroupClick(1)}>
                                    Under 1000</Button>
                                <Button
                                    type={this.state.selectedButton == 2 ? "primary" : "default"}
                                    onClick={() => this.onButtonGroupClick(2)}>
                                    1000 - 5000</Button>
                                <Button
                                    type={this.state.selectedButton == 3 ? "primary" : "default"}
                                    onClick={() => this.onButtonGroupClick(3)}>
                                    Fler än 5000</Button>
                            </ButtonGroup>
                        </div>
                        <Divider />
                        <Avatar setAvatar={(a) => this.setAvatar(a)} />
                        <Divider />
                        <DefaultButton title="Nästa" onClick={() => this.nextPart()} ></DefaultButton>
                    </React.Fragment>)
                }
                {part == 1 && (
                    <React.Fragment>
                        <h3>Dina lyssnare</h3>
                        <div className="text-and-buttons-box">
                            <Text style={{ margin: '5px 0' }}> Ålder: </Text>
                            <ButtonGroup style={{ float: 'right' }}>
                                <Button
                                    type={this.state.selectedAgeButton == 1 ? "primary" : "default"}
                                    onClick={() => this.onButtonGroupAgeClick(1)}>
                                    12-18</Button>
                                <Button
                                    type={this.state.selectedAgeButton == 2 ? "primary" : "default"}
                                    onClick={() => this.onButtonGroupAgeClick(2)}>
                                    18-27</Button>
                                <Button
                                    type={this.state.selectedAgeButton == 3 ? "primary" : "default"}
                                    onClick={() => this.onButtonGroupAgeClick(3)}>
                                    28-40</Button>
                                <Button
                                    type={this.state.selectedAgeButton == 4 ? "primary" : "default"}
                                    onClick={() => this.onButtonGroupAgeClick(4)}>
                                    40+</Button>
                            </ButtonGroup>
                        </div>
                        <div className="text-and-buttons-box">
                            <Text style={{ margin: '5px 0' }}> Kön: </Text>
                            <ButtonGroup style={{ float: 'right' }}>
                                <Button
                                    type={this.state.selectedGenderButton == 1 ? "primary" : "default"}
                                    onClick={() => this.onButtonGroupGenderClick(1)}>
                                    Mestadels män</Button>
                                <Button
                                    type={this.state.selectedGenderButton == 2 ? "primary" : "default"}
                                    onClick={() => this.onButtonGroupGenderClick(2)}>
                                    Mestadels kvinnor</Button>
                                <Button
                                    type={this.state.selectedGenderButton == 3 ? "primary" : "default"}
                                    onClick={() => this.onButtonGroupGenderClick(3)}>
                                    Blandat</Button>
                            </ButtonGroup>
                        </div>
                        <Text>Beskriv dina lyssnare:</Text>
                        <TextArea
                            style={{ margin: '10px 0' }}
                            placeholder="Vilka är det som lyssnar?"
                            autoSize={{ minRows: 2, maxRows: 6 }}
                            value={this.state.listenersDescription}
                            onChange={(e) => this.handleChange(e, "listenersDescription")}>
                        </TextArea>
                        <Divider />
                        <SecondaryButton title="Tillbaka" onClick={() => this.prevPart()} ></SecondaryButton>
                        <DefaultButton title="Nästa" onClick={() => this.nextPart()} ></DefaultButton>
                    </React.Fragment>
                )}
                {part == 2 && (
                    <Spin spinning={this.state.isLoading} tip="Laddar..">
                        <React.Fragment>
                            <h3>Länk till din podd</h3>
                            <Input style={{ marginBottom: '20px' }}
                                value={this.state.podcastLink}
                                placeholder="Vart kan vi hitta mer info om din podcast?"
                                onChange={(e) => this.handleChange(e, "podcastLink")} />
                            <Divider />
                            <SecondaryButton title="Tillbaka" onClick={() => this.prevPart()} ></SecondaryButton>
                            <DefaultButton title="Klar" onClick={() => this.sendDataToServer()} ></DefaultButton>
                        </React.Fragment>
                    </Spin>
                )}
            </div >)
    }


}