type FormsInputProps = {
  email: string;
  password: string;
  setEmail: (data: string) => void;
  setPassword: (data: string) => void;
};

export function FormsInput({ email, password, setEmail, setPassword }: FormsInputProps) {
  return (
    <>
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
    </>
  );
}
