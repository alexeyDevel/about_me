import React from "react";
import styles from "./VideoPlayer.module.scss"; // Импортируйте стили

function VideoPlayer({ videoUrl }) {
  return (
      <iframe className={styles.video}
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
  );
}

export default VideoPlayer;
