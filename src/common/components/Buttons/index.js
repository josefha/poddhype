import React from 'react';
import { Button } from 'antd'
import { Link } from "@reach/router"
import './buttons.less'


const btnCtaColor = '#8940fa';


const SmallButtonTransparent = (props) => (<Button
    className="btn-cta-transparent-small"
    style={{
        background: 'rgba(255, 255, 255, 0)',
        border: '1px solid #314659',
        color: '#314659',
        textShadow: 'none',
        fontWeight: '300',
        borderRadius: '25px',
        transition: 'all 0.4s ease 0s',
        height: '40px',
        fontSize: '16px',
        margin: '10px',
        marginLeft: '15px',
        fontFamily: 'Source_Sans_Pro'
    }}
    size='large'
    onClick={() => props.onClick()}>
    {props.title}
</Button>)

const SmallButtonPurple = (props) => (<Button
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
    size='large'
    onClick={() => props.onClick()}>
    {props.title}
</Button>)

const LargeButtonPurple = (props) => (
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
)

export const SecondaryButton = (props) => (
    <SmallButtonTransparent
        title={props.title}
        onClick={() => props.onClick()}
    />)

export const DefaultButton = (props) => (
    <SmallButtonPurple
        title={props.title}
        onClick={() => props.onClick()}
    />)

export const ButtonCta = (props) => {
    return (
        <Link to={props.to}>
            {props.size == "small" ?
                <SmallButtonPurple title={props.title}> </SmallButtonPurple>
                :
                <LargeButtonPurple title={props.title}> </LargeButtonPurple>
            }
        </Link>)
}

export const ButtonTransparent = (props) => {
    const StyledButton = (props) => (<Button
        className="btn-cta-transparent"
        {...props}
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
    </Button>)
    const Result = props.onClick ?
        (
            <StyledButton
                title={props.title}
                onClick={() => props.onClick()} />
        ) : (
            < Link to={props.to} >
                <StyledButton
                    title={props.title} />
            </Link >)

    return Result
}