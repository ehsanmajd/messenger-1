import React, { useEffect, useState } from "react";

import SearchBar from "./Components/SearchBar";
import PersonList from "./Components/PersonList";
import ChatBox from "./Components/ChatBox";

function App() {
  const [persons, setPersons] = useState([
    {
      personId: Math.random(),
      avatar: "./personPictures/kitty.jpg",
      personName: "Kitty",
      lastChatText: "thanks...",
      lastChatTime: "15:48",
      lastChatDate: "12/04",
      unreadChatCounter: 2,
      chats: [
        {
          me: "Hello there...",
          chatTime: "19:15",
          chatDate: "10/21",
          chatId: Math.random(),
        },
        {
          me: "nock.. nock...",
          chatTime: "19:26",
          chatDate: "11/2",
          chatId: Math.random(),
        },
        {
          person: "Hi :) how are u... ?",
          chatTime: "19:37",
          chatDate: "11/11",
          chatId: Math.random(),
        },
        {
          me: "thanks...",
          chatTime: "15:48",
          chatDate: "12/04",
          chatId: Math.random(),
        },
      ],
    },
    {
      personId: Math.random(),
      avatar: "./personPictures/love.jpg",
      personName: "Love",
      lastChatText: "not good ... :(",
      lastChatTime: "09:48",
      lastChatDate: "12/04",
      unreadChatCounter: 4,
      chats: [
        {
          me: "Hello there...",
          chatTime: "19:15",
          chatDate: "10/21",
          chatId: Math.random(),
        },
        {
          me: "nock.. nock...",
          chatTime: "19:26",
          chatDate: "11/2",
          chatId: Math.random(),
        },
        {
          person: "Hi :) how are u... ?",
          chatTime: "19:37",
          chatDate: "11/11",
          chatId: Math.random(),
        },
        {
          me: "not good ... :(",
          chatTime: "09:48",
          chatDate: "12/04",
          chatId: Math.random(),
        },
      ],
    },
    {
      personId: Math.random(),
      avatar: "./personPictures/nahid.jpg",
      personName: "Nahid",
      lastChatText: "dont ask ...",
      lastChatTime: "03:56",
      lastChatDate: "12/04",
      unreadChatCounter: 10,
      chats: [
        {
          me: "Hello there...",
          chatTime: "19:15",
          chatDate: "10/21",
          chatId: Math.random(),
        },
        {
          me: "nock.. nock...",
          chatTime: "19:26",
          chatDate: "11/2",
          chatId: Math.random(),
        },
        {
          person: "Hi :) how are u... ?",
          chatTime: "19:37",
          chatDate: "11/11",
          chatId: Math.random(),
        },
        {
          me: "dont ask ...",
          chatTime: "03:56",
          chatDate: "12/04",
          chatId: Math.random(),
        },
      ],
    },
    {
      personId: Math.random(),
      avatar: "./personPictures/parvaneh.jpg",
      personName: "Parvaneh",
      lastChatText: "chatContent",
      lastChatTime: "01:48",
      lastChatDate: "12/04",
      unreadChatCounter: 10,
      chats: [
        {
          me: "Hello there...",
          chatTime: "19:15",
          chatDate: "10/21",
          chatId: Math.random(),
        },
        {
          me: "nock.. nock...",
          chatTime: "19:26",
          chatDate: "11/2",
          chatId: Math.random(),
        },
        {
          person: "Hi :) how are u... ?",
          chatTime: "19:37",
          chatDate: "11/11",
          chatId: Math.random(),
        },
        {
          me: "thanks...",
          chatTime: "01:48",
          chatDate: "12/04",
          chatId: Math.random(),
        },
      ],
    },
    {
      personId: Math.random(),
      avatar: "./personPictures/sahar.jpg",
      personName: "Sahar",
      lastChatText: "uuuuh i dont know !",
      lastChatTime: "11:26",
      lastChatDate: "12/04",
      unreadChatCounter: 10,
      chats: [
        {
          me: "Hello there...",
          chatTime: "19:15",
          chatDate: "10/21",
          chatId: Math.random(),
        },
        {
          me: "nock.. nock...",
          chatTime: "19:26",
          chatDate: "11/2",
          chatId: Math.random(),
        },
        {
          person: "Hi :) how are u... ?",
          chatTime: "19:37",
          chatDate: "11/11",
          chatId: Math.random(),
        },
        {
          me: "uuuuh i dont know !",
          chatTime: "11:26",
          chatDate: "12/04",
          chatId: Math.random(),
        },
      ],
    },
    {
      personId: Math.random(),
      avatar: "./personPictures/sajad.jpg",
      personName: "Sajad",
      lastChatText: "yey im good!",
      lastChatTime: "04:28",
      lastChatDate: "12/04",
      unreadChatCounter: 10,
      chats: [
        {
          me: "Hello there...",
          chatTime: "19:15",
          chatDate: "10/21",
          chatId: Math.random(),
        },
        {
          me: "nock.. nock...",
          chatTime: "19:26",
          chatDate: "11/2",
          chatId: Math.random(),
        },
        {
          person: "Hi :) how are u... ?",
          chatTime: "19:37",
          chatDate: "11/11",
          chatId: Math.random(),
        },
        {
          me: "yey im good!",
          chatTime: "04:28",
          chatDate: "12/04",
          chatId: Math.random(),
        },
      ],
    },
    {
      personId: Math.random(),
      avatar: "./personPictures/soheila.jpg",
      personName: "Soheila",
      lastChatText: "so excited.>!",
      lastChatTime: "09:28",
      lastChatDate: "12/04",
      unreadChatCounter: 10,
      chats: [
        {
          me: "Hello there...",
          chatTime: "19:15",
          chatDate: "10/21",
          chatId: Math.random(),
        },
        {
          me: "nock.. nock...",
          chatTime: "19:26",
          chatDate: "11/2",
          chatId: Math.random(),
        },
        {
          person: "Hi :) how are u... ?",
          chatTime: "19:37",
          chatDate: "11/11",
          chatId: Math.random(),
        },
        {
          me: "so excited.>!",
          chatTime: "09:28",
          chatDate: "12/04",
          chatId: Math.random(),
        },
      ],
    },
  ]);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [chatContent, setChatContent] = useState("");
  const [personList, setPersonList] = useState(null);

  useEffect(() => {
    const list = persons.map((person) => ({
      avatar: person.avatar,
      alt: person.alt,
      personName: person.personName,
      lastChatText: person.lastChatText,
      lastChatTime: person.lastChatTime,
      unreadChatCounter: person.unreadChatCounter,
      personId: person.personId,
    }));

    setPersonList(list);
  }, [persons]);

  function handleAddChat() {
    //TODO selectedPerson.chats
    const copiedPersons = [...persons];
    const person = { ...selectedPerson };
    const index = copiedPersons.findIndex(
      (p) => p.personId === selectedPerson.personId
    );
    person.lastChatTime = handleGetTime();
    person.lastChatText = chatContent;
    person.chats.push({
      me: chatContent,
      chatTime: handleGetTime(),
      chatDate: handleGetDate(),
      chatId: Math.random(),
    });
    copiedPersons.splice(index, 1, person);
    setPersons(copiedPersons);
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

  function handlePersonClick(personId) {
    const copiedPersons = [...persons];
    const index = copiedPersons.findIndex(
      (person) => person.personId === personId
    );
    const personFromCopy = {
      ...copiedPersons.find((person) => person.personId === personId),
    };
    if (personFromCopy.unreadChatCounter) {
      personFromCopy.unreadChatCounter = "";
    }
    copiedPersons.splice(index, 1, personFromCopy);

    setPersons(copiedPersons);
    setSelectedPerson(personFromCopy);
    //TODO fix chatContent
    setChatContent("");
  }

  function handleCloseChat() {
    setChatContent("");
    setSelectedPerson(null);
  }

  function handleGetTime() {
    const dateNow = new Date(Date.now());
    const getHours = dateNow.getHours();
    const getMinutes = dateNow.getMinutes();
    return `${getHours}:${getMinutes}`;
  }

  function handleGetDate() {
    // handleTime("getMonth", "getDay", "/");
    const dateNow = new Date(Date.now());
    const getMonth = dateNow.getMonth();
    const getDay = dateNow.getDay();
    return `${getMonth + 1}/${getDay + 22}`;
  }

  function handleLastItem(chatId) {}

  function handleDelete(chatId) {
    handleLastItem(chatId);
    console.log(chatId);
    const copiedPersons = [...persons];
    const person = { ...selectedPerson };
    const index = copiedPersons.findIndex(
      (p) => p.personId === selectedPerson.personId
    );
    const chatIndex = person.chats.findIndex((chat) => chat.chatId === chatId);
    // person.lastChatTime = handleGetTime();
    // person.lastChatText = chatContent;
    person.chats.splice(chatIndex, 1);
    copiedPersons.splice(index, 1, person);

    setPersons(copiedPersons);
    setChatContent("");
  }

  function handleEdit(chatId) {
    console.log(chatId);
  }

  function handleForward(chatId) {
    console.log(chatId);
  }

  // TODO 2 in 1 time geter
  // function handleTime(timeParams1, timeParams2, timeType) {
  //   const dateNow = new Date(Date.now());
  //   timeParams1 = dateNow.timeParams1();
  //   timeParams2 = dateNow.timeParams2();
  //   return `${timeParams1}${timeType}${timeParams2}`;
  // }

  if (!personList) {
    return "please wait ...";
  }

  return (
    <div className="app_app__3mk8F">
      <div className="app_head__1Nu6Y"></div>
      <div className="app_main__1NOZK">
        <div className="chat_layout__2YPVn">
          <div className="chat_side__2kvyI">
            <SearchBar />
            <PersonList
              personList={personList}
              onPersonClick={handlePersonClick}
            />
          </div>
          <ChatBox
            selectedPerson={selectedPerson}
            chatContent={chatContent}
            onAddChat={handleAddChat}
            onKeyPress={handleKeyPress}
            onChangeInput={handleChangeInput}
            onCloseChat={handleCloseChat}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onForward={handleForward}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
