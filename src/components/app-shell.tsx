import { Bell, ChevronDown, Search } from "lucide-react";
import { MobileNav, Sidebar } from "@/components/nav";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen lg:flex">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-black/[.06] bg-[#f7f4ee]/85 px-4 backdrop-blur-xl md:px-7">
          <div className="hidden items-center gap-2 rounded-xl border border-black/[.07] bg-white/60 px-3 py-2 text-sm text-black/45 shadow-sm md:flex">
            <Search className="size-4" />
            <span className="w-56">Поиск клиента, записи, услуги…</span>
            <kbd className="rounded-md border border-black/10 bg-white px-1.5 py-0.5 text-[10px]">⌘K</kbd>
          </div>

          <div className="text-sm font-semibold tracking-[.12em] md:hidden">ATELIER</div>

          <div className="flex items-center gap-2">
            <button aria-label="Уведомления" className="grid size-10 place-items-center rounded-xl border border-black/[.07] bg-white/65 text-black/60">
              <Bell className="size-[17px]" />
            </button>
            <button className="flex items-center gap-2 rounded-xl border border-black/[.07] bg-white/65 px-2 py-1.5">
              <div className="grid size-8 place-items-center rounded-lg bg-[#1f1f1b] text-xs font-semibold text-white">AK</div>
              <div className="hidden text-left sm:block">
                <div className="text-xs font-medium">Aruzhan K.</div>
                <div className="text-[10px] text-black/40">Владелец</div>
              </div>
              <ChevronDown className="size-3.5 text-black/35" />
            </button>
          </div>
        </header>

        <main className="px-4 pb-28 pt-6 md:px-7 md:pt-8 lg:pb-10">{children}</main>
      </div>
      <MobileNav />
    </div>
  );
}
