"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SignUpForm = () => {
  const router = useRouter();

  const [nameField, setNameField] = useState("");
  const [emailFiled, setEmailField] = useState("");
  const [passwordFiled, setPasswordField] = useState("");

  const handleEnterButton = () => {
    router.replace("/home");
  };

  return (
    <>
      <Input
        placeholder="Digite seu nome"
        value={nameField}
        onChange={setNameField}
      />

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

      <Button label="Ciar conta" size={1} onClick={handleEnterButton} />
    </>
  );
};
