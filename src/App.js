import React, { useState } from "react";
import ChatBox from "./Components/ChatBox";
import SearchBar from "./Components/SearchBar";
import UsersList from "./Components/UsersLists";

function App() {
  const [users, setUsers] = useState([
    {
      avatar: "./05-4K.jpg",
      alt: "user1",
      username: "user1",
      lastChatText: "lastChatText",
      lastChatTime: Date.now().toString(),
      unreadChatCounter: 10,
      userId: 1,
      chats: [
        { title: "first", text: "aa123", chatId: 1 },
        { title: "sec", text: "bb234", chatId: 2 },
        { title: "third", text: "cc345", chatId: 3 },
        { title: "forth", text: "dd456", chatId: 4 },
        { title: "fifth", text: "ee567", chatId: 5 },
        { title: "fifth", text: "ee567", chatId: 5 },
        { title: "fifth", text: "ee567", chatId: 5 },
      ],
    },
    {
      avatar: "./05-4K.jpg",
      alt: "user3",
      username: "user3",
      lastChatText: "lastChatText",
      lastChatTime: Date.now().toString(),
      unreadChatCounter: 4,
      userId: 3,
      chats: [
        { title: "first", text: "aa123", chatId: 1 },
        { title: "sec", text: "bb234", chatId: 2 },
        { title: "third", text: "cc345", chatId: 3 },
        { title: "forth", text: "dd456", chatId: 4 },
        { title: "fifth", text: "ee567", chatId: 5 },
        { title: "fifth", text: "ee567", chatId: 5 },
        { title: "fifth", text: "ee567", chatId: 5 },
        { title: "fifth", text: "ee567", chatId: 5 },
        { title: "fifth", text: "ee567", chatId: 5 },
        { title: "fifth", text: "ee567", chatId: 5 },
      ],
    },
    {
      avatar: "./05-4K.jpg",
      alt: "user2",
      username: "user2",
      lastChatText: "lastChatText",
      lastChatTime: Date.now().toString(),
      unreadChatCounter: 6,
      userId: 2,
      chats: [
        { title: "first", text: "aa123", chatId: 1 },
        { title: "sec", text: "bb234", chatId: 2 },
        { title: "third", text: "cc345", chatId: 3 },
        { title: "forth", text: "dd456", chatId: 4 },
        { title: "fifth", text: "ee567", chatId: 5 },
        { title: "fifth", text: "ee567", chatId: 5 },
        { title: "fifth", text: "ee567", chatId: 5 },
        { title: "fifth", text: "ee567", chatId: 5 },
        { title: "fifth", text: "ee567", chatId: 5 },
        { title: "fifth", text: "ee567", chatId: 5 },
        { title: "fifth", text: "ee567", chatId: 5 },
        { title: "fifth", text: "ee567", chatId: 5 },
        { title: "fifth", text: "ee567", chatId: 5 },
        { title: "fifth", text: "ee567", chatId: 5 },
        { title: "fifth", text: "ee567", chatId: 5 },
      ],
    },
  ]);
  const [user, setUser] = useState([]);

  function handleUserClick(userId) {
    console.log("userID:", userId);
    const user = users.filter((user) => user.userId === userId);
    setUser(user);
  }
  return (
    <div className="app_app__3mk8F">
      <div className="app_head__1Nu6Y"></div>
      <div className="app_main__1NOZK">
        <div className="chat_layout__2YPVn">
          <div className="chat_side__2kvyI">
            <SearchBar />
            <UsersList handleUserClick={handleUserClick} users={users} />
          </div>
          <ChatBox
            user={user}
            handleUserClick={handleUserClick}
            users={users}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
