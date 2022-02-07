import React from "react";
import video from "./video.mp4";
import style from "./video.module.css";

const Video = () => {
  return (
    <div className="flex flex-col items-center border-b border-ebony relative -mt-4">
      <div className={style.spinner}></div>
      <video
        src={video}
        controls
        loop
        autoPlay
        muted
        className={style.video}
      ></video>
      <p className="flex flex-row items-center">
        <button className="py-2 px-3 hover:bg-ebony">
          <svg
            viewBox="0 0 24 24"
            className="fill-current text-chalk w-7 h-7 inline-block mr-2 -mt-1"
          >
            <g>
              <path d="M12,7.09593l1.0993,2.27441.46705.96631,1.06342.145,2.55038.34778-1.77908,1.74122-.74531.72945.17145,1.02869.43792,2.62751-2.33487-1.2268L12,15.24073l-.93026.48878-2.33487,1.2268.43792-2.62751.17145-1.02869-.74531-.72945L6.81986,10.82944l2.55037-.34778,1.06342-.145.46705-.96631L12,7.09593M12,2.5l-2.9,6-6.6.9L7.2,14,6.1,20.6,12,17.5l5.9,3.1L16.8,14l4.7-4.6-6.6-.9L12,2.5Z"></path>
            </g>
          </svg>
          <span className="inline-block pt-1 font-semibold uppercase">
            Follow
          </span>
        </button>
      </p>
    </div>
  );
};

export default Video;
