import React from "react";
import "./VideoRow.css";

const VideoRow = ({
  image,
  title,
  channel,
  views,
  subs,
  timestamp,
  description,
}) => {
  return (
    <div className="videoRow">
      <img src={image} alt="" className="image" />
      <div className="text">
        <h3>{title}</h3>
        <p className="headline">
          {channel} . <span className="subs">{subs}</span>  . {views} views . {timestamp}{" "}
        </p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
