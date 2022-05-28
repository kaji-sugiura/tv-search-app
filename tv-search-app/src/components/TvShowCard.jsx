import React, { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { CardDialog } from "./CardDialog";

export function TvShowCard(props) {
  const [open, setOpen] = useState(false);

  const onChangeOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      {!open && (
        <div className="tvCard" onClick={onChangeOpen}>
          <img src={props.img} alt={props.name} />
          <div className="text-center">
            <p className="w-30 cardTitle">{props.name}</p>
            <p>
              <BsFillHeartFill color="red" />
              <span className="score">{`${props.score * 100}`}</span>
            </p>
          </div>
        </div>
      )}
      <CardDialog open={open} onClick={onChangeOpen}>
        <img src={props.img} alt={props.name} width={300} />
        <p>summary</p>
        <div
          dangerouslySetInnerHTML={{ __html: props.summary }}
          style={{ width: "330px" }}
        ></div>
        <p>day:{props.schedule.days[0]}</p>
        <p>time:{props.schedule.time}</p>
      </CardDialog>
    </>
  );
}
