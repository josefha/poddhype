import React from "react"
import antd from "antd"
import { navigate } from "gatsby"
import { DefaultButton, SecondaryButton } from '../Buttons'
import { firebaseLogin } from '../../api/auth/auth'
import "./style.less"

const { Icon, Input, Divider, Alert, Spin, Row, Col, Tag } = antd;

class EditPodcastProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <div class="edit-podcast-profile-contatiner ">
                <h1> EDIT </h1>
            </div >
        );
    }
}

export default EditPodcastProfile