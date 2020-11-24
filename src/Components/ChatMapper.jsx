import React from "react";
import ChatItem from "./ChatItem";

function ChatMapper({ user }) {
  if (user.length > 0) {
    console.log(user[0].chats);
    const mappedChat = user[0].chats.map((chat, index) => (
      <ChatItem user={chat.text} key={index} />
    ));
    return <>{mappedChat}</>;
  }
  return true;
}

export default ChatMapper;
