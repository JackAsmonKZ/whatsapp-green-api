import { useEffect, useState } from "react";
import { WebhookResponse } from "../types";
import axios from "axios";

export const useReceiveNotifications = () => {
  const [newNotification, setNewNotification] = useState<boolean>(false);
  useEffect(() => {
    const fetchNotifications = async () => {
      while (true) {
        try {
          const response = await fetch(
            `https://7103.api.greenapi.com/waInstance7103181830/receiveNotification/122da018f0c9410c99edecf345d181985eb4f7223d1f4831ae`
          );
          const data: WebhookResponse = await response.json();

          if (data && data.receiptId) {
            setNewNotification(true);
            const url = `https://7103.api.greenapi.com/waInstance7103181830/deleteNotification/122da018f0c9410c99edecf345d181985eb4f7223d1f4831ae/${data.receiptId}`;

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
