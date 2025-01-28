import "./style.scss";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useTabIndexContext } from "../../../../hooks/useTabIndexContext";

interface ChatItemI {
  name: string;
  id: string;
}

export const ChatItem = ({ name, id }: ChatItemI) => {
  const { setTabIndex } = useTabIndexContext();

  const handleClick = () => {
    setTabIndex?.(id);
  };

  return (
    <div onClick={handleClick} className="chat-item">
      <div className="chat-item__container">
        <div className="chat-item__avatar">
          <AccountCircleOutlinedIcon className="chat-item__avatar" />
        </div>
        <div className="chat-item__wrapper">
          <div className="chat-item__name">{name}</div>
        </div>
      </div>
    </div>
  );
};
