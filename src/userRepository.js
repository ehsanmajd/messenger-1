class repository {
  constructor() {
    this.users = [
      {
        userId: Math.random(),
        avatar: "./userPics/kitty.jpg",
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
        userId: Math.random(),
        avatar: "./userPics/love.jpg",
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
        userId: Math.random(),
        avatar: "./userPics/nahid.jpg",
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
        userId: Math.random(),
        avatar: "./userPics/parvaneh.jpg",
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
        userId: Math.random(),
        avatar: "./userPics/sahar.jpg",
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
        userId: Math.random(),
        avatar: "./userPics/sajad.jpg",
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
        userId: Math.random(),
        avatar: "./userPics/soheila.jpg",
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
    ];
  }
}

export const userRepository = new repository();
