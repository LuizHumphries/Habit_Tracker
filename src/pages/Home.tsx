import { AiOutlineGoogle } from "react-icons/ai";

export function Home() {
  return (
    <main
      id="page-login"
      className="		
		h-screen
		flex
		flex-col
		items-center
		justify-center
		bg-gray-900
		"
    >
      <div
        className="
			p-11			
			border-gradient-br-red-red-slate 
			border-transparent
			border-solid 
			border-4 
			rounded-[1rem]			
			"
      >
        <h1 className="text-rose-800 text-[72px] text-center">
          Habbit <span className="text-rose-400">Tracker</span>
        </h1>
        <p className="text-[28px] text-center text-white">
          mantenha o controle de seus novos habitos
        </p>

        <button
          className="
				mt-20
				w-full
				p-3
				bg-rose-400
				rounded-[1rem]
				hover:bg-rose-700
				transition
				duration-150
				hover:scale-105
				text-[18px]
				flex
				align-center
				justify-center
				gap-2
				"
        >
          <AiOutlineGoogle className="text-[22px] my-auto text-white " />
          Connect with Google
        </button>
      </div>
    </main>
  );
}
