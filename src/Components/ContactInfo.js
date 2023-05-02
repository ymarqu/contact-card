import React from "react";

export default function ContactInfo(props){
    return (
        <div className="contact">
            <p className="name">{props.name}</p>
            <p className="job-title">{props.jobtitle}</p>
            <small className="email">{props.email}</small>
        </div>
    )
}
