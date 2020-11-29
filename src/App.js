import React, { useState } from "react";

import { idMaker } from "./modules";

import SearchBar from "./Components/personList/SearchBar";
import PersonList from "./Components/personList/PersonList";
import ChatBox from "./Components/chatBox/ChatBox";

function App() {
  const [chatContent, setChatContent] = useState("");
  const [persons, setPersons] = useState([
    {
      details: {
        personId: idMaker(),
        avatar: "./personPictures/soheila.jpg",
        personName: "Soheila",
        lastChatText: "so excited.>!",
        lastChatTime: 1606577774127,
        unreadChatCounter: 10,
      },
      chats: [
        {
          me: "Hello there...",
          chatTime: 1606577174127,
          chatId: idMaker(),
        },
        {
          me: "nock.. nock...",
          chatTime: 1606577274127,
          chatId: idMaker(),
        },
        {
          person: "Hi :) how are u... ?",
          chatTime: 1606577374127,
          chatId: idMaker(),
        },
        {
          me: "so excited.>!",
          chatTime: 1606577774127,
          chatId: idMaker(),
        },
      ],
    },
    {
      details: {
        personId: idMaker(),
        avatar: "./personPictures/parvaneh.jpg",
        personName: "Parvaneh",
        lastChatText: "chatContent",
        lastChatTime: 1606444467412,
        unreadChatCounter: 10,
      },
      chats: [
        {
          me: "Hello there...",
          chatTime: 1606444167412,
          chatId: idMaker(),
        },
        {
          me: "nock.. nock...",
          chatTime: 1606444267412,
          chatId: idMaker(),
        },
        {
          person: "Hi :) how are u... ?",
          chatTime: 1606444367412,
          chatId: idMaker(),
        },
        {
          me: "thanks...",
          chatTime: 1606444467412,
          chatId: idMaker(),
        },
      ],
    },
    {
      details: {
        personId: idMaker(),
        avatar: "./personPictures/kitty.jpg",
        personName: "Kitty",
        lastChatText: "thanks...",
        lastChatTime: 1606333362326,
        unreadChatCounter: 2,
      },
      chats: [
        {
          me: "Hello there...",
          chatTime: 1606333062326,
          chatId: idMaker(),
        },
        {
          me: "nock.. nock...",
          chatTime: 1606333162326,
          chatId: idMaker(),
        },
        {
          person: "Hi :) how are u... ?",
          chatTime: 1606333262326,
          chatId: idMaker(),
        },
        {
          me: "thanks...",
          chatTime: 1606333362326,
          chatId: idMaker(),
        },
      ],
    },
    {
      details: {
        personId: idMaker(),
        avatar: "./personPictures/love.jpg",
        personName: "Love",
        lastChatText: "not good ... :(",
        lastChatTime: 1606222261324,
        unreadChatCounter: 4,
      },
      chats: [
        {
          me: "Hello there...",
          chatTime: 1606222211324,
          chatId: idMaker(),
        },
        {
          me: "nock.. nock...",
          chatTime: 1606222221324,
          chatId: idMaker(),
        },
        {
          person: "Hi :) how are u... ?",
          chatTime: 1606222231324,
          chatId: idMaker(),
        },
        {
          me: "not good ... :(",
          chatTime: 1606222261324,
          chatId: idMaker(),
        },
      ],
    },
    {
      details: {
        personId: idMaker(),
        avatar: "./personPictures/nahid.jpg",
        personName: "Nahid",
        lastChatText: "dont ask ...",
        lastChatTime: 1606111165489,
        unreadChatCounter: 10,
      },
      chats: [
        {
          me: "Hello there...",
          chatTime: 1606111115489,
          chatId: idMaker(),
        },
        {
          me: "nock.. nock...",
          chatTime: 1606111125489,
          chatId: idMaker(),
        },
        {
          person: "Hi :) how are u... ?",
          chatTime: 1606111135489,
          chatId: idMaker(),
        },
        {
          me: "dont ask ...",
          chatTime: 1606111165489,
          chatId: idMaker(),
        },
      ],
    },
    {
      details: {
        personId: idMaker(),
        avatar: "./personPictures/sahar.jpg",
        personName: "Sahar",
        lastChatText: "uuuuh i dont know !",
        lastChatTime: 1506999998654,
        unreadChatCounter: 10,
      },
      chats: [
        {
          me: "Hello there...",
          chatTime: 1506999918654,
          chatId: idMaker(),
        },
        {
          me: "nock.. nock...",
          chatTime: 1506999928654,
          chatId: idMaker(),
        },
        {
          person: "Hi :) how are u... ?",
          chatTime: 1506999938654,
          chatId: idMaker(),
        },
        {
          me: "uuuuh i dont know !",
          chatTime: 1506999998654,
          chatId: idMaker(),
        },
      ],
    },
    {
      details: {
        personId: idMaker(),
        avatar: "./personPictures/sajad.jpg",
        personName: "Sajad",
        lastChatText: "yey im good!",
        lastChatTime: 1506888860258,
        unreadChatCounter: 10,
      },
      chats: [
        {
          me: "Hello there...",
          chatTime: 1506888810258,
          chatId: idMaker(),
        },
        {
          me: "nock.. nock...",
          chatTime: 1506888820258,
          chatId: idMaker(),
        },
        {
          person: "Hi :) how are u... ?",
          chatTime: 1506888830258,
          chatId: idMaker(),
        },
        {
          me: "yey im good!",
          chatTime: 1506888860258,
          chatId: idMaker(),
        },
      ],
    },
  ]);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const SelectedPersonId = selectedPerson
    ? selectedPerson.details.personId
    : "/*person not selected*/";

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

    setChatContent("");
    setPersons(copiedPersons);
    setSelectedPerson(newPerson);
  }

  function handleAddChat() {
    const copiedPersons = [...persons];
    const details = { ...selectedPerson.details };
    const chats = [...selectedPerson.chats];
    const index = copiedPersons.findIndex(
      (p) => p.details.personId === selectedPerson.details.personId
    );
    const newDate = Date.now();
    details.lastChatTime = newDate;
    details.lastChatText = chatContent;
    chats.push({
      me: chatContent,
      chatTime: newDate,
      chatId: idMaker(),
    });
    copiedPersons.splice(index, 1, { details, chats });
    setChatContent("");
    setPersons(handleSortPersons(copiedPersons));
    setSelectedPerson({ details, chats });
  }

  function handleDeleteChat(chatId) {
    const copiedPersons = [...persons];
    const details = { ...selectedPerson.details };
    const chats = selectedPerson.chats.filter((chat) => chat.chatId !== chatId);
    const personIndex = copiedPersons.findIndex(
      (p) => p.details.personId === selectedPerson.details.personId
    );

    if (chats.length) {
      const chatsLastIndex = chats.length - 1;
      details.lastChatTime = chats[chatsLastIndex].chatTime;

      chats[chatsLastIndex].me
        ? (details.lastChatText = chats[chatsLastIndex].me)
        : (details.lastChatText = chats[chatsLastIndex].person);

      const newPerson = { details, chats };
      copiedPersons.splice(personIndex, 1, newPerson);
      setSelectedPerson(newPerson);
    } else {
      copiedPersons.splice(personIndex, 1);
      handleCloseChat();
    }
    setChatContent("");
    setPersons(copiedPersons);
  }

  function handleEdit(chatId, personId) {}

  function handleForward(chatId) {}

  function handleSortPersons(copiedPersons) {
    copiedPersons.sort((a, b) => {
      return (
        new Date(b.details.lastChatTime) - new Date(a.details.lastChatTime)
      );
    });
    return copiedPersons;
  }

  function handleKeyPress(e) {
    if (chatContent && e.key === "Enter") {
      handleAddChat();
    }
  }

  function handleChangeInput(e) {
    setChatContent(e.target.value);
  }

  function handleCloseChat() {
    setChatContent("");
    setSelectedPerson(null);
  }

  return (
    <div className="app_app__3mk8F">
      <div className="app_head__1Nu6Y"></div>
      <div className="app_main__1NOZK">
        <div className="chat_layout__2YPVn">
          <div className="chat_side__2kvyI">
            <SearchBar />
            <PersonList
              SelectedPersonId={SelectedPersonId}
              persons={persons}
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
