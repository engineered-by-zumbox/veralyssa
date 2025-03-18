const VideoPlayer = () => {
  return (
    <div className="w-full h-[300px] md:h-[80vh] lg:h-screen">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/CXjAqfLV92A?si=v2_vjTeBVytTN0hr"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
