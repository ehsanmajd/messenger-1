import React from "react";

import UserList from "./UserList";
function UsersList({ users, handleUserClick }) {
  const Lists = users.map((user) => {
    return (
      <UserList
        key={user.userId}
        userId={user.userId}
        avatar={user.avatar}
        alt={user.alt}
        userName={user.username}
        lastChatText={user.lastChatText}
        lastChatTime={user.lastChatTime}
        handleUserClick={handleUserClick}
        unreadChatCounter={user.unreadChatCounter}
      />
    );
  });
  return (
    <>
      <div className="list_list__WxcsG">{Lists}</div>
    </>
  );
}

export default UsersList;
