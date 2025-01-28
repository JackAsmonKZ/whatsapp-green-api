import axios, { AxiosResponse } from "axios";
import { ChatMessage } from "../types";
import { BASE_URL } from "../api";

export const getChatHistory = async (
  chatId: string,
  count: number,
  idInstance: string,
  apiTokenInstance: string
): Promise<ChatMessage[]> => {
  const url = `${BASE_URL}/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`;

  const payload = { chatId, count };
  const headers = { "Content-Type": "application/json" };

  try {
    const response: AxiosResponse<ChatMessage[]> = await axios.post(
      url,
      payload,
      { headers }
    );
    return response.data || [];
  } catch (error) {
    console.error("Ошибка при получении истории чата:", error);
    throw error;
  }
};
