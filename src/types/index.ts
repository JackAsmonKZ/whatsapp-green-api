export type ChatMessage = {
  chatId: string;
  deletedMessageId: string;
  editedMessageId: string;
  idMessage: string;
  isDeleted: boolean;
  isEdited: boolean;
  sendByApi: boolean;
  statusMessage: "read" | "unread" | "failed";
  textMessage: string;
  timestamp: number;
  type: "incoming" | "outgoing";
  typeMessage: "textMessage" | "imageMessage" | "videoMessage" | "fileMessage";
  senderId: string;
  senderName: string;
  senderContactName: string;
};

export interface TabIndexContextI {
  tabIndex: string;
  setTabIndex: React.Dispatch<React.SetStateAction<string>> | null;
}

export interface ApiDataContextI {
  idInstance: string;
  apiTokenInstance: string;
}

export interface ChatMessagesContexI {
  chatMessages: ChatMessage[];
  setChatMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>> | null;
}

export interface WebhookResponse {
  receiptId: number;
  body: {
    typeWebhook: string;
    instanceData: {
      idInstance: number;
      wid: string;
      typeInstance: string;
    };
    timestamp: number;
    idMessage: string;
    senderData: {
      chatId: string;
      chatName: string;
      sender: string;
      senderName: string;
      senderContactName: string;
    };
    messageData: {
      typeMessage: string;
      textMessageData: {
        textMessage: string;
      };
    };
  };
}
