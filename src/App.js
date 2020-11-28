import React, { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import PersonList from "./Components/person/PersonList";
import ChatBox from "./Components/chat/ChatBox";

function App() {
  const [persons, setPersons] = useState([
    {
      details: {
        personId: Math.random(),
        avatar: "./personPictures/kitty.jpg",
        personName: "Kitty",
        lastChatText: "thanks...",
        lastChatTime: "15:48",
        lastChatDate: "12/04",
        unreadChatCounter: 2,
      },
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
      details: {
        personId: Math.random(),
        avatar: "./personPictures/love.jpg",
        personName: "Love",
        lastChatText: "not good ... :(",
        lastChatTime: "09:48",
        lastChatDate: "12/04",
        unreadChatCounter: 4,
      },
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
      details: {
        personId: Math.random(),
        avatar: "./personPictures/nahid.jpg",
        personName: "Nahid",
        lastChatText: "dont ask ...",
        lastChatTime: "03:56",
        lastChatDate: "12/04",
        unreadChatCounter: 10,
      },
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
      details: {
        personId: Math.random(),
        avatar: "./personPictures/parvaneh.jpg",
        personName: "Parvaneh",
        lastChatText: "chatContent",
        lastChatTime: "01:48",
        lastChatDate: "12/04",
        unreadChatCounter: 10,
      },
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
      details: {
        personId: Math.random(),
        avatar: "./personPictures/sahar.jpg",
        personName: "Sahar",
        lastChatText: "uuuuh i dont know !",
        lastChatTime: "11:26",
        lastChatDate: "12/04",
        unreadChatCounter: 10,
      },
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
      details: {
        personId: Math.random(),
        avatar: "./personPictures/sajad.jpg",
        personName: "Sajad",
        lastChatText: "yey im good!",
        lastChatTime: "04:28",
        lastChatDate: "12/04",
        unreadChatCounter: 10,
      },
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
      details: {
        personId: Math.random(),
        avatar: "./personPictures/soheila.jpg",
        personName: "Soheila",
        lastChatText: "so excited.>!",
        lastChatTime: "09:28",
        lastChatDate: "12/04",
        unreadChatCounter: 10,
      },
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
      avatar: person.details.avatar,
      alt: person.details.alt,
      personName: person.details.personName,
      lastChatText: person.details.lastChatText,
      lastChatTime: person.details.lastChatTime,
      unreadChatCounter: person.details.unreadChatCounter,
      personId: person.details.personId,
    }));

    setPersonList(list);
  }, [persons]);

  function handleAddChat() {
    //TODO selectedPerson.chats
    const copiedPersons = [...persons];
    const details = { ...selectedPerson.details };
    const chats = [...selectedPerson.chats];
    const index = copiedPersons.findIndex(
      (p) => p.details.personId === selectedPerson.details.personId
    );
    details.lastChatTime = handleGetTime();
    details.lastChatText = chatContent;
    chats.push({
      me: chatContent,
      chatTime: handleGetTime(),
      chatDate: handleGetDate(),
      chatId: Math.random(),
    });
    copiedPersons.splice(index, 1, { details, chats });
    setSelectedPerson({ details, chats });
    setPersons(copiedPersons);
    setChatContent("");
  }

  function handleKeyPress(e) {
    if (chatContent && e.key === "Enter") {
      handleAddChat();
    }
    //TODO add another keyPress soon...
  }

  function handleChangeInput(e) {
    setChatContent(e.target.value);
  }

  function handlePersonClick(personId) {
    const copiedPersons = [...persons];
    const index = copiedPersons.findIndex(
      (person) => person.details.personId === personId
    );
    const details = { ...copiedPersons[index].details };
    const chats = [...copiedPersons[index].chats];
    if (details.unreadChatCounter) {
      details.unreadChatCounter = "";
    }
    const newPerson = { details, chats };
    copiedPersons.splice(index, 1, newPerson);

    setSelectedPerson(newPerson);
    setPersons(copiedPersons);
    setChatContent("");
    //TODO fix chatContent
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

  function handleDeleteChat(chatId) {
    let copiedPersons = [...persons];
    const personDetails = { ...selectedPerson.details };
    const newChats = selectedPerson.chats.filter(
      (chat) => chat.chatId !== chatId
    );
    const personIndex = copiedPersons.findIndex(
      (p) => p.details.personId === selectedPerson.details.personId
    );
    if (newChats.length) {
      const chatLastIndex = newChats.length - 1;
      personDetails.lastChatTime = newChats[chatLastIndex].chatTime;
      if (newChats[chatLastIndex].me) {
        personDetails.lastChatText = newChats[chatLastIndex].me;
      }
      if (newChats[chatLastIndex].person) {
        personDetails.lastChatText = newChats[chatLastIndex].person;
      }
      copiedPersons.splice(personIndex, 1, {
        details: personDetails,
        chats: newChats,
      });
      setSelectedPerson({ details: personDetails, chats: newChats });
    }
    if (!newChats.length) {
      copiedPersons.splice(personIndex, 1);
      handleCloseChat();
    }
    setChatContent("");
    setPersons(copiedPersons);
  }

  function handleEdit(chatId, personId) {
    console.log("chat id :", chatId, "personId", personId);
  }

  function handleForward(chatId) {}

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
          {selectedPerson && (
            <ChatBox
              details={selectedPerson.details}
              chats={selectedPerson.chats}
              chatContent={chatContent}
              onAddChat={handleAddChat}
              onKeyPress={handleKeyPress}
              onChangeInput={handleChangeInput}
              onCloseChat={handleCloseChat}
              onDelete={handleDeleteChat}
              onEdit={handleEdit}
              onForward={handleForward}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
