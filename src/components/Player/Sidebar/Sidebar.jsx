import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useStateValue } from "../../../StateProvider";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useStateValue();
  console.log(playlists)
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com//wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />

      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

      <p className="sidebar__title">playlists</p>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;
