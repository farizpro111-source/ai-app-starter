"use client";

import { useEffect, useState } from "react";

export function TelegramUserPill() {
  const [name, setName] = useState("Aruzhan");
  const [photo, setPhoto] = useState<string | undefined>();

  useEffect(() => {
    const user = window.Telegram?.WebApp?.initDataUnsafe?.user;
    if (!user) return;

    setName(user.first_name || user.username || "Профиль");
    setPhoto(user.photo_url);
  }, []);

  return (
    <div className="flex h-10 items-center gap-2 rounded-[14px] border border-black/[.08] bg-white/80 py-1 pl-1 pr-2.5 shadow-sm">
      {photo ? (
        // Telegram provides the URL after the app is launched inside Telegram.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={photo} alt="" className="size-8 rounded-[11px] object-cover" />
      ) : (
        <div className="grid size-8 place-items-center rounded-[11px] bg-[#1b1c18] text-[11px] font-extrabold text-white">
          {name.slice(0, 1).toUpperCase()}
        </div>
      )}
      <span className="max-w-20 truncate text-[11px] font-extrabold">{name}</span>
    </div>
  );
}
