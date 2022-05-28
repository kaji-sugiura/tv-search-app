import React from "react";

export function CardDialog(props) {
  const { open, children } = props;

  if (!open) return null;

  return (
    <div className="dialog" onClick={props.onClick}>
      {children}
    </div>
  );
}
