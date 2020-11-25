import React, { useState } from "react";

import { getUser, getList, chatUpdate } from "./server";

import SearchBar from "./Components/SearchBar";
import UserList from "./Components/UserList";
import ChatBox from "./Components/ChatBox";

function App() {
  const [chatContent, setChatContent] = useState("");
  const [user, setUser] = useState(null);

  function handleAddChat() {
    chatUpdate(user.userId, chatContent);
    setChatContent("");
  }

  function handleKeyPress(e) {
    if (chatContent && e.key === "Enter") {
      handleAddChat();
    }
  }

  function handleChangeInput(e) {
    setChatContent(e.target.value);
  }

  function handleUserClick(userId) {
    setChatContent("");
    setUser(getUser(userId));
  }
  //TODO fix chatContent
  function handleCloseChat() {
    setChatContent("");
    setUser(null);
  }

  return (
    <div className="app_app__3mk8F">
      <div className="app_head__1Nu6Y"></div>
      <div className="app_main__1NOZK">
        <div className="chat_layout__2YPVn">
          <div className="chat_side__2kvyI">
            <SearchBar />
            <UserList userList={getList()} onUserClick={handleUserClick} />
          </div>
          <ChatBox
            user={user}
            chatContent={chatContent}
            onAddChat={handleAddChat}
            onKeyPress={handleKeyPress}
            onChangeInput={handleChangeInput}
            onCloseChat={handleCloseChat}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
