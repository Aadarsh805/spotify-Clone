import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Avatar } from "@mui/material";
import "./Header.css";
import { useStateValue } from "../../../../StateProvider";
const Header = ({ spotify }) => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="arrow">
        <ArrowBackIosNewIcon className="arrow__icon" />
        <ArrowForwardIosIcon className="arrow__icon" />
      </div>

      <div className="header__user">
        <Avatar src={user?.images[0]?.url} alt="user" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
