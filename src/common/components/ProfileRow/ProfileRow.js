
import React from "react"
import antd from "antd"
import { DefaultButton, SecondaryButton } from '../Buttons'
import './style.less';

const { Typography, Icon, Input, Divider, Alert, Spin, Row, Col, Tag, Slider, Button } = antd;


export default function ProfileRow(props) {

    let profile = props.profile;
    let description = null

    if (!profile) {
        return (<div></div>)
    }

    if (!profile.data) {
        return null
    }



    const TagStyle = { margin: '8px 6px', padding: '5px', fontSize: '12px', fontWeight: '500' }
    console.log(profile)
    return (
        <>
            <div className="profile-row-container">
                <div className="icon-containter ">
                    <img src={profile.avatarUrl} ></img>
                </div>
                <div className="row-body">
                    <h3>{profile.title}</h3>
                    <p>{profile.data.category}</p>
                    <div>
                        <Tag color="purple" style={TagStyle}>
                            {profile.data.category}
                        </Tag>
                        <Tag color="purple" style={TagStyle}>
                            {profile.data.age}
                        </Tag>
                        <Tag color="purple" style={TagStyle}>
                            {profile.data.listenersAmount}
                        </Tag>
                        <DefaultButton
                            title="-->"
                            onClick={() => props.goToProfile(profile)}
                        />
                    </div>
                </div>
            </div >
            <div className="row-footer">

            </div>
        </>
    )
}