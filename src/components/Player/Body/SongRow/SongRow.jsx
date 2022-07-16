import React from "react";
import "./SongRow.css";

const SongRow = ({ track }) => {
  console.log(track);
  return (
    <div className="songRow">
      <img
        className="songRow__album"
        src={track.album.images[0].url}
        alt="album"
      />
      <div className="songRow__info">
        <div className="artist">
          <h1>{track.name}</h1>
          <span>{track.artists.map((artist) => artist.name).join(", ")}</span>
        </div>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
        <span>{new Date(track.duration_ms).toISOString().slice(14, 19)}</span>
      </div>
    </div>
  );
};

export default SongRow;
