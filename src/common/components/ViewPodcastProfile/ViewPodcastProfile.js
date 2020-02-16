import React from "react"
import antd from "antd"

import "./style.less"
import TagPicker from '../TagPicker'
import PodcastCard from '../PodcastCard/PodcastCard'
import { DefaultButton } from '../Buttons'
import { putPodcastProfileInfo } from '../../api/db/podcastProfile'



const { Typography, Icon, Input, Divider, Alert, Spin, Row, Col, Tag, Slider, Button } = antd;
const { TextArea } = Input;
const { Text } = Typography;
const ButtonGroup = Button.Group;


class ViewPodcastProfile extends React.Component {
    constructor(props) {
        super(props);
        const resolveAgeButton = (age) => {
            switch (age) {
                case "12-24":
                    return 1;
                case "22-30":
                    return 2;
                case "28-40":
                    return 3;
                case "40+":
                    return 4;
                default:
                    return 1;
            }
        }
        const resolveGenderButton = (gender) => {
            switch (gender) {
                case "male":
                    return 1;
                case "female":
                    return 2;
                case "mixed":
                    return 3;
                default:
                    return 1;
            }
        }

        if (props.profile.data) {
            let profile = props.profile.data

            this.state = {
                title: props.profile.title,
                description: profile.description,
                category: profile.category,
                listenersAmount: profile.listenersAmount,
                selectedGenderButton: resolveGenderButton(profile.gender),
                age: profile.age,
                gender: profile.gender,
                listenersDescription: profile.listenersDescription,
                selectedAgeButton: resolveAgeButton(profile.age),
                typeOfCollaboration: profile.typeOfCollaboration,
                importantWhenCollaborating: profile.importantWhenCollaborating,
                podcastLink: profile.podcastLink,
                facebook: profile.facebook,
                instagram: profile.instagram,
                homepage: profile.homepage,
                name: props.profile.name,

                isLoading: false,
            };
        }
    }

    genderText = (gender) => {
        if (gender == "male") {
            return "Mestadels män"
        }
        if (gender == "female") {
            return "Mestadels kvinnor"
        }
        return null
    }

    handleChange = (e, field) => {
        this.setState({ [field]: e.target.value });
    }

    handlePickerChange = (value, field) => {
        this.setState({ [field]: value });
    }

    onButtonGroupAgeClick = (n) => {
        this.setState({ selectedAgeButton: n })
        switch (n) {
            case 1:
                this.setState({ age: "12-24" })
                break;
            case 2:
                this.setState({ age: "22-30" })
                break;
            case 3:
                this.setState({ age: "28-40" })
                break;
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
                break;
            case 3:
                this.setState({ gender: "mixed" })
            default:
                break;
        }
    }

    updateProfile = async () => {
        this.showLoading()
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

        data['AvatarPath'] = this.props.profile.data.AvatarPath;

        // TODO: Fix error handling
        // Change call to update title and name too 
        await putPodcastProfileInfo(this.props.firebase, data, this.props.user.uid)
        this.hideLoading()
        window.location.reload(false);
    }

    showLoading = () => this.setState({ isLoading: true })
    hideLoading = () => this.setState({ isLoading: false })

    render() {
        let profile = this.props.profile

        if (!this.props.editMode) {
            let genderText = this.genderText(this.props.profile.data.gender)
            return (<PodcastCard profile={profile} genderText={genderText} />);
        }
        else {
            return (
                <Spin spinning={this.state.isLoading} tip="Uppdaterar data...">
                    <div class="podcast-profile-body-edit">
                        <DefaultButton
                            title="Spara ändringar"
                            size='large'
                            onClick={() => { this.updateProfile() }} />
                        <h3>Titel: </h3>
                        <Input

                            value={this.state.title}
                            onChange={(e) => this.handleChange(e, "title")}
                        />
                        <h3 style={{ margin: '15px 0 0 0' }}>Beskrivning:</h3>
                        <TextArea
                            style={{ margin: '10px 0' }}
                            autoSize={{ minRows: 4, maxRows: 4 }}
                            value={this.state.description}
                            onChange={(e) => this.handleChange(e, "description")}>
                        </TextArea>
                        <Divider />
                        <div>
                            <h3>Målgrupps beskrivning</h3>
                            <TextArea
                                style={{ margin: '10px 0' }}
                                autoSize={{ minRows: 4, maxRows: 4 }}
                                value={this.state.listenersDescription}
                                onChange={(e) => this.handleChange(e, "listenersDescription")}>
                            </TextArea>
                        </div>
                        <Divider />
                        <div>
                            <h3>Sponsorskap</h3>
                            <p><b>Vad är viktigt för ett lyckat Sponsorskap?</b></p>
                            <TextArea
                                style={{ margin: '10px 0' }}
                                autoSize={{ minRows: 4, maxRows: 4 }}
                                value={this.state.importantWhenCollaborating}
                                onChange={(e) => this.handleChange(e, "importantWhenCollaborating")}>
                            </TextArea>

                            <p><b>Vilka företag sammarbetar du helst med?</b></p>

                            <TextArea
                                style={{ margin: '10px 0' }}
                                autoSize={{ minRows: 4, maxRows: 4 }}
                                value={this.state.typeOfCollaboration}
                                onChange={(e) => this.handleChange(e, "typeOfCollaboration")}>
                            </TextArea>
                        </div>
                        <Divider />
                        <div>
                            <Text>Podden är skapad av: </Text>
                            <Input
                                value={this.state.name}
                                onChange={(e) => this.handleChange(e, "name")}
                            />
                        </div>
                        <Divider />
                        <TagPicker
                            categories={true}
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
                        <Divider />
                        <Text>Länk till din podd: </Text>
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
                        <Divider />
                    </div>
                </Spin>
            );
        }
    }

}

export default ViewPodcastProfile