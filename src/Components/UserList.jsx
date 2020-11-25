import React from "react";

import UserListItem from "./UserListItem";

function UserList({ userList, onUserClick }) {
  const list = userList.map((user) => {
    return (
      <UserListItem
        key={user.userId}
        userId={user.userId}
        avatar={user.avatar}
        personName={user.personName}
        lastChatText={user.lastChatText}
        lastChatTime={user.lastChatTime}
        // lastChatDate={user.lastChatDate}
        unreadChatCounter={user.unreadChatCounter}
        onUserClick={onUserClick}
      />
    );
  });
  return (
    <>
      <div className="list_list__WxcsG">{list}</div>
    </>
  );
}

export default UserList;
