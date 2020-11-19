import React, { useState } from "react";
import ChatBox from "./Components/ChatBox";

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
    <div>
      <ChatBox fakeUser={fakeUser} />
    </div>
  );
}

export default App;
