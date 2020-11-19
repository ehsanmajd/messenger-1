import React, { useState } from "react";
import ChatBox from "./Components/ChatBox";
import SearchBar from "./Components/SearchBar";
import UsersList from "./Components/UsersList";

function App() {
  const [fakeUser, setFakeUser] = useState({
    name: "fakeUser",
    userId: "unique",
    chats: [
      { title: "first", text: "aa123", chatId: 1 },
      { title: "sec", text: "bb234", chatId: 2 },
      { title: "third", text: "cc345", chatId: 3 },
      { title: "forth", text: "dd456", chatId: 4 },
      { title: "fifth", text: "ee567", chatId: 5 },
    ],
  });
  return (
    <div className="app_app__3mk8F">
      <div className="app_head__1Nu6Y"></div>
      <div className="app_main__1NOZK">
        <div className="chat_layout__2YPVn">
          <div className="chat_side__2kvyI">
            <SearchBar />
            <UsersList />
          </div>
          <ChatBox fakeUser={fakeUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
