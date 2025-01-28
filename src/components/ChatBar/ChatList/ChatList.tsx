import { useHandleAddChat } from "../../../hooks/useHandleAddChat";
import { ChatItem } from "./ChatItem/ChatItem";
import AddIcon from "@mui/icons-material/Add";

import "./style.scss";

export const ChatList = () => {
  const { handleAddChat, chatData } = useHandleAddChat();

  const chatDataArray = Object.values(chatData);

  return (
    <div className="chat-list">
      {chatDataArray.map(({ name, id }) => (
        <ChatItem key={id} name={name} id={id} />
      ))}
      <button onClick={handleAddChat} className="chat-list__add-btn">
        <AddIcon />
        <span>Создать новый чат</span>
      </button>
    </div>
  );
};
