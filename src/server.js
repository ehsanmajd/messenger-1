export const users = [
  {
    avatar: "./05-4K.jpg",
    alt: "user1",
    username: "user1",
    lastChatText: "lastChatText",
    lastChatTime: Date.now().toString(),
    unreadChatCounter: 10,
    userId: 1,
    chats: [
      { text: "user1064532", chatId: 31 },
      { text: "user1164533", chatId: 32 },
      { text: "user1264534", chatId: 33 },
      { text: "user1364535", chatId: 34 },
      { text: "user1464536", chatId: 35 },
      { text: "user1564537", chatId: 36 },
      { text: "user1664538", chatId: 37 },
      { text: "user1764539", chatId: 38 },
      { text: "user1864540", chatId: 39 },
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
    chats: [{ text: "user3", chatId: 2 }],
  },
  {
    avatar: "./05-4K.jpg",
    alt: "user2",
    username: "user2",
    lastChatText: "lastChatText",
    lastChatTime: Date.now().toString(),
    unreadChatCounter: 6,
    userId: 2,
    chats: [{ text: "user2", chatId: 1 }],
  },
];

export function getUser(userId) {
  return users.find((user) => user.userId === userId);
}

export function getList() {
  return users.map((user) => ({
    avatar: user.avatar,
    alt: user.alt,
    username: user.username,
    lastChatText: user.lastChatText,
    lastChatTime: user.lastChatTime,
    unreadChatCounter: user.unreadChatCounter,
    userId: user.userId,
  }));
}

export function chatUpdate(userId, chatContent) {
  console.log(chatContent);
  const user = getUser(userId);
  user.chats.push({ text: chatContent, chatId: Math.random() });
  console.log(user);
}
