
import React from "react"
import antd from "antd"
import { DefaultButton, SecondaryButton } from '../Buttons'

const { Typography, Icon, Input, Divider, Alert, Spin, Row, Col, Tag, Slider, Button } = antd;
const { TextArea } = Input;
const { Text } = Typography;
const ButtonGroup = Button.Group;

const facebookIcon = require("../../assets/facebook-icon.png")
const instagramIcon = require("../../assets/instagram-icon.png")

export default function PodcastCard(props) {

    let profile = props.profile;

    if (!profile) {
        return (<div></div>)
    }

    const TagStyle = { width: '100%', margin: '8px 0', padding: '5px', fontSize: '12px', fontWeight: '500' }

    return (
        <div class="podcast-profile-contatiner">
            <Row>
                <Col span={6} >
                    <div class="left-contatiner">
                        <div class="profile-icon">
                            <img src={profile.avatarUrl}></img>
                        </div>
                        <div>
                            <Tag color="#8940FA" style={TagStyle}>
                                Kategori: {' ' + profile.data.category}
                            </Tag>
                        </div>
                        <div>
                            <Tag color="#8940FA" style={TagStyle}>
                                {profile.data.listenersAmount} Lyssnare / avsnitt
                                </Tag>
                        </div>
                        {/* <Divider></Divider> */}
                        {/* <h4 style={{ margin: '10px 0' }}>Målgrupp</h4> */}
                        <div>
                            <Tag color="#8940FA" style={TagStyle}>
                                {profile.data.age} år
                                    </Tag>
                        </div>
                        {props.genderText && <div>
                            <Tag color="#8940FA" style={TagStyle}>
                                {props.genderText}
                            </Tag>
                        </div>}
                        <div>
                            <a href={profile.data.podcastLink} target="_blank"><SecondaryButton title="Gå till podcast" size='large'></SecondaryButton></a>
                        </div>
                        <span class="socialmedia-icon">
                            {profile.instagram != "" &&
                                <a href={profile.instagram} target="_blank">
                                    <img src={instagramIcon} />
                                </a>}
                            {profile.facebook != "" &&
                                <a href={profile.facebook} target="_blank">
                                    <img src={facebookIcon} />
                                </a>}
                        </span>
                    </div>
                </Col>
                <Col span={18} >
                    <div class="podcast-profile-body">
                        <h2> {profile.title}</h2>
                        <p> {profile.data.description}</p>

                        <Divider />
                        <div>
                            <h3>Målgrupps beskrivning</h3>
                            <p>{}</p>
                            <p>{profile.data.listenersDescription}</p>
                        </div>
                        <Divider />
                        <div>
                            <h3>Sponsorskap</h3>
                            <p><b>Vad är viktigt för ett lyckat Sponsorskap?</b></p>
                            <p>{profile.data.importantWhenCollaborating}</p>
                            <p><b>Vilka företag sammarbetar du helst med?</b></p>
                            <p>{profile.data.typeOfCollaboration}</p>
                        </div>
                        <Divider />
                        <div>
                            <p> Podden är skapad av {profile.name} </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div >)
}