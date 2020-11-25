import React from "react";

function chatItem({ me, chatDate, person, chatTime }) {
  return (
    <>
      {me && (
        <div className="message-row you-message">
          <div className="message-content">
            <div className="message-text">
              <li className="chatDetail_me__2ZOxv">{me}</li>
            </div>
            <div className="message-time">
              <span>{chatTime}</span> {chatDate}
            </div>
          </div>
        </div>
      )}
      {person && (
        <>
          <li
            style={{
              padding: "10px",
              borderRadius: "15px 15px 15px 0",
              fontSize: "1.6rem",
            }}
          >
            {person}
          </li>
          <div className="message-time">
            <span>{chatTime}</span> {chatDate}
          </div>
        </>
      )}
    </>
  );
}

export default chatItem;
