import React from "react";

export default function InfoText(props){
    return (
    <div>
    <p className="header">{props.header}</p>
    <p className="desc-text">{props.desc}</p>
    </div>
    )
}
