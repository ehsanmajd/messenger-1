import React from "react";

import ChatItem from "./ChatItem";

function ChatMapper({ chats, onDelete, onEdit, onForward }) {
  const mappedChat = chats.map((chat) => (
    <ChatItem
      key={chat.chatId}
      me={chat.me}
      person={chat.person}
      chatTime={chat.chatTime}
      chatDate={chat.chatDate}
      onDelete={() => onDelete(chat.chatId)}
      onEdit={() => onEdit(chat.chatId)}
      onForward={() => onForward(chat.chatId)}
    />
  ));
  return <ul className="chatDetail_messages-panel__3aOw8">{mappedChat}</ul>;
}

export default ChatMapper;
