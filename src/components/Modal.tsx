import { useState } from "react";

type ModalProps = {
  totalAttempts: number;
  reset: () => void;
};

const Modal = ({ totalAttempts, reset }: ModalProps) => {
  const [animation, setAnimation] = useState("animate-fade-in");

  const onClick = () => {
    setAnimation("animate-fade-out");
    setTimeout(reset, 300);
  };

  return (
    <div
      className={`absolute z-10 bg-slate-900/70 flex items-center justify-center w-full h-full`}
      aria-hidden="true"
    >
      <article
        onAnimationEnd={() => setAnimation("")}
        className={`${animation} transition-all ease-in-out p-5 flex flex-col min-w-[300px] bg-slate-800 text-white text-center shadow-2xl border border-slate-600 rounded-md select-none`}
      >
        <h2 className="text-2xl font-bold mb-4">Cool Beans! 🎉</h2>
        <p className="text-slate-400 underline underline-offset-4 mb-8">
          You did it in {totalAttempts} attempts this time.
        </p>
        <button
          className="px-4 py-2 rounded border border-slate-600 bg-slate-600 uppercase"
          onClick={onClick}
        >
          Let's go again!
        </button>
      </article>
    </div>
  );
};

export default Modal;
