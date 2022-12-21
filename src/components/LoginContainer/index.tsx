import { FormEvent, useState } from "react";
import { Button } from "./Button";
import { FormsInput } from "./FormsInput";
import { HabbitMainName } from "./HabbitMainName";
import { SecondaryText } from "./SecondaryText";

type LoginContainerProps = {
  email: string;
  password: string;
  handleUserlogin: (event: FormEvent<Element>) => void;
  onOpenSignupModal: () => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
};

export function LoginContainer({
  email,
  password,
  handleUserlogin,
  onOpenSignupModal,
  setEmail,
  setPassword,
}: LoginContainerProps) {
  return (
    <main
      id="page-login"
      className="	h-screen flex flex-col items-center justify-center bg-gray-900"
    >
      <div className="p-12	border-gradient-br-red-red-slate border-transparent border-solid border-4 rounded-[1rem] shadow-[0px_0px_20px_0px] shadow-pink-900">
        <HabbitMainName />
        <SecondaryText />
        <div>
          <FormsInput
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
          />
          <div className="flex w-full justify-center items-center gap-[3rem] mt-10">
            <Button
              handleUserlogin={handleUserlogin}
              color={"bg-rose-500"}
              buttonText={"Login"}
            />
            <Button
              onOpenSignupModal={onOpenSignupModal}
              color={"bg-rose-300"}
              buttonText={"Create Account"}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
