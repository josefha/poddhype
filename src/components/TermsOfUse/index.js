
import React from 'react'
import "../Signup/style.less"

import { Layout } from 'antd'
import { Link } from "@reach/router"


const { Content } = Layout;


const logo = require('./../../common/assets/poddhype-logo-blackandwhite.png');

class TermsOfUse extends React.Component {

    render() {
        return (
            <Layout style={{
                height: '100vh',
            }}>
                <Content className='content' style={{ padding: '40px' }}>

                    <h2><strong>Terms and Conditions</strong></h2>

                    <p>Welcome to poddhype.com</p>

                    <p>These terms and conditions outline the rules and regulations for the use of Poddhype's Website, located at https://poddhype.com.</p>

                    <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>

                    <h3><strong>Cookies</strong></h3>

                    <p>We employ the use of cookies. By accessing poddhype.com, you agreed to use cookies in agreement with the Poddhype's Privacy Policy.</p>

                    <h3><strong>License</strong></h3>

                    <p>You must not:</p>
                    <ul>
                        <li>Republish material from poddhype.com</li>
                        <li>Sell, rent or sub-license material from poddhype.com</li>
                        <li>Reproduce, duplicate or copy material from poddhype.com</li>
                        <li>Redistribute content from poddhype.com</li>
                    </ul>

                    <h3><strong>iFrames</strong></h3>

                    <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>

                    <h3><strong>Your Privacy</strong></h3>
                    <p> We store the information you enter in the sign up. This information is used in our platform to show your profile and match you with brands that use the portal.
                        Your email will not be shared or displayed on the website. We will not sell your data to any third party. We have the right to use your podcast name and podcast image in marketing for poddhype.com unless you have told us otherwise.
                        You can at any time tell us you don't want us to store your information, you can do so by emailing hej@podhype.com.
                    </p>

                </Content>
            </Layout >
        )
    }
}

export default TermsOfUse;