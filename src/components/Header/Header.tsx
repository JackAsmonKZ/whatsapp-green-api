import "./style.scss";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import HistoryIcon from "@mui/icons-material/History";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FaceTwoToneIcon from "@mui/icons-material/FaceTwoTone";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <ul className="header__list">
          <li className="header__item">
            <ChatOutlinedIcon className="header__icon" fontSize="medium" />
          </li>
          <li className="header__item">
            <HistoryIcon className="header__icon" fontSize="medium" />
          </li>
          <li className="header__item">
            <MapsUgcOutlinedIcon className="header__icon" fontSize="medium" />
          </li>
          <li className="header__item">
            <Diversity3OutlinedIcon
              className="header__icon"
              fontSize="medium"
            />
          </li>
        </ul>
      </div>
      <div className="header__wrapper">
        <ul className="header__list">
          <li className="header__item">
            <SettingsOutlinedIcon className="header__icon" fontSize="medium" />
          </li>
          <li className="header__item">
            <FaceTwoToneIcon className="header__icon" fontSize="medium" />
          </li>
        </ul>
      </div>
    </div>
  );
};
