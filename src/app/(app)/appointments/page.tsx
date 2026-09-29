"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, CirclePlus, Filter, Search } from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { cn } from "@/lib/utils";

const staff=["Aruzhan","Madina","Timur","Aigerim"];
const hours=["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"];
const bookings=[
 {staff:"Aruzhan",start:1,span:2,title:"Dana S.",service:"Стрижка + укладка"},
 {staff:"Aruzhan",start:5,span:2,title:"Nursultan A.",service:"Haircut + beard"},
 {staff:"Madina",start:2,span:3,title:"Alina K.",service:"Окрашивание"},
 {staff:"Timur",start:4,span:1,title:"Arman T.",service:"Стрижка"},
 {staff:"Aigerim",start:6,span:2,title:"Kamila R.",service:"Маникюр"},
];

export default function AppointmentsPage(){
 const [selected,setSelected]=useState("Все");
 const visible=useMemo(()=>selected==="Все"?staff:staff.filter(s=>s===selected),[selected]);

 return <>
  <PageHeading
    eyebrow="Операционный центр"
    title="Записи"
    description="Дневной календарь команды. CRUD и drag/reschedule подключаются к PostgreSQL в следующем этапе."
    action={<button className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#181816] px-4 text-sm font-medium text-white"><CirclePlus className="size-4"/>Новая запись</button>}
  />
  <div className="panel overflow-hidden rounded-[24px]">
    <div className="flex flex-col gap-3 border-b border-black/[.06] p-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-2">
        <button aria-label="Предыдущий день" className="grid size-9 place-items-center rounded-lg border border-black/[.07] bg-white"><ChevronLeft className="size-4"/></button>
        <button className="rounded-lg border border-black/[.07] bg-white px-3 py-2 text-xs font-medium">Сегодня</button>
        <button aria-label="Следующий день" className="grid size-9 place-items-center rounded-lg border border-black/[.07] bg-white"><ChevronRight className="size-4"/></button>
        <div className="ml-2 text-sm font-semibold">29 сентября, вторник</div>
      </div>
      <div className="flex gap-2">
        <button className="flex items-center gap-2 rounded-lg border border-black/[.07] bg-white px-3 py-2 text-xs text-black/55"><Search className="size-3.5"/>Поиск</button>
        <button className="flex items-center gap-2 rounded-lg border border-black/[.07] bg-white px-3 py-2 text-xs text-black/55"><Filter className="size-3.5"/>Фильтры</button>
      </div>
    </div>

    <div className="scrollbar-none flex gap-2 overflow-x-auto border-b border-black/[.06] px-4 py-3">
      {["Все",...staff].map(name=>(
        <button key={name} onClick={()=>setSelected(name)} className={cn("whitespace-nowrap rounded-full px-3 py-1.5 text-xs transition",selected===name?"bg-[#181816] text-white":"bg-black/[.045] text-black/48")}>{name}</button>
      ))}
    </div>

    <div className="overflow-x-auto">
      <div className="min-w-[860px]">
        <div className="grid border-b border-black/[.06]" style={{gridTemplateColumns:`76px repeat(${visible.length}, minmax(180px,1fr))`}}>
          <div/>
          {visible.map(name=><div key={name} className="border-l border-black/[.055] px-4 py-3"><div className="text-sm font-medium">{name}</div><div className="mt-0.5 text-[11px] text-black/35">5 записей · 78%</div></div>)}
        </div>
        <div className="relative grid" style={{gridTemplateColumns:`76px repeat(${visible.length}, minmax(180px,1fr))`}}>
          <div>{hours.map(h=><div key={h} className="h-20 border-b border-black/[.05] pr-3 pt-2 text-right text-[11px] text-black/32">{h}</div>)}</div>
          {visible.map(name=>(
            <div key={name} className="relative border-l border-black/[.055]">
              {hours.map(h=><div key={h} className="h-20 border-b border-black/[.05]"/>)}
              {bookings.filter(b=>b.staff===name).map(b=>(
                <button key={b.title+b.start} className="absolute inset-x-2 overflow-hidden rounded-xl border border-[#cdbd9e]/45 bg-[#eee7d9] p-3 text-left shadow-sm" style={{top:b.start*80+6,height:b.span*80-12}}>
                  <div className="text-xs font-semibold">{b.title}</div>
                  <div className="mt-1 text-[11px] text-black/48">{b.service}</div>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
 </>;
}
