import { CirclePlus, MoreHorizontal, Search, SlidersHorizontal } from "lucide-react";
import { PageHeading } from "@/components/page-heading";

const clients=[
 ["Dana Sadykova","+7 701 245 16 10","12 визитов","640 000 ₸","18 сен"],
 ["Alina Karimova","+7 777 818 42 06","8 визитов","1 120 000 ₸","сегодня"],
 ["Nursultan Akhmet","+7 702 446 52 31","15 визитов","775 000 ₸","сегодня"],
 ["Kamila Rakhim","+7 705 937 03 18","5 визитов","310 000 ₸","21 сен"],
 ["Arman Tulegenov","+7 747 401 87 17","9 визитов","465 000 ₸","24 сен"],
];

export default function ClientsPage(){
 return <>
  <PageHeading
    eyebrow="CRM"
    title="Клиенты"
    description="История визитов, предпочтения и ценность клиента в одном контексте."
    action={<button className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#181816] px-4 text-sm font-medium text-white"><CirclePlus className="size-4"/>Добавить клиента</button>}
  />
  <div className="panel overflow-hidden rounded-[24px]">
    <div className="flex flex-col gap-3 border-b border-black/[.06] p-4 md:flex-row md:items-center md:justify-between">
      <div className="flex max-w-md flex-1 items-center gap-2 rounded-xl border border-black/[.07] bg-white px-3 py-2.5 text-sm text-black/38"><Search className="size-4"/>Поиск по имени или телефону</div>
      <button className="flex w-fit items-center gap-2 rounded-xl border border-black/[.07] bg-white px-3 py-2.5 text-xs text-black/48"><SlidersHorizontal className="size-3.5"/>Фильтры</button>
    </div>
    <div className="hidden grid-cols-[1.35fr_1fr_.7fr_.8fr_.65fr_40px] border-b border-black/[.06] px-5 py-3 text-[10px] font-semibold uppercase tracking-[.11em] text-black/30 md:grid">
      <div>Клиент</div><div>Телефон</div><div>Визиты</div><div>LTV</div><div>Последний визит</div><div/>
    </div>
    <div className="divide-y divide-black/[.05]">
      {clients.map(c=>(
        <div key={c[0]} className="grid gap-2 px-5 py-4 md:grid-cols-[1.35fr_1fr_.7fr_.8fr_.65fr_40px] md:items-center">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-xl bg-[#ece7de] text-xs font-semibold">{c[0].split(" ").map(x=>x[0]).join("")}</div>
            <div><div className="text-sm font-medium">{c[0]}</div><div className="mt-0.5 text-[11px] text-black/34 md:hidden">{c[1]}</div></div>
          </div>
          <div className="hidden text-sm text-black/48 md:block">{c[1]}</div>
          <div className="text-xs text-black/45">{c[2]}</div>
          <div className="metric text-sm font-medium">{c[3]}</div>
          <div className="text-xs text-black/38">{c[4]}</div>
          <button aria-label="Действия клиента" className="hidden size-8 place-items-center rounded-lg hover:bg-black/[.04] md:grid"><MoreHorizontal className="size-4"/></button>
        </div>
      ))}
    </div>
  </div>
 </>;
}
