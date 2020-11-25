import React from "react";

import ChatItem from "./ChatItem";

function ChatMapper({ user }) {
  const mappedChat = user.chats.map((chat) => (
    <ChatItem
      key={chat.chatId}
      me={chat.me}
      person={chat.person}
      chatTime={chat.chatTime}
      chatDate={chat.chatDate}
    />
  ));
  return <>{mappedChat}</>;
}

export default ChatMapper;
