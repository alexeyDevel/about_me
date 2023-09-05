function VideoPlayer({videoUrl}) {
  return (
    <div>
      <video width="640" height="360" controls>
        <source src={videoUrl} type="video/mp4" />
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
    </div>
  );
}

export default VideoPlayer;