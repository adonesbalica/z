"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const SignInForm = () => {
  const router = useRouter();

  const [emailFiled, setEmailField] = useState("");
  const [passwordFiled, setPasswordField] = useState("");

  const handleEnterButton = () => {
    router.replace("/home");
  };

  return (
    <>
      <input
        type="email"
        placeholder="Digite seu e-mail"
        value={emailFiled}
        onChange={(e) => setEmailField(e.target.value)}
      />
      <input
        type="texpasswordt"
        placeholder="Digite sua senha"
        value={passwordFiled}
        onChange={(e) => setPasswordField(e.target.value)}
      />

      <button className="" onClick={handleEnterButton}>
        Entrar
      </button>
    </>
  );
};
