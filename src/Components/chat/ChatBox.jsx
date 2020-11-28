import React from "react";

import ChatInput from "./ChatInput";
import ChatMapper from "./ChatMapper";
import ChatTitleBar from "./ChatTitleBar";

function ChatBox({
  details,
  chats,
  chatContent,
  onAddChat,
  onKeyPress,
  onChangeInput,
  onCloseChat,
  onDelete,
  onEdit,
  onForward,
}) {
  return (
    <div>
      <ChatTitleBar
        avatar={details.avatar}
        personName={details.personName}
        onCloseChat={onCloseChat}
      />
      <div
        style={{ backgroundColor: "lighcyan" }}
        className="chatDetail_chat-box__3peJu"
      >
        <ul className="chatDetail_messages-panel__3aOw8">
          <ChatMapper
            chats={chats}
            onDelete={onDelete}
            onEdit={onEdit}
            onForward={onForward}
          />
        </ul>
        <ChatInput
          chatContent={chatContent}
          onAddChat={onAddChat}
          onKeyPress={onKeyPress}
          onChangeInput={onChangeInput}
        />
      </div>
    </div>
  );
}

export default ChatBox;
