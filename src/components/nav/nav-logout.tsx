"use client";

import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export const NavLogout = () => {
  const router = useRouter();

  const handleClick = () => {
    router.replace("/sign-in");
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-6 py-3 cursor-pointer opacity-50 hover:opacity-100"
    >
      <FontAwesomeIcon className="size-6" icon={faArrowRightFromBracket} />
      <div className="text-lg">Sair</div>
    </div>
  );
};
