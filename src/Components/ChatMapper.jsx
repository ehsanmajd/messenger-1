import React from "react";
import ChatItem from "./ChatItem";

function ChatMapper({ user }) {
  const mappedChat = user.chats.map((chat) => (
    <ChatItem
      me={chat.me}
      person={chat.person}
      chatTime={chat.chatTime}
      chatDate={chat.chatDate}
      key={chat.chatId}
    />
  ));
  return <>{mappedChat}</>;
}

export default ChatMapper;
