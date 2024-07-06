import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./ChannelRow.css"
const ChannelRow = ({
  
  Channel,
  verified,
  subs,
  noOfVideos,
  description,
}) => {
  return (
    <div className="channelRow">
      <div className="channelRow-logo">
        <AccountCircleIcon class="icon" />
      </div>
      <div className="channelRow-text">
        <h4>
          {Channel} {verified && <CheckCircleIcon />}
        </h4>
        <p>
          {subs} subscriber <b>.</b>
          {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
