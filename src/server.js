import { userRepository } from "./userRepository";

export function getUser(userId) {
  const user = userRepository.users.find((user) => user.userId === userId);
  if (user.unreadChatCounter) {
    user.unreadChatCounter = "";
  }
  return user;
}

export function getList() {
  return userRepository.users.map((user) => ({
    avatar: user.avatar,
    alt: user.alt,
    personName: user.personName,
    lastChatText: user.lastChatText,
    lastChatTime: user.lastChatTime,
    unreadChatCounter: user.unreadChatCounter,
    userId: user.userId,
  }));
}

export function chatUpdate(userId, chatContent) {
  const user = getUser(userId);
  const chatTime = getTime();
  const chatDate = getDate();
  user.lastChatTime = chatTime;
  user.lastChatText = chatContent;
  user.chats.push({
    me: chatContent,
    chatTime: chatTime,
    chatDate: chatDate,
    chatId: Math.random(),
  });
}

export function getDate() {
  const dateNow = new Date(Date.now());
  const getMonth = dateNow.getMonth();
  const getDay = dateNow.getDay();
  return `${getMonth + 1}/${getDay + 22}`;
}
export function getTime() {
  const dateNow = new Date(Date.now());
  const getMinutes = dateNow.getMinutes();
  const getHours = dateNow.getHours();
  return `${getHours}:${getMinutes}`;
}
