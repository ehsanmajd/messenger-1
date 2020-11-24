import React from "react";

function UserListItem({
  handleUserClick,
  userId,
  avatar,
  alt,
  userName,
  lastChatText,
  lastChatTime,
  unreadChatCounter,
}) {
  return (
    <>
      <div
        className="listItem_list-item__1mnZB"
        onClick={() => handleUserClick(userId)}
      >
        <div className="listItem_avatar__FkMqU">
          <div className="avatar__avatar__oTaCM">
            <img src={avatar} alt={alt} />
          </div>
        </div>
        <div className="listItem_name__2wTlg">{userName}</div>
        <div className="listItem_message__3ZiRE">{lastChatText}</div>
        <div className="listItem_time__3-xft">{lastChatTime}</div>
        <div className="listItem_info__3vSL0">
          {unreadChatCounter && <div>{unreadChatCounter}</div>}
        </div>
      </div>
    </>
  );
}

export default UserListItem;
