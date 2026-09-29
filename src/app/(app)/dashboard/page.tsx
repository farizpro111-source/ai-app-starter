import { CalendarDays, CirclePlus, Clock3, Scissors, UsersRound } from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { StatCard } from "@/components/stat-card";

const appointments = [
  { time: "10:00", client: "Dana S.", service: "Стрижка + укладка", specialist: "Aruzhan", status: "Подтверждено" },
  { time: "11:30", client: "Alina K.", service: "Окрашивание", specialist: "Madina", status: "В салоне" },
  { time: "13:00", client: "Nursultan A.", service: "Haircut + beard", specialist: "Timur", status: "Подтверждено" },
  { time: "15:30", client: "Kamila R.", service: "Маникюр", specialist: "Aigerim", status: "Ожидает" },
];

export default function DashboardPage() {
  return (
    <>
      <PageHeading
        eyebrow="Вторник · 29 сентября"
        title="Добрый день, Aruzhan"
        description="Сегодня плотный день: 31 запись, 7 свободных окон и две записи требуют подтверждения."
        action={
          <button className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#181816] px-4 text-sm font-medium text-white shadow-[0_12px_28px_rgba(24,24,22,.18)]">
            <CirclePlus className="size-4" />
            Новая запись
          </button>
        }
      />

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Выручка сегодня" value="1 248 000 ₸" delta={12.4} note="к прошлому вторнику" />
        <StatCard label="Записи" value="31" delta={6.9} note="24 завершено / активно" />
        <StatCard label="Средний чек" value="40 260 ₸" delta={4.1} note="за 7 дней" />
        <StatCard label="Свободные окна" value="7" delta={-18} note="лучше при снижении" inverse />
      </section>

      <section className="mt-5 grid gap-5 xl:grid-cols-[1.35fr_.65fr]">
        <div className="panel rounded-[24px] p-5 md:p-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-semibold">Выручка за неделю</div>
              <div className="mt-1 text-xs text-black/38">Дизайн-фикстуры до подключения live queries</div>
            </div>
            <CalendarDays className="size-4 text-black/30" />
          </div>
          <div className="mt-5 flex items-end gap-3">
            <div className="metric text-[28px] font-semibold">8 420 000 ₸</div>
            <div className="mb-1 rounded-full bg-[#eef4ef] px-2 py-1 text-[11px] font-medium text-[#47745f]">+9.8%</div>
          </div>
          <div className="mt-8 flex h-48 items-end gap-3">
            {[42,56,49,70,78,91,66].map((v,i)=>(
              <div key={i} className="flex h-full flex-1 items-end">
                <div className="w-full rounded-t-xl bg-gradient-to-t from-[#d9c7a7] to-[#a88956]" style={{height:`${v}%`}} />
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-7 text-center text-[10px] text-black/30">
            {["Пн","Вт","Ср","Чт","Пт","Сб","Вс"].map(d=><span key={d}>{d}</span>)}
          </div>
        </div>

        <div className="panel rounded-[24px] p-5 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">Команда сегодня</div>
              <div className="mt-1 text-xs text-black/38">Загрузка специалистов</div>
            </div>
            <UsersRound className="size-4 text-black/30" />
          </div>
          <div className="mt-6 space-y-5">
            {[
              ["Aruzhan","Барбер",92],
              ["Madina","Колорист",81],
              ["Timur","Барбер",76],
              ["Aigerim","Nail master",68],
            ].map(([name,role,load])=>(
              <div key={String(name)}>
                <div className="mb-2 flex items-center justify-between text-xs">
                  <div><span className="font-medium">{name}</span><span className="ml-2 text-black/35">{role}</span></div>
                  <span className="text-black/44">{load}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-black/[.055]">
                  <div className="h-full rounded-full bg-[#282821]" style={{width:`${load}%`}} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel mt-5 overflow-hidden rounded-[24px]">
        <div className="border-b border-black/[.06] px-5 py-4 md:px-6">
          <div className="text-sm font-semibold">Ближайшие записи</div>
          <div className="mt-1 text-xs text-black/38">Следующие визиты сегодня</div>
        </div>
        <div className="divide-y divide-black/[.055]">
          {appointments.map(a=>(
            <div key={a.time} className="grid gap-3 px-5 py-4 md:grid-cols-[80px_1fr_1fr_1fr_auto] md:items-center md:px-6">
              <div className="flex items-center gap-2 text-sm font-semibold"><Clock3 className="size-3.5 text-[#aa8c59]"/>{a.time}</div>
              <div className="text-sm font-medium">{a.client}</div>
              <div className="hidden items-center gap-2 text-sm text-black/52 md:flex"><Scissors className="size-3.5"/>{a.service}</div>
              <div className="hidden text-sm text-black/46 md:block">{a.specialist}</div>
              <div className="w-fit rounded-full bg-[#f0eee8] px-2.5 py-1 text-[11px] text-black/55">{a.status}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
