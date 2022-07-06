import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Grid, Slider } from "@mui/material";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img src="https://imgs.search.brave.com/YNFPMzh_I5JWsCk9_DX28Bs4IlLd8KRbhiS5GEvMGAk/rs:fit:1200:881:1/g:ce/aHR0cHM6Ly93d3cu/cGx1Z2dlZGluLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wMS9IYXJyeV9T/dHlsZXNfX1dhdGVy/bWVsb25fU3VnYXJf/X0xhcmdlLTE1MzZ4/ODgxLmpwZw" alt="" />
        <div className="footer__songInfo">
          <h4>Watermelon sugar</h4>
          <p>Harry Styles</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__icon" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon className="footer__icon" fontSize="large" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__icon" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
