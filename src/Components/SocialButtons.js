import React from 'react';

export default function SocialButton(props){
    return (
        <a className='btn' href={props.link}>{props.desc}</a>
    )
}
