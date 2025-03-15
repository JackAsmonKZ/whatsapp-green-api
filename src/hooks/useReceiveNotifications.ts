import { useEffect, useState } from "react";
import { WebhookResponse } from "../types";
import axios from "axios";
import { useAuthorization } from "./useAuthorization";

export const useReceiveNotifications = () => {
  const [newNotification, setNewNotification] = useState<boolean>(false);
  const { idInstance, apiTokenInstance } = useAuthorization();
  useEffect(() => {
    const fetchNotifications = async () => {
      while (true) {
        try {
          const response = await fetch(
            `https://7103.api.greenapi.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`
          );
          const data: WebhookResponse = await response.json();

          if (data && data.receiptId) {
            setNewNotification(true);
            const url = `https://7103.api.greenapi.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${data.receiptId}`;

            axios
              .delete(url, { headers: {}, data: {} })
              .then(() => setNewNotification(false));
          }
        } catch (error) {
          console.error("Ошибка при получении уведомлений:", error);
        }
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }
    };

    fetchNotifications();
  }, []);
  return { newNotification, setNewNotification };
};
