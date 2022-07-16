import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Avatar } from "@mui/material";
import "./Header.css";
import { useStateValue } from "../../../../StateProvider";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = ({ spotify }) => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="arrow">
        <ArrowBackIosNewIcon className="arrow__icon" />
        <ArrowForwardIosIcon className="arrow__icon" />
      </div>

      <div className="header__user">
        <Avatar
          src={user?.images[0]?.url}
          alt="user"
          sx={{ width: 30, height: 30 }}
        />
        <h4>{user?.display_name.substring(0,user?.display_name.indexOf(" "))}</h4>
        <ArrowDropDownIcon />
      </div>
    </div>
  );
};

export default Header;
