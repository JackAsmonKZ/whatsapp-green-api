import axios from "axios";
import { BASE_URL } from "../api";

export const sendMessageApi = async (
  chatId: string,
  message: string,
  idInstance: string,
  apiTokenInstance: string
) => {
  if (!chatId || chatId === "empty") return null;

  const url = `${BASE_URL}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;

  const payload = { chatId, message };

  try {
    const response = await axios.post(url, payload, {
      headers: { "Content-Type": "application/json" },
    });
    return response;
  } catch (error) {
    console.error("Ошибка при отправке сообщения:", error);

    throw error;
  }
};
