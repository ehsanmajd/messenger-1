import React from "react";

const Button = ({ text, event }) => (
  <button
    style={{
      width: "fit-content",
      height: "30px",
      fontSize: "25px",
    }}
    onClick={event}
  >
    {text}
  </button>
);

function chatItem({
  me,
  person,
  chatDate,
  chatTime,
  onDelete,
  onEdit,
  onForward,
}) {
  // message className from Haleh .
  return (
    <>
      {me && (
        <div className="message-row you-message hoverItem">
          <div className="message-content">
            <div className="message-text">
              <li className="chatDetail_me__2ZOxv">{me}</li>
              <Button text="Delete" event={onDelete} />
              <Button text="Edit" event={onEdit} />
              <Button text="Forward" event={onForward} />
            </div>
            <div className="message-time">
              {chatDate} {chatTime}
            </div>
          </div>
        </div>
      )}
      {person && (
        <>
          <div className="hoverItem">
            <li
              style={{
                display: "block",
                width: "fit-content",
                padding: "10px",
                border: "1px black solid",
                borderRadius: "15px 15px 15px 0",
                fontSize: "1.6rem",
              }}
            >
              {person}
              <div>
                <Button text="Delete" event={onDelete} />
                <Button text="Edit" event={onEdit} />
                <Button text="Forward" event={onForward} />
              </div>
            </li>
          </div>
          <div className="message-time">
            {chatTime} {chatDate}
          </div>
        </>
      )}
    </>
  );
}

export default chatItem;
