import React from "react";
import { BsStar } from "react-icons/bs";

export function TvShowCard(props) {
  return (
    <div className="tvCard">
      <img src={props.img} alt={props.name} />
      <p className="w-30 cardTitle">{props.name}</p>
      <p>
        <BsStar color="yellow" />
        {props.score}
      </p>
    </div>
  );
}
