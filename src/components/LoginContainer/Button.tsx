import { FormEvent } from "react";

type ButtonProps = {
  handleUserlogin?: (event: FormEvent<Element>) => void;
  onOpenSignupModal?: () => void;
  color: string;
  buttonText: string;
};

export function Button({
  handleUserlogin,
  onOpenSignupModal,
  color,
  buttonText,
}: ButtonProps) {
  return (
    <button
      onClick={onOpenSignupModal || handleUserlogin}
      className={`w-[11rem] p-2 ${color} rounded-[1rem] hover:bg-rose-700 transition duration-150 hover:scale-105 text-[18px] flex justify-center gap-2 `}
    >
      {buttonText}
    </button>
  );
}
