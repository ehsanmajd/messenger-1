import React from "react";
import Button from "./Buttton";

function Buttons({ values }) {
  const buttons = values.map((value, index) => {
    return (
      <Button
        key={index}
        text={value.text}
        event={value.event}
        style={value.style}
      />
    );
  });
  return <div>{buttons}</div>;
}

export default Buttons;
