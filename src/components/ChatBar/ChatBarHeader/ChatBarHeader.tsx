import "./style.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const ChatBarHeader = () => {
  return (
    <div className="chatbar__header">
      <h1 className="chatbar__title">Чаты</h1>
      <div className="chatbar__icons">
        <MoreHorizIcon
          className="chatbar__icon-dots"
          color="success"
          fontSize="medium"
        />
      </div>
    </div>
  );
};
