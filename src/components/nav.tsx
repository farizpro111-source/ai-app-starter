"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  CalendarDays,
  CircleDollarSign,
  ContactRound,
  LayoutDashboard,
  Scissors,
  Settings,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/dashboard", label: "Обзор", icon: LayoutDashboard },
  { href: "/appointments", label: "Записи", icon: CalendarDays },
  { href: "/clients", label: "Клиенты", icon: ContactRound },
  { href: "/staff", label: "Команда", icon: UsersRound },
  { href: "/services", label: "Услуги", icon: Scissors },
  { href: "/finance", label: "Финансы", icon: CircleDollarSign },
  { href: "/analytics", label: "Аналитика", icon: BarChart3 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-screen w-[248px] shrink-0 flex-col border-r border-black/[.07] bg-[#171714] px-4 py-5 text-white lg:flex">
      <div className="flex items-center gap-3 px-2 pb-8">
        <div className="grid size-10 place-items-center rounded-2xl bg-white text-[#171714]">
          <Sparkles className="size-4" />
        </div>
        <div>
          <div className="text-sm font-semibold tracking-[.16em]">ATELIER</div>
          <div className="text-xs text-white/45">OS · Almaty</div>
        </div>
      </div>

      <nav className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition",
                active
                  ? "bg-white text-[#171714] shadow-[0_8px_24px_rgba(0,0,0,.18)]"
                  : "text-white/58 hover:bg-white/[.06] hover:text-white",
              )}
            >
              <Icon className="size-[17px]" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-1">
        <Link href="/settings" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/58 transition hover:bg-white/[.06] hover:text-white">
          <Settings className="size-[17px]" />
          Настройки
        </Link>
        <div className="mt-4 rounded-2xl border border-white/[.08] bg-white/[.045] p-3">
          <div className="text-xs text-white/40">Сегодня</div>
          <div className="mt-1 text-sm">Загрузка команды</div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[78%] rounded-full bg-[#d6bd92]" />
          </div>
          <div className="mt-2 text-xs text-white/48">78% · 31 из 40 слотов</div>
        </div>
      </div>
    </aside>
  );
}

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 flex justify-around rounded-2xl border border-black/10 bg-[#181816]/95 p-2 text-white shadow-2xl backdrop-blur lg:hidden">
      {items.slice(0, 5).map(({ href, label, icon: Icon }) => {
        const active = pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex min-w-12 flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-[10px]",
              active ? "bg-white text-black" : "text-white/60",
            )}
          >
            <Icon className="size-4" />
            {label}
          </Link>
        );
      })}
    </div>
  );
}
