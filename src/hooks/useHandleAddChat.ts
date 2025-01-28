import { useState } from "react";
import { useTabIndexContext } from "./useTabIndexContext";
import { useChatMessagesContext } from "./useChatMessagesContext";
import { useApiDataContext } from "./useApiDataContext";
import { getChatHistory } from "../services/getChatHistoryApi";

interface ChatDataI {
  name: string;
  message: string;
  id: string;
}

const NUMBER_OF_MESSAGES = 30;

export const useHandleAddChat = () => {
  const { setTabIndex } = useTabIndexContext();
  const { setChatMessages } = useChatMessagesContext();
  const [chatData, setChatData] = useState<Record<string, ChatDataI>>({});
  const { idInstance, apiTokenInstance } = useApiDataContext();

  const addChatToState = (name: string, message: string, id: string) => {
    setChatData((prev) => ({
      ...prev,
      [id]: { name, message, id },
    }));
  };

  const handleAddChat = async () => {
    const phoneNumber = prompt(
      "Введите номер телефона в формате 7xxxxxxxxxx"
    )?.trim();
    if (!phoneNumber) return;

    const newChatId = `${phoneNumber}@c.us`;

    if (chatData[newChatId]) {
      alert("Чат с этим номером уже существует.");
      return;
    }

    try {
      const chatsData = await getChatHistory(
        newChatId,
        NUMBER_OF_MESSAGES,
        idInstance,
        apiTokenInstance
      );

      if (chatsData.length === 0) {
        addChatToState(phoneNumber, "Нет сообщений", newChatId);
      } else {
        const firstMessage = chatsData[0];
        addChatToState(
          firstMessage.senderName ||
            firstMessage.senderContactName ||
            phoneNumber,
          firstMessage.textMessage,
          firstMessage.chatId
        );
        setChatMessages?.((prev) => [...prev, ...chatsData]);
      }

      setTabIndex?.(newChatId);
    } catch (error) {
      console.error("Не удалось добавить чат:", error);
      alert("Произошла ошибка при добавлении чата. Попробуйте снова.");
    }
  };

  return { handleAddChat, chatData, setChatData };
};
