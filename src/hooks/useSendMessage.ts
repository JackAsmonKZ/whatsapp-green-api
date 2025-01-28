import { useChatMessagesContext } from "./useChatMessagesContext";
import { useApiDataContext } from "./useApiDataContext";
import { sendMessageApi } from "../services/sendMessageApi";
import { ChatMessage } from "../types";

export const useSendMessage = () => {
  const { setChatMessages } = useChatMessagesContext();
  const { idInstance, apiTokenInstance } = useApiDataContext();

  const sendMessage = async (chatId: string | null, message: string) => {
    if (!chatId || chatId === "empty") {
      console.warn("Не указан chatId или он пустой.");
      return;
    }

    try {
      const response = await sendMessageApi(
        chatId,
        message,
        idInstance,
        apiTokenInstance
      );

      if (response?.data) {
        const newMessage: ChatMessage = {
          chatId,
          deletedMessageId: "",
          editedMessageId: "",
          idMessage: response.data.idMessage,
          isDeleted: false,
          isEdited: false,
          sendByApi: true,
          statusMessage: "unread",
          textMessage: message,
          timestamp: Date.now(),
          type: "outgoing",
          typeMessage: "textMessage",
          senderId: "",
          senderName: "",
          senderContactName: "",
        };

        setChatMessages?.((prev) => [newMessage, ...prev]);
      }
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
    }
  };

  return { sendMessage };
};
