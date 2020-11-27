import React from "react";

import ChatItem from "./ChatItem";

function ChatMapper({ selectedperson }) {
  const mappedChat = selectedperson.chats.map((chat) => (
    <ChatItem
      key={chat.chatId}
      me={chat.me} // کاربر مسنجر
      person={chat.person} // شخص مقابل
      chatTime={chat.chatTime}
      chatDate={chat.chatDate}
    />
  ));
  return <>{mappedChat}</>;
}

export default ChatMapper;
