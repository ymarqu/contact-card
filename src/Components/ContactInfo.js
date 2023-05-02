import React from "react";

export default function ContactInfo(props){
    return (
        <div>
            <p className="name">{props.name}</p>
            <p className="job-title">{props.jobtitle}</p>
            <p className="email">{props.email}</p>
        </div>
    )
}
