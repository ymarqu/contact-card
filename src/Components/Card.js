import React from 'react';
import Image from './Images';
import ContactInfo from './ContactInfo';
import SocialButton from './SocialButtons';
import InfoText from './InfoText';

export default function Card(){

    return (
        <div className='card'>
            <Image url="../professional-photographer-08.jpeg" alt="My profesional headshot" />
            <ContactInfo name="Yesenia Marquina" jobtitle="New Bussiness Coordinator" email="yeseniamrqna@gmail.com" />
            <SocialButton link="https://github.com/ymarqu" desc="GitHub" />
            <SocialButton link="https://www.linkedin.com/in/yesenia-marq/" desc="LinkedIn" />
            <InfoText header="About Me" desc="" />
            <InfoText header="Intrests" desc="" />
       </div>
    );
}
