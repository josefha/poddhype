import React from 'react'
import { ButtonTransparent, ButtonCta } from '../Buttons'

const SignupBlock = (props) => (
    <div style={{ margin: 'auto', textAlign: 'center' }}>
        <div style={{ maxWidth: '500px', margin: 'auto' }} >
            <div className="ant-divider ant-divider-horizontal ant-divider-with-text-center" role="separator">
                <span className="ant-divider-inner-text">Bli medlem</span>
            </div>
        </div>
        <ButtonTransparent
            to="/brands"
            title="För Brands"
        />
        <ButtonCta
            to="/podcasters"
            title="För poddar"
        />
    </div>)

export default SignupBlock