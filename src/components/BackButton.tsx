import { IoArrowBackOutline } from "react-icons/io5";

interface BackButtonProps {
  handleBackClick: () => void;
}

function BackButton({ handleBackClick }: BackButtonProps) {
  return (
    <button
      onClick={handleBackClick}
      className="bg-white p-1 md:p-2 w-fit h-fit rounded-full hover:opacity-10"
    >
      <a href="/">
        <IoArrowBackOutline className="w-3 md:w-5 h-3 md:h-5" />
      </a>
    </button>
  );
}

export default BackButton;
