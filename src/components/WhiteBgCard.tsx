import { ReactNode } from "react";

interface WhiteBgCardProps {
  children: ReactNode;
}

function WhiteBgCard({ children }: WhiteBgCardProps) {
  return (
    <div className="group relative z-20 sm:w-[40vw] md:w-[25vw] w-[90vw] opacity-80 h-full p-4 lg:p-6 xl:p-8 flex flex-col justify-start bg-gray-700 md:shadow-[10px_10px_24px_7px_#3182ce] rounded-2xl">
      {children}
    </div>
  );
}

export default WhiteBgCard;
