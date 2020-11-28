import React from "react";

import PersonListItem from "./PersonListItem";

import { handleGetTime } from "../../modules";

function PersonList({ personList, SelectedPersonId, onPersonClick }) {
  const list = personList.map((person) => {
    return (
      <PersonListItem
        key={person.personId}
        personId={person.personId}
        SelectedPersonId={SelectedPersonId}
        avatar={person.avatar}
        personName={person.personName}
        lastChatText={person.lastChatText}
        lastChatTime={handleGetTime(person.lastChatTime)}
        unreadChatCounter={person.unreadChatCounter}
        onPersonClick={() => onPersonClick(person.personId)}
      />
    );
  });
  return <div className="list_list__WxcsG">{list}</div>;
}

export default PersonList;
