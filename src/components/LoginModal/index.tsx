import Modal from "react-modal";
import iconClose from "../../assets/images/iconclose.svg";

interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const customStyles = {
  overlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  content: {
    position: "relative",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    display: "flex",
    width: "100%",
    maxWidth: "720px",
    maxHeight: "720px",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
};

export function LoginModal({ isOpen, onRequestClose }: LoginModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <button
        type="button"
        onClick={onRequestClose}
        className="absolute right-[1.5rem] top-[1.5rem] border-0 background-transparent"
      >
        <img src={iconClose} alt="closeModal" className="h-[20px] w-[20px]" />
      </button>
      <form className="flex flex-col items-center justify-center m-auto">
        <h2 className="mb-[5rem] text-3xl">Sign Up</h2>
        <input
          placeholder="name"
          className="h-9 text-center bg-opacity-20 bg-rose-500 rounded-[1rem] w-[25rem]  focus:outline-rose-500"
        />
        <input
          type="email"
          placeholder="email"
          className="mt-[1rem] h-9 text-center bg-opacity-20 bg-rose-500 rounded-[1rem] w-[25rem]  focus:outline-rose-500"
        />
        <input
          type="password"
          placeholder="password"
          className="mt-[1rem] h-9 text-center bg-opacity-20 bg-rose-500 rounded-[1rem] w-[25rem]  focus:outline-rose-500"
        />
        <input
          type="password"
          placeholder="repeat password"
          className="mt-[1rem] h-9 text-center bg-opacity-20 bg-rose-500 rounded-[1rem] w-[25rem]  focus:outline-rose-500"
        />
        <button className="mt-[5rem] border-solid border-1 border-rose bg-pink-600 rounded-[1rem] w-[25rem] h-[2rem] hover:scale-105 ">
          Register
        </button>
      </form>
    </Modal>
  );
}
