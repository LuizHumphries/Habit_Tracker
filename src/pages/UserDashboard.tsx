export function UserDashboard() {
  return (
    <main
      id="page-login"
      className="		
		h-screen
		rounded-xl
		flex
		flex-col
		items-center
		justify-center
		bg-slate-50
		"
    >
      <div
        className="
			p-10			
			border-gradient-br-red-red-slate 
			border-transparent
			border-solid 
			border-4 
			rounded-[1rem]"
      >
        <h1 className="text-rose-800 text-[64px] text-center">
          Habbit <span className="text-rose-400">Tracker</span>
        </h1>
        <p className="text-[24px] text-center">
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
				"
        >
          Connect with Google
        </button>
      </div>
    </main>
  );
}
