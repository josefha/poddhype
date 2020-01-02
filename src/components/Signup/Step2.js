import './style.less';
import React from 'react';

import { Button, Typography, Divider, Input, Spin, Slider, Checkbox } from 'antd'
import Avatar from './Avatar'
import TagPicker from './TagPicker'
import { putFile } from '../../common/api/storage'
import { putPodcastProfileInfo } from '../../common/api/db/podcastProfile'
import { DefaultButton, SecondaryButton } from '../../common/components/Buttons'
import { getFirebase } from "../../common/api/firebase"
import { navigate } from "gatsby"

const ButtonGroup = Button.Group;
const { Title, Text } = Typography;
const { TextArea } = Input;


export default class Step2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            part: 0,
            // Step 1
            description: "",
            category: [],
            listenersAmount: 500,
            avatar: null,
            selectedButton: -1,
            // Step 2
            age: "",
            gender: "",
            listenersDescription: "",
            selectedAgeButton: -1,
            selectedGenderButton: -1,
            //Step 3
            typeOfCollaboration: "",
            importantWhenCollaborating: "",
            podcastLink: "",
            facebook: "",
            instagram: "",
            homepage: "",

            isLoading: false,
            firebase: null
        }
    }

    loadFirebase = () => {
        const app = import("firebase/app");
        const db = import("firebase/firestore");
        const auth = import("firebase/auth");
        const storage = import("firebase/storage");

        Promise.all([app, db, auth, storage]).then(([firebase]) => {
            const f2 = getFirebase(firebase)
            this.setState({ firebase: f2 })
        })
    }

    componentDidMount = () => {
        this.loadFirebase()
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

    onButtonGroupAgeClick = (n) => {
        this.setState({ selectedAgeButton: n })
        switch (n) {
            case 1:
                this.setState({ age: "12-24" })
                break;
            case 2:
                this.setState({ age: "22-30" })
            case 3:
                this.setState({ age: "28-40" })
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
        let firebase = this.state.firebase
        this.showLoading()
        let user = firebase.auth().currentUser;

        if (user) {

            const filename = user.uid + "-icon.jpeg"

            let avatarLocation = await putFile(firebase, filename, "podcast_icons/", this.state.avatar)
            if (avatarLocation) {
                const data = (({
                    description,
                    category,
                    listenersAmount,
                    age,
                    gender,
                    podcastLink,
                    listenersDescription,
                    typeOfCollaboration,
                    importantWhenCollaborating,
                    facebook,
                    instagram,
                    homepage,
                }) => ({
                    description,
                    category,
                    listenersAmount,
                    age,
                    gender,
                    listenersDescription,
                    podcastLink,
                    typeOfCollaboration,
                    importantWhenCollaborating,
                    facebook,
                    instagram,
                    homepage,
                }))(this.state);

                // adding the path in cloud-storage to db data obj 
                data['AvatarPath'] = avatarLocation;
                // data['uid'] = user.uid;

                // TODO: Fix error handling
                putPodcastProfileInfo(firebase, data, user.uid)
                this.hideLoading()
                navigate('signup/step3')
            } else {
                this.hideLoading()
                console.error("Could not upload image")
            }
        } else {
            console.error("current user not found")
        }
    }

    render() {
        const part = this.state.part;

        return (
            <div className='form-content'>
                {part == 0 && (
                    <React.Fragment>
                        <Title level={2}>Beskriv din podd </Title>
                        <p>Vi behöver veta lite mer om din podcast.</p>
                        <Divider />
                        <Text>Podcast beskriving:</Text>
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
                        <div style={{ margin: '20px 0', width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            <Text style={{ margin: '5px 0' }}> Uppskattat antal lyssnare per avsnitt: {this.state.listenersAmount == 10000 ?
                                '10000+' : this.state.listenersAmount} </Text>
                        </div>
                        <Slider
                            min={100}
                            max={10000}
                            step={100}
                            onChange={(e) => this.handlePickerChange(e, 'listenersAmount')}
                            value={this.state.listenersAmount}
                        />
                        <Avatar setAvatar={(a) => this.setAvatar(a)} />
                        <Divider />
                        <DefaultButton title="Nästa" onClick={() => this.nextPart()} ></DefaultButton>
                    </React.Fragment>)
                }
                {part == 1 && (
                    <React.Fragment>
                        <Title level={2}>Beskriv dina lyssnare </Title>
                        <p>Beskriving av din målgrupps kan vara viktigt för sponsorer. </p>
                        <Divider />
                        <div className="text-and-buttons-box">
                            <Text style={{ margin: '5px 0' }}> Din målgrupps ålder: </Text>
                            <ButtonGroup style={{ float: 'right' }}>
                                <Button
                                    type={this.state.selectedAgeButton == 1 ? "primary" : "default"}
                                    onClick={() => this.onButtonGroupAgeClick(1)}>
                                    12-24</Button>
                                <Button
                                    type={this.state.selectedAgeButton == 2 ? "primary" : "default"}
                                    onClick={() => this.onButtonGroupAgeClick(2)}>
                                    22-30</Button>
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
                            placeholder="Det kan te.x handla om liknande intressen, specifika brancher eller åldersgrupper."
                            autoSize={{ minRows: 4, maxRows: 6 }}
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
                        <Title level={2}> Sammarbeteten och länkar </Title>
                        <Divider />
                        <React.Fragment>
                            <Text>Vilken typ av företag sammarbetar du helst med?</Text>
                            <TextArea
                                style={{ margin: '10px 0' }}
                                placeholder="T.ex. värderingar eller att du vill hitta sammarbeten inom vissa brancher."
                                autoSize={{ minRows: 4, maxRows: 4 }}
                                value={this.state.typeOfCollaboration}
                                onChange={(e) => this.handleChange(e, "typeOfCollaboration")}>
                            </TextArea>
                            <Text>Vad är viktigt för ett lyckat sponsorskap?</Text>
                            <TextArea
                                style={{ margin: '10px 0' }}
                                placeholder="Något speciellt du vill att vi ska tänka på när vi matchar dig med företag?"
                                autoSize={{ minRows: 4, maxRows: 4 }}
                                value={this.state.importantWhenCollaborating}
                                onChange={(e) => this.handleChange(e, "importantWhenCollaborating")}>
                            </TextArea>
                            <Text>Länk till din podd (fällt kan lämnas tomt): </Text>
                            <Input style={{ margin: '10px 0' }}
                                value={this.state.podcastLink}
                                placeholder="Länk till podden"
                                onChange={(e) => this.handleChange(e, "podcastLink")} />

                            <Input style={{ margin: '10px 0' }}
                                value={this.state.facebook}
                                placeholder="Länk till facebook"
                                onChange={(e) => this.handleChange(e, "facebook")} />

                            <Input style={{ margin: '10px 0' }}
                                value={this.state.instagram}
                                placeholder="Länk till Instagram"
                                onChange={(e) => this.handleChange(e, "instagram")} />

                            <Input style={{ margin: '10px 0' }}
                                value={this.state.homepage}
                                placeholder="Länk till hemsida"
                                onChange={(e) => this.handleChange(e, "homepage")} />

                            <Divider />
                            <SecondaryButton title="Tillbaka" onClick={() => this.prevPart()} ></SecondaryButton>
                            <DefaultButton title="Klar" onClick={() => this.sendDataToServer()} ></DefaultButton>
                        </React.Fragment>
                    </Spin>
                )}
            </div >)
    }


}