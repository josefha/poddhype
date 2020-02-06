import React from "react";
import { getFirebase, getCurrentUser } from "../../common/api/firebase"
import antd from "antd"
import { Link, navigate } from 'gatsby'
import './style.less';
import '../Home/static/header.less'

const { Layout, Menu, Breadcrumb, Icon } = antd;

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const logo = require('../../common/assets/poddhype-logo-white-small.png')


class Portal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firebase: null
        };
    }

    loadFirebase = () => {
        const app = import("firebase/app");
        const db = import("firebase/firestore");
        const analytics = import("firebase/analytics");

        Promise.all([app, db, analytics]).then(([firebase]) => {
            const fb = getFirebase(firebase)
            fb.analytics()
            this.setState({ firebase: fb })
        })
    }

    componentDidMount() {
        this.loadFirebase()
    }

    componentDidUpdate(_, prevState) {
        if (prevState.firebase !== this.state.firebase) {
            this.getUser()
        }
    }

    getUser = async () => {
        let firebase = this.state.firebase
        let user = await getCurrentUser(firebase)

        if (!user) {
            navigate('/login')
        }

        console.log("User is logged in")
    }

    render() {
        return (
            <Layout>
                <div className="portal-header">
                    <div className="portal-logo" >
                        <img alt="logo" src={logo} />
                    </div>
                </div>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span><Icon type="user" />Profil</span>
                                }
                            >
                                <Menu.Item key="1">Visa Profile</Menu.Item>
                                <Menu.Item key="2">Editera Profil</Menu.Item>
                                <Menu.Item key="3">Kontakta Poddhype</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span><Icon type="message" />Mina meddelanden</span>
                                }
                            >
                                <Menu.Item key="4">Kommer snart</Menu.Item>
                            </SubMenu>

                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Profil</Breadcrumb.Item>
                            <Breadcrumb.Item>Visa Profil</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: '1000px',
                            }}
                        >
                            Content
                </Content>
                    </Layout>
                </Layout>
            </Layout >
        )
    }
}

export default Portal
