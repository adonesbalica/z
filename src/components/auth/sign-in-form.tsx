"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export const SignInForm = () => {
  const router = useRouter();

  const [emailFiled, setEmailField] = useState("");
  const [passwordFiled, setPasswordField] = useState("");

  const handleEnterButton = () => {
    router.replace("/home");
  };

  return (
    <>
      <Input
        placeholder="Digite seu e-mail"
        value={emailFiled}
        onChange={setEmailField}
      />

      <Input
        placeholder="Digite sua senha"
        value={passwordFiled}
        onChange={setPasswordField}
        password
      />

      <Button label="Entrar" size={1} onClick={handleEnterButton} />
    </>
  );
};
