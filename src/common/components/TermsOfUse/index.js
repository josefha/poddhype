
import React from 'react'
import { Modal } from 'antd'

const TermsOfUse = (props) => {
    return (
        <Modal
            bodyStyle={{ fontSize: '10px' }}
            title="Terms and Conditions"
            visible={props.showTerms}
            onOk={props.handleOk}
            onCancel={props.hideTerms}
        >
            <h2><strong>Welcome to poddhype.com</strong></h2>

            <h2><strong>iFrames</strong></h2>

            <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>

            <h2><strong>Cookies</strong></h2>

            <p>We employ the use of cookies. By accessing poddhype.com, you agreed to use cookies in agreement with the Poddhype's Privacy Policy.</p>

            <h2><strong>Privacy Policy</strong></h2>
            <h2> What information do we collect?</h2>
            <p>In Short: We collect personal information that you provide to us such as name, address, contact information, passwords and security data, and information about your podcast that you enter in the signup.
            We collect personal information that you voluntarily provide to us when registering at the Services expressing an interest in obtaining information about us or our products and services, when participating in activities on the Services (such as posting messages in our online forums or entering competitions, contests or giveaways) or otherwise contacting us.
            The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make and the products and features you use. The personal information we collect can include the following:
            Personal Information Provided by You. We collect app usage, and other similar data.
            Credentials. We collect passwords, password hints, and similar security information used for authentication and account access.
            All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.
            We store cookies for analytics on how our users use our site and to keep track if you are a returning visitor.
            </p>
            <h2> Why do we store this information? </h2>
            <p> Your information is used on our platform to show display your profile. Your email will not be shared or displayed on the website.
                We will not sell your data to any third party. We have the right to use your podcast name and podcast image in marketing for poddhype.com unless you have told us otherwise.
                You can at any time tell us you don't want us to store your information, you can do so by sening an email to info@podhype.com.
            </p>
        </Modal>
    )
}

export default TermsOfUse;