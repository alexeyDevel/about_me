function VideoPlayer({ videoUrl }) {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
