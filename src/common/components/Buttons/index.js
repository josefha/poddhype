import React from 'react';
import { Button } from 'antd'
import { Link } from "@reach/router"


export const ButtonCta = (props) => {
    const btnCtaColor = '#8940fa';
    return (
        <Link to={props.to}>
            {props.size == "small" ?
                <Button
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
                        marginLeft: '15px',
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
            style={{
                borderRadius: '25px',
                background: 'rgba(255, 255, 255, 0)',
                transition: 'all 0.4s ease 0s',
                border: '2px solid #314659',
                color: '#314659',
                height: '50px',
                width: '210px',
                fontWeight: '600',
                fontSize: '16px',
                margin: '20px',
                marginRight: '15px',
                float: 'right'
            }}
            type="primary"
            size='large'>
            {props.title}
        </Button>
    </Link>)