import React from "react";

import { handleGetDate, handleGetTime } from "../../modules";

import ChatItem from "./ChatItem";

function ChatMapper({ chats, onDelete, onEdit, onForward }) {
  const mappedChat = chats.map((chat) => (
    <ChatItem
      key={chat.chatId}
      me={chat.me}
      person={chat.person}
      chatTime={handleGetTime(chat.chatTime)}
      chatDate={handleGetDate(chat.chatTime)}
      onDelete={() => onDelete(chat.chatId)}
      onEdit={() => onEdit(chat.chatId)}
      onForward={() => onForward(chat.chatId)}
    />
  ));
  return <ul className="chatDetail_messages-panel__3aOw8">{mappedChat}</ul>;
}

export default ChatMapper;
