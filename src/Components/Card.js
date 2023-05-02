import React from 'react';
import Image from './Images';
import ContactInfo from './ContactInfo';
import SocialButton from './SocialButtons';
import InfoText from './InfoText';
import img from '../headShot.jpeg'
export default function Card(){

    return (
        <div className='card'>
            <Image url={img} alt="My profesional headshot" />
            <ContactInfo name="Yesenia Marquina" jobtitle="New Bussiness Coordinator" email="yeseniamrqna@gmail.com" />
            <SocialButton link="https://github.com/ymarqu" desc="GitHub" />
            <SocialButton link="https://www.linkedin.com/in/yesenia-marq/" desc="LinkedIn" color="true"/>
            <InfoText header="About Me" desc="On my free time I like to keep my coding skill sharps by diving into new concepts and building fun web apps. I am currently learning React." />
            <InfoText header="Intrests" desc="Gym. Music. Food. Plants. Learning. Boxing. Family. Dancing." />
       </div>
    );
}
