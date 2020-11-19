import React from "react";
import ChatInput from "./ChatInput";
import ChatItem from "./ChatItem";
import ChatMapper from "./ChatMapper";

function ChatBox({ fakeUser }) {
  return (
    <div>
      <div className="chatDetail_chat-box__3peJu">
        <ul className="chatDetail_messages-panel__3aOw8">
          <ChatMapper fakeUser={fakeUser} />
          <ChatItem that={"hi there"} />
          <ChatItem user={"my chat"} />
        </ul>
        <ChatInput />
      </div>
    </div>
  );
}

export default ChatBox;
