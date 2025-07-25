import { FaPhoneAlt } from "react-icons/fa"; // Import the phone icon
import { Link } from "react-router-dom";

const VideoPlayHeader = () => {
  return (
    <header className="relative w-full h-[400px] sm:h-[480px]  md:h-[600px] lg:h-[720px] top-20">
      <video
        autoPlay
        loop
        playsInline
        muted
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source
          src="https://dl.dropboxusercontent.com/scl/fi/wsz3knvdrewq3n08nzxlr/blisshospital.mp4?rlkey=67bycg7e83h1xfictg0ivx9wt&st=1zggd2d2"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-1/2 right-12 transform -translate-y-1/2 translate-x-1/2 rotate-90 flex justify-around items-center">
        <Link
          to="tel:+919872334233"
          className="flex items-center text-white space-x-2"
        >
          <div className="icon text-red-700 hover:text-pink-700  rounded-full p-2 shadow-lg flex justify-center items-center">
            <FaPhoneAlt size={30} />
          </div>
          <div className="call lg:text-2xl sm:text-xl md:text-xl text-black hover:text-pink-700 font-semibold text-center flex flex-col gap-1 items-center">
            <span className="font-bold px-1 py-1 rounded-sm bg-white">
              {"+91 9872334233"}
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default VideoPlayHeader;
