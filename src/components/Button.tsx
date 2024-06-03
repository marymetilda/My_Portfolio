import RightArrow from "../assets/RightArrow.png";

interface ButtonProps {
  buttonLabel: string;
  handleButtonClick: () => void;
}

function Button({ buttonLabel, handleButtonClick }: ButtonProps) {
  return (
    <button
      onClick={handleButtonClick}
      className="flex gap-4 items-center justify-center hover:cursor-pointer"
    >
      <div className="relative flex items-center justify-center text-[5vw] md:text-[2vw] font-medium hover:scale-125">
        <h1 className="font-bold text-center text-transparent z-20 bg-clip-text bg-indigo-600 blur-md animate-appear">
          {buttonLabel}
        </h1>
        <h1 className="absolute inset-0 text-transparent z-20 bg-clip-text bg-slate-600 blur-sm animate-appear">
          {buttonLabel}
        </h1>
        <h1 className="absolute inset-0 text-transparent z-20 bg-clip-text bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-500 via-teal-500 to-slate-500 animate-appear">
          {buttonLabel}
        </h1>
      </div>
      <img
        className="w-6 md:w-10 h-6 md:h-10"
        src={RightArrow}
        alt="right arrow"
      />
    </button>
  );
}

export default Button;
