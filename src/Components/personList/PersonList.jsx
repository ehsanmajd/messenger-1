import React from "react";

import PersonListItem from "./PersonListItem";

import { handleGetTime } from "../../modules";

function PersonList({ persons, SelectedPersonId, onPersonClick }) {
  const list = persons.map((person) => {
    return (
      <PersonListItem
        key={person.details.personId}
        personId={person.details.personId}
        SelectedPersonId={SelectedPersonId}
        avatar={person.details.avatar}
        personName={person.details.personName}
        lastChatText={person.details.lastChatText}
        lastChatTime={handleGetTime(person.details.lastChatTime)}
        unreadChatCounter={person.details.unreadChatCounter}
        onPersonClick={() => onPersonClick(person.details.personId)}
      />
    );
  });
  return <div className="list_list__WxcsG">{list}</div>;
}

export default PersonList;
