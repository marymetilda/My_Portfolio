// import { Loader } from "@react-three/drei";
import { ReactNode, useState } from "react";
import Loader from "./Loader";

interface FlipingCardProps {
  backSideChildren?: ReactNode;
  title: string;
  description: string;
  projectUrl: string;
  liveText: string;
  githubLink?: string;
  githubText?: string;
}

function FlipingCard({
  backSideChildren,
  title,
  description,
  projectUrl,
  liveText,
  githubLink,
  githubText,
}: FlipingCardProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-transparent cursor-pointer group [perspective:1000px] w-fit h-fit">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-[15rem] h-[50vh] transition-all duration-1000 bg-linear-blue-white border-2 border-solid border-white-1 rounded-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 border-2 border-[#057777] w-full h-full rounded-xl bg-linear-blue overflow-hidden">
          {loading ? (
            <div className="fixed inset-0 z-50 h-full w-full flex items-center justify-center">
              <Loader />
            </div>
          ) : (
            <></>
          )}
          <iframe
            onLoad={() => {
              setLoading(false);
            }}
            scrolling="no"
            className="h-full w-full overflow-hidden"
            src={projectUrl}
          ></iframe>
        </div>
        <div className="absolute my-rotate-y-180 inset-0 w-full h-full bg-gray-100 overflow-hidden rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="h-full w-full bg-linear-blue-white p-6 flex flex-col items-center justify-between">
            <p className="text-xl font-bold text-transparent bg-clip-text bg-linear-dark-blue">
              {title}
            </p>
            <p className="text-lg font-normal text-[#ffffff]">{description}</p>
            <p className="text-lg font-medium text-transparent bg-clip-text bg-linear-dark-blue">
              <a href={projectUrl}>{liveText}</a>
            </p>
            {githubText && (
              <p className="text-x=lg font-medium text-transparent bg-clip-text bg-linear-dark-blue">
                <a href={githubLink}>{githubText}</a>
              </p>
            )}
          </div>
          {backSideChildren}
        </div>
      </div>
    </div>
  );
}

export default FlipingCard;
