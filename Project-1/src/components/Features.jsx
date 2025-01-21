import React, { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={`${className} transition-transform duration-300`}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description, isComingSoon }) => {
  return (
    <div className="relative h-full w-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 flex h-full w-full flex-col justify-between p-5 text-blue-50">
        <h1 className="bento-title special-font">{title}</h1>
        {description && (
          <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
        )}
      </div>
      {isComingSoon && (
        <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs">
          Coming Soon
        </span>
      )}
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            similique excepturi reprehenderit ab ad odit eos illo exercitationem
            dolorem. Ut?
          </p>
        </div>

        {/* Main Feature */}
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>t
              </>
            }
            description="A cross-platform metagame app, turning your activities across web2 games into rewarding adventures."
            isComingSoon={true}
          />
        </BentoTilt>

        {/* Grid Layout */}
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          {/* First Row */}
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 h-full">
            <BentoCard
              src="videos/feature-2.mp4"
              title={<>zigma</>}
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ml-32 md:col-span-1 md:ml-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            />
          </BentoTilt>

          {/* Second Row */}
          <BentoTilt className="bento-tilt_1 mr-14 md:col-span-1 md:mr-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>re
                </>
              }
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <div className="flex h-full w-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font text-black">
                M<b>o</b>re Co<b>m</b>ing S<b>o</b>on
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>

          {/* Third Row */}
          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="h-full w-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
