"use client";

import type { User } from "@/types/user";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";

type Props = {
  user: User;
};

export const RecomendationItem = ({ user }: Props) => {
  const [following, SetFollowing] = useState(false);

  const handleForllowButton = () => {
    SetFollowing(true);
  };

  return (
    <div className="flex items-center">
      <div className="size-10 mr-2 rounded-full overflow-hidden">
        <Link href={`/${user.slug}`}>
          <Image
            src={user.avatar}
            alt={user.name}
            className="size-full"
            width={25}
            height={25}
          />
        </Link>
      </div>
      <div className="flex-1 overflow-hidden">
        <Link href={`/${user.slug}`} className="block truncate">
          {user.name}
        </Link>
        <div className="trucate text-sm text-gray-400">@{user.slug}</div>
      </div>
      <div className="pl-2 w-20">
        {!following && (
          <Button label="Seguir" onClick={handleForllowButton} size={3} />
        )}
      </div>
    </div>
  );
};

export const RecomendationItemSkeleton = () => {
  return (
    <div className="flex items-center animate-pulse">
      <div className="size-10 mr-2 rounded-full bg-gray-600"></div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="bg-gray-600 h-4 w-3/4"></div>
        <div className="bg-gray-600 h-4 w-1/4"></div>
      </div>
    </div>
  );
};
