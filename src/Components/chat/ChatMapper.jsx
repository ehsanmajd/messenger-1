import React from "react";

import ChatItem from "./ChatItem";

function ChatMapper({ chats, onDelete, onEdit, onForward }) {
  const mappedChat = chats.map((chat) => (
    <ChatItem
      key={chat.chatId}
      me={chat.me} // کاربر پیام رسان
      person={chat.person} // شخص مقابل
      chatTime={chat.chatTime}
      chatDate={chat.chatDate}
      onDelete={() => onDelete(chat.chatId)}
      onEdit={() => onEdit(chat.chatId)}
      onForward={() => onForward(chat.chatId)}
    />
  ));
  return <>{mappedChat}</>;
}

export default ChatMapper;
