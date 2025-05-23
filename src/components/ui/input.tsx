"use client";

import {
  faEye,
  faEyeSlash,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, type KeyboardEvent } from "react";

type Props = {
  placeholder: string;
  password?: boolean;
  filled?: boolean;
  icon?: IconDefinition;
  value?: string;
  onChange: (newValue: string) => void;
  onEnter?: () => void;
};

export const Input = ({
  placeholder,
  value,
  password,
  icon,
  filled,
  onChange,
  onEnter,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code.toLowerCase() === "enter" && onEnter) {
      onEnter();
    }
  };

  return (
    <div
      className={`has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2 border-gray-700 ${
        filled && "bg-gray-700"
      }`}
    >
      {icon && (
        <FontAwesomeIcon icon={icon} className="ml-4 size-6 text-gray-500" />
      )}
      <input
        type={password && !showPassword ? "password" : "text"}
        className="flex-1 outline-none bg-transparent h-full p-4"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      {password && (
        <FontAwesomeIcon
          onClick={() => setShowPassword(!showPassword)}
          icon={showPassword ? faEye : faEyeSlash}
          className="size-6 text-gray-500 cursor-pointer mr-4"
        />
      )}
    </div>
  );
};
