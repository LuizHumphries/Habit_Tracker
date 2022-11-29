import { useState, useContext, FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, useAuth } from "../contexts/AuthContext";

interface HomeProps {
  onOpenSignupModal: () => void;
}

export function Home({ onOpenSignupModal }: HomeProps) {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleUserlogin(event: FormEvent) {
    event.preventDefault();
    try {
      await signIn(email, password);
      navigate("/user");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <main
      id="page-login"
      className="	h-screen flex flex-col items-center justify-center bg-gray-900"
    >
      <div className="p-12	border-gradient-br-red-red-slate border-transparent border-solid border-4 rounded-[1rem]">
        <h1 className="text-rose-800 text-[72px] text-center">
          Habbit <span className="text-rose-400">Tracker</span>
        </h1>
        <p className="text-[28px] text-center text-white">
          mantenha o controle de seus novos habitos
        </p>
        <div>
          <div className="inline-grid items-center w-full justify-center h-full ">
            <input
              name="myEmail"
              placeholder="Enter login"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" mt-5 w-[25rem] h-10 text-center bg-rose-100 rounded-2xl outline-rose-600 text-sm block px-[20px] py-[20px] "
            />
            <input
              name="myPassword"
              placeholder="Enter password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" mt-5 w-[25rem] h-10 text-center bg-rose-100 rounded-2xl outline-rose-600 text-sm block px-[20px] py-[20px] "
            />
          </div>
          <div className="flex w-full justify-center items-center gap-[3rem] mt-10">
            <button
              onClick={handleUserlogin}
              className=" w-[11rem] p-2 bg-rose-500 rounded-[1rem] hover:bg-rose-700 transition duration-150 hover:scale-105 text-[18px] flex justify-center gap-2 "
            >
              Login
            </button>

            <button
              onClick={onOpenSignupModal}
              className="w-[11rem] p-2 bg-rose-300 rounded-[1rem] hover:bg-rose-700 transition duration-150 hover:scale-105 text-[18px] flex justify-center gap-2 "
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
