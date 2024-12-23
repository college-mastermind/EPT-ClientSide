import Image from "next/image";
import React from "react";
import ConsultingBanner from "./ConsultingBanner";

const StrangerAndVideo = () => {
  return (
    <>
      <div className="px-4 py-8 md:px-28 md:py-12">
        <div className="relative w-full overflow-hidden flex flex-col items-center md:flex-row md:justify-between ">
          {/* Background Vector */}
          <Image
            src="/Grade-Vector.png"
            alt=""
            className="absolute h-screen w-full z-10 top-12"
            width={500}
            height={500}
          />

          {/* Left Content */}
          <div className="text-center md:text-left max-w-lg">
            <h1 className="text-4xl font-extrabold bg-gradient-to-b from-[#BD5AFC] to-[#7C35A9] bg-clip-text text-transparent mb-4">
              Stranger Danger!
            </h1>

            <h2 className="text-2xl font-medium text-gray-800 mb-4">
              We help your child change their relationship with their most{" "}
              <span
                className="bg-gradient-to-b from-[#BD5AFC] to-[#7C35A9] bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-nosifer)" }}
              >
                DREADED
              </span>{" "}
              subject.
            </h2>
            <p className="text-2xl text-[#6A497F]">
              But don’t just trust your child to any internet "stranger!"{" "}
              <span className="font-bold">Watch our video</span> to get to know
              us first.
            </p>
          </div>

          {/* Right Content (Video) */}
          <div className="relative px-3 mt-8 md:mt-0 w-[322px] md:w-[480px] overflow-hidden  md:px-0">
            <Image
              src="/Video-Ring.png"
              alt="Video Ring Background"
              className="rounded-xl z-20"
              width={500}
              height={420}
            />
            <video
              src=""
              controls
              className="absolute top-1 left-4 md:left-1 z-50 w-[290px] h-[230px] md:w-[471px] md:h-[374px] rounded-xl md:rounded-3xl object-cover"
            ></video>
          </div>
        </div>

        <ConsultingBanner />
      </div>
    </>
  );
};

export default StrangerAndVideo;
