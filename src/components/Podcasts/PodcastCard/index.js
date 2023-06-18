import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function PodcastCard({ id, title, displayImage }) {
  return (
    <Link to={`/podcast/${id}`}>
      <div className="podcastCard">
        <img className="displayImagePodcast" src={displayImage} />
        <p className="titlePodcast">{title}</p>
      </div>
    </Link>
  );
}

export default PodcastCard;


