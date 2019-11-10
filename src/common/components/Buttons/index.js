import React from 'react';
import { Button } from 'antd'
import { Link } from "@reach/router"
import './buttons.less'


export const ButtonCta = (props) => {
    const btnCtaColor = '#8940fa';
    const btnGreenColor = '#3BD59B';
    return (
        <Link to={props.to}>
            {props.size == "small" ?
                <Button
                    className="btn-cta-purple-small"
                    style={{
                        borderRadius: '25px',
                        background: btnCtaColor,
                        transition: 'all 0.4s ease 0s',
                        borderColor: btnCtaColor,
                        height: '40px',
                        fontWeight: '400',
                        fontSize: '16px',
                        margin: '10px',
                        marginLeft: '15px',
                        fontFamily: 'Source_Sans_Pro'
                    }}
                    type="primary"
                    size='large'>
                    {props.title}
                </Button> :
                <Button
                    className="btn-cta-purple"
                    style={{
                        borderRadius: '25px',
                        background: btnCtaColor,
                        transition: 'all 0.4s ease 0s',
                        borderColor: btnCtaColor,
                        height: '50px',
                        width: '210px',
                        fontWeight: '600',
                        fontSize: '16px',
                        margin: '20px',
                    }}
                    type="primary"
                    size='large'>
                    {props.title}
                </Button>
            }
        </Link>)
}

export const ButtonTransparent = (props) => (
    <Link to={props.to}>
        <Button
            className="btn-cta-transparent"
            style={{
                borderRadius: '25px',
                background: 'rgba(255, 255, 255, 0)',
                transition: 'all 0.4s ease 0s',
                border: '2px solid #292F37',
                color: '#292F37',
                textShadow: 'none',
                height: '50px',
                width: '210px',
                fontWeight: '600',
                fontSize: '16px',
                margin: '20px',
            }}
            type="primary"
            size='large'>
            {props.title}
        </Button>
    </Link >)