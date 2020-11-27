import React from "react";

import PersonListItem from "./PersonListItem";

function PersonList({ personList, onPersonClick }) {
  const list = personList.map((selectedPerson) => {
    return (
      <PersonListItem
        key={selectedPerson.personId}
        personId={selectedPerson.personId}
        avatar={selectedPerson.avatar}
        personName={selectedPerson.personName}
        lastChatText={selectedPerson.lastChatText}
        lastChatTime={selectedPerson.lastChatTime}
        // lastChatDate={selectedPerson.lastChatDate}
        unreadChatCounter={selectedPerson.unreadChatCounter}
        onPersonClick={onPersonClick}
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
