import React from "react";

import UserListItem from "./UserListItem";
function UserList({ users, handleUserClick }) {
  const Lists = users.map((user) => {
    return (
      <UserListItem
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

export default UserList;
