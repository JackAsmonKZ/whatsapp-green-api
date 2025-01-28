import { useEffect } from "react";

import { useChatMessagesContext } from "./useChatMessagesContext";
import { useApiDataContext } from "./useApiDataContext";
import {
  deleteNotificationApi,
  receiveNotificationApi,
} from "../services/handleNotificationApi";

export const useNotificationPolling = () => {
  const { setChatMessages } = useChatMessagesContext();
  const { idInstance, apiTokenInstance } = useApiDataContext();

  useEffect(() => {
    const interval = setInterval(async () => {
      const notification = await receiveNotificationApi(
        idInstance,
        apiTokenInstance
      );

      if (notification && notification.receiptId) {
        const { receiptId, body } = notification;

        if (
          body &&
          body.messageData &&
          body.messageData?.textMessageData?.textMessage
        ) {
          const chatId = body.senderData?.chatId || "unknown";
          const textMessage = body.messageData.textMessageData.textMessage;
          setChatMessages?.((prev) => [
            {
              chatId,
              idMessage: receiptId,
              textMessage,
              timestamp: Date.now(),
              type: "incoming",
              typeMessage: "textMessage",
              statusMessage: "read",
              sendByApi: false,
              isDeleted: false,
              isEdited: false,
              deletedMessageId: "",
              editedMessageId: "",
              senderId: body.senderData?.senderId || "",
              senderName: body.senderData?.senderName || "",
              senderContactName: body.senderData?.senderContactName || "",
            },
            ...prev,
          ]);
        }
        await deleteNotificationApi(idInstance, apiTokenInstance, receiptId);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [idInstance, apiTokenInstance, setChatMessages]);
};
