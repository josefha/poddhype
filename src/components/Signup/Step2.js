import './style.less';
import React from 'react';

import { Button, Typography, Divider, Input, Spin, Slider, Alert } from 'antd'
import Avatar from './Avatar'
import TagPicker from './TagPicker'
import { putFile } from '../../common/api/storage'
import { putPodcastProfileInfo } from '../../common/api/db/podcastProfile'
import { DefaultButton, SecondaryButton } from '../../common/components/Buttons'
import { getFirebase, getCurrentUser } from "../../common/api/firebase"
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
            listenersAmount: 0,
            avatar: null,
            avatarIsLoading: false,
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

            errorMsg: null,

            isLoading: false,
            firebase: null
        }
    }

    loadFirebase = () => {
        const app = import("firebase/app");
        const db = import("firebase/firestore");
        const auth = import("firebase/auth");
        const storage = import("firebase/storage");
        const analytics = import("firebase/analytics");

        Promise.all([app, db, auth, storage, analytics]).then(([firebase]) => {
            const fb = getFirebase(firebase)
            fb.analytics()
            this.setState({ firebase: fb })
        })
    }

    componentDidMount = () => {
        this.loadFirebase()
    }

    validatePart1Data = () => {
        let result = true;

        if (this.state.description == "") {
            this.setState({ errorMsg: "Fyll i beskrivningen" })
            result = false;
        }
        else if (this.state.category.length == 0) {
            this.setState({ errorMsg: "Välj en kategori" })
            result = false;
        }

        else if (this.state.listenersAmount == 0) {
            this.setState({ errorMsg: "Uppskatta antal lyssnare genom att dra slidern" })
            result = false;
        }
        else if (this.state.avatarIsLoading) {
            this.setState({ errorMsg: "Vänta tills bilden har laddats upp" })
            result = false;
        }

        else if (!this.state.avatar) {
            this.setState({ errorMsg: "Välj en bild för din podcast" })
            result = false;
        }

        return result;
    }
    validatePart2Data = () => {

        let result = true

        if (this.state.age === "") {
            this.setState({ errorMsg: "Välj en målgrupp" })
            result = false;
        }
        else if (this.state.gender === "") {
            this.setState({ errorMsg: "Välj köngrupp" }) // TODO SKRIV INTE KONGRUPP
            result = false;
        }
        else if (this.state.listenersDescription === "") {
            this.setState({ errorMsg: "Fyll i beskrivning för dina lyssnare" })
            result = false;
        }
        return result;
    }

    validatePart3Data = () => {

        let result = true

        if (this.state.typeOfCollaboration === "") {
            this.setState({ errorMsg: "Fyll i vilken typ av företag du vill sammarbeta med" })
            result = false;
        }
        else if (this.state.importantWhenCollaborating === "") {
            this.setState({ errorMsg: "Fyll i vad som är viktigt för dig för ett lyckat sponsorskap" })
            result = false;
        }
        else if (this.state.podcastLink === "") {
            this.setState({ errorMsg: "Fyll i en länk till din podcast" })
            result = false;
        }

        return result;
    }

    nextPart = () => {
        if (this.state.part == 0 && !this.validatePart1Data()) {
        }
        if (this.state.part == 1 && !this.validatePart2Data()) {
        }
        if (this.state.part == 2 && !this.validatePart3Data()) {
        }
        else {
            this.setState({ errorMsg: null })
            this.setState({ part: this.state.part + 1 })
        }



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
        this.setState({ avatar: file, avatarIsLoading: false })
    }

    setAvatarIsLoading = (isloading) => {
        this.setState({ avatarIsLoading: isloading })
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

        if (this.validatePart3Data()) {

            let firebase = this.state.firebase
            this.showLoading()

            var user = await getCurrentUser(firebase)
            try {
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
                        console.log("BEFORE PODCAST PROFILE")
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
            catch (error) {
                console.log("ERROR", error)
            }
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
                        <Avatar
                            setAvatarIsLoading={(a) => this.setAvatarIsLoading(a)}
                            setAvatar={(a) => this.setAvatar(a)} />
                        {this.state.errorMsg && <Alert message={this.state.errorMsg} type="error" />}
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
                        {this.state.errorMsg && <Alert message={this.state.errorMsg} type="error" />}
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
                            <Text>Länk till din podd : </Text>
                            <Input style={{ margin: '10px 0' }}
                                value={this.state.podcastLink}
                                placeholder="Länk till ex. spotify, itunes, acast osv."
                                onChange={(e) => this.handleChange(e, "podcastLink")} />
                            <Text>Övriga länkar (fält kan lämnas tomt): </Text>
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
                            {this.state.errorMsg && <Alert message={this.state.errorMsg} type="error" />}
                            <Divider />
                            <SecondaryButton title="Tillbaka" onClick={() => this.prevPart()} ></SecondaryButton>
                            <DefaultButton title="Klar" onClick={() => this.sendDataToServer()} ></DefaultButton>
                        </React.Fragment>
                    </Spin>
                )}
            </div >)
    }


}