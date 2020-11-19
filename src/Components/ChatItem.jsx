import React from "react";

function chatItem({ user, that }) {
  return (
    <>
      {user ? (
        <li className="chatDetail_me__2ZOxv">{user}</li>
      ) : (
        <li>{that}</li>
      )}
    </>
  );
}

export default chatItem;
