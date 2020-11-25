import React, { useState } from "react";

import { getUser, getList, chatUpdate } from "./server";

import ChatBox from "./Components/ChatBox";
import SearchBar from "./Components/SearchBar";
import UserList from "./Components/UserList";

function App() {
  const [chatContent, setChatContent] = useState("");

  const handleChangeInput = (e) => {
    setChatContent(e.target.value);
  };
  const [user, setUser] = useState([]);

  function handleUserClick(userId) {
    console.log("userID:", userId);
    setUser(getUser(userId));
  }
  const handleCloseChat = () => {
    setUser([]);
  };

  const handleAddChat = () => {
    chatUpdate(user.userId, chatContent);
    setChatContent("");
  };

  return (
    <div className="app_app__3mk8F">
      <div className="app_head__1Nu6Y"></div>
      <div className="app_main__1NOZK">
        <div className="chat_layout__2YPVn">
          <div className="chat_side__2kvyI">
            <SearchBar />
            <UserList handleUserClick={handleUserClick} users={getList()} />
          </div>
          <ChatBox
            handleAddChat={handleAddChat}
            chatContent={chatContent}
            user={user}
            handleChangeInput={handleChangeInput}
            handleCloseChat={handleCloseChat}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
