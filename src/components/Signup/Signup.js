import './style.less';
import React from 'react';
import { Steps, Layout, Typography } from 'antd'
import SEO from '../../common/components/seo'

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

const logo = require('./../../common/assets/poddhype-logo-blackandwhite.png');
const { Content } = Layout;
const { Title } = Typography;
const { Step } = Steps;

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: 0 }
    }

    componentDidMount = () => {
        if (this.props.page) {
            this.setState({ currentPage: this.props.page })
        }
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
            <div>
                <SEO
                    title="Poddhype | Bli en parnerpodd"
                    description="Beskriv din podd och dina mål så sköter vi resten."
                />
                <Content className='content'>
                    <Steps current={currentPage} className='steps'>
                        <Step title="Skapa konto" />
                        <Step title="Beskriv podden" />
                        <Step title="Färdig" />
                    </Steps>
                    <header id="onboarding-header">

                        <div id="logo" class="onboarding-logo">
                            <a href="/" target="_blanc">
                                <img alt="logo" src={logo} />
                            </a>
                        </div>
                    </header>

                    {currentPage == 0 && (<Step1 nextForm={() => this.nextForm()} />)}
                    {currentPage == 1 && (<Step2 nextForm={() => this.nextForm()} prevForm={() => this.prevForm()} />)}
                    {currentPage == 2 && (<Step3 nextForm={() => this.nextForm()} prevForm={() => this.prevForm()} />)}
                    {currentPage == 3 &&
                        (<div className='form-content'>
                            <Title level={2}>Tack för din feedback :) </Title>
                        </div>)
                    }
                </Content>
            </div>
        );
    }
}
export default Signup;
