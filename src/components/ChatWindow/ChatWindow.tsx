import "./style.scss";

import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import { useTabIndexContext } from "../../hooks/useTabIndexContext";
import { useChatMessagesContext } from "../../hooks/useChatMessagesContext";
import { useSendMessage } from "../../hooks/useSendMessage";
import { useNotificationPolling } from "../../hooks/useNotificationPolling";
import { ChatItem } from "./ChatItem/ChatItem";
import React from "react";

export const ChatWindow = React.memo(() => {
  const { tabIndex } = useTabIndexContext();
  const { chatMessages } = useChatMessagesContext();
  const [inputData, setInputData] = useState("");
  const { sendMessage } = useSendMessage();
  const [chatSenderName, setChatSenderName] =
    useState<string>("Имя пользователя");
  useNotificationPolling();

  const filteredMessages = chatMessages.filter(
    (message) => message.chatId === tabIndex
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputData.trim()) {
      await sendMessage(tabIndex, inputData);
      setInputData("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (tabIndex !== "empty" && filteredMessages.length > 0) {
      for (let message of filteredMessages) {
        if (message.senderName || message.senderContactName) {
          setChatSenderName(message.senderName || message.senderContactName);
          break;
        }
      }
    } else {
      setChatSenderName("Имя пользователя");
    }
  }, [tabIndex, filteredMessages]);

  return (
    <div className="chat-window">
      <header className="chat-window__header">{chatSenderName}</header>
      <div className="chat-window__bg-image"></div>
      <div className="chat-window__bg-background"></div>
      <div className="chat-window__content">
        {filteredMessages.map((message) => (
          <ChatItem
            key={message.idMessage}
            type={message.type}
            message={message.textMessage}
          />
        ))}
      </div>
      <div className="chat-window__footer">
        <AddIcon fontSize="medium" />
        <input
          className="chat-window__input"
          placeholder="Введите сообщение"
          type="text"
          value={inputData}
          onChange={handleInputChange}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <SendIcon
          fontSize="medium"
          style={{ cursor: "pointer" }}
          onClick={handleSendMessage}
        />
      </div>
    </div>
  );
});
