import React from "react";

export default function Image(props){

    return (
        <img className="head-shot-img" src={props.url} alt={props.altText}></img>
    )

}
