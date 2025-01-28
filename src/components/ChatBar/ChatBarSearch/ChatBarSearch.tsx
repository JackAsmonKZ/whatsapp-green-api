import "./style.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export const ChatBarSearch = () => {
  return (
    <div className="chat-bar-search">
      <div className="chat-bar-search__input-wrapper">
        <input
          type="text"
          className="chat-bar-search__input"
          placeholder="Поиск"
        />
        <SearchOutlinedIcon className="chat-bar-search__icon-search" />
      </div>
    </div>
  );
};
