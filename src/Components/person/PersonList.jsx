import React from "react";

import PersonListItem from "./PersonListItem";

function PersonList({ personList, onPersonClick }) {
  const list = personList.map((person) => {
    return (
      <PersonListItem
        key={person.personId}
        avatar={person.avatar}
        personName={person.personName}
        lastChatText={person.lastChatText}
        lastChatTime={person.lastChatTime}
        // lastChatDate={selectedPerson.lastChatDate}
        unreadChatCounter={person.unreadChatCounter}
        onPersonClick={() => onPersonClick(person.personId)}
      />
    );
  });
  return (
    <>
      <div className="list_list__WxcsG">{list}</div>
    </>
  );
}

export default PersonList;
