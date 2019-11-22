import './style.less';
import React from 'react';
import { Link } from "@reach/router"

const logo = require('./../../common/assets/poddhype-logo-blackandwhite.png');

import { Steps, Layout, Typography } from 'antd'
const { Content } = Layout;
const { Title } = Typography;
const { Step } = Steps;

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

class WebOnbording extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: 2 }
    }

    nextForm = () => {
        const nextPage = this.state.currentPage + 1
        this.setState({ currentPage: nextPage })
    }
    prevForm = () => {
        if (this.state.currentPage > 0) {
            const nextPage = this.state.currentPage - 1
            this.setState({ currentPage: nextPage })
        }
    }
    render() {
        const currentPage = this.state.currentPage
        return (
            <Layout style={{
                height: '100vh',
            }}>
                <header id="onboarding-header">
                    <Link to="/">
                        <div id="logo" class="onboarding-logo">
                            <img alt="logo" src={logo} />
                        </div>
                    </Link>
                </header>
                <Content className='content'>
                    <Steps current={currentPage} className='steps'>
                        <Step title="Skapa Profil" />
                        <Step title="Beskriv Podcast" />
                        <Step title="Klar" />
                    </Steps>

                    {currentPage == 0 && (<Step1 nextForm={() => this.nextForm()} />)}
                    {currentPage == 1 && (<Step2 nextForm={() => this.nextForm()} prevForm={() => this.prevForm()} />)}
                    {currentPage == 2 && (<Step3 nextForm={() => this.nextForm()} prevForm={() => this.prevForm()} />)}
                    {currentPage == 3 &&
                        (<div className='form-content'>
                            <Title level={2}>Tack för din feedback :) </Title>
                        </div>)
                    }
                </Content>
            </Layout >
        );
    }
}
export default WebOnbording;
