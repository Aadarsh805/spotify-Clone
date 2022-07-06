import React from "react";
import { useStateValue } from "../../../StateProvider";
import "./Body.css";
import Header from "./Header/Header";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from "./SongRow/SongRow";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useStateValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>New</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks?.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
