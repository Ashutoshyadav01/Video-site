import React from "react";
import "./Video.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Video = ({ image, title, channel, views, timestamp }) => {
  return (
    <div className="videoCard">
      <img src={image} alt="" style={{ width: "270px" }} />
      <div className="video-info">
        <div>
          <AccountCircleIcon className="header-icon" />
        </div>
        <div className="video-text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} <b>.</b> {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
