import React from 'react';

export default function SocialButton(props){
    return (
        <a className={props.color ? 'btn purple': 'btn'} href={props.link}>{props.desc}</a>
    )
}
