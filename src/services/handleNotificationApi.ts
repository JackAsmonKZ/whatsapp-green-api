// services/api.ts
import axios from "axios";
import { BASE_URL } from "../api";

export const receiveNotificationApi = async (
  idInstance: string,
  apiTokenInstance: string
) => {
  const url = `${BASE_URL}/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении уведомления:", error);
    return null;
  }
};

export const deleteNotificationApi = async (
  idInstance: string,
  apiTokenInstance: string,
  receiptId: string
) => {
  const url = `${BASE_URL}/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`;

  try {
    await axios.delete(url);
  } catch (error) {
    console.error(`Ошибка при удалении уведомления ${receiptId}:`, error);
  }
};
