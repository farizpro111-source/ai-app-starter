"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage(){
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [error,setError]=useState("");
 const [loading,setLoading]=useState(false);

 async function signIn(e:FormEvent){
  e.preventDefault(); setLoading(true); setError("");
  try{
   const supabase=createClient();
   const {error}=await supabase.auth.signInWithPassword({email,password});
   if(error) throw error;
   window.location.href="/dashboard";
  }catch(err){
   setError(err instanceof Error?err.message:"Не удалось войти");
  }finally{setLoading(false)}
 }

 return <main className="grid min-h-screen lg:grid-cols-[1.05fr_.95fr]">
  <section className="hidden min-h-screen bg-[#171714] p-10 text-white lg:flex lg:flex-col">
    <div className="flex items-center gap-3"><div className="grid size-10 place-items-center rounded-2xl bg-white text-black"><Sparkles className="size-4"/></div><div className="text-sm font-semibold tracking-[.16em]">ATELIER OS</div></div>
    <div className="my-auto max-w-xl">
      <div className="text-[11px] font-semibold uppercase tracking-[.22em] text-[#d6bd92]">Quiet luxury operations</div>
      <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-.055em]">Салон работает красиво.<br/>Бизнес — точно.</h1>
      <p className="mt-6 max-w-lg text-sm leading-7 text-white/46">Записи, команда, клиенты, выручка и аналитика в одном операционном пространстве.</p>
    </div>
    <div className="text-xs text-white/25">Atelier OS · 2026</div>
  </section>
  <section className="flex items-center justify-center p-5 md:p-10">
    <div className="w-full max-w-[410px]">
      <div className="mb-8 text-sm font-semibold tracking-[.16em] lg:hidden">ATELIER OS</div>
      <div className="text-[30px] font-semibold tracking-[-.045em]">Вход в пространство</div>
      <p className="mt-2 text-sm leading-6 text-black/42">Используйте рабочий email и пароль вашей организации.</p>
      <form onSubmit={signIn} className="mt-8 space-y-4">
        <label className="block"><span className="mb-2 block text-xs font-medium text-black/55">Email</span><input value={email} onChange={e=>setEmail(e.target.value)} type="email" required className="h-12 w-full rounded-xl border border-black/[.09] bg-white/80 px-3 outline-none focus:border-black/25" placeholder="you@salon.kz"/></label>
        <label className="block"><span className="mb-2 block text-xs font-medium text-black/55">Пароль</span><input value={password} onChange={e=>setPassword(e.target.value)} type="password" required className="h-12 w-full rounded-xl border border-black/[.09] bg-white/80 px-3 outline-none focus:border-black/25" placeholder="••••••••"/></label>
        {error?<div className="rounded-xl bg-[#f6e9e7] px-3 py-2 text-xs text-[#914d45]">{error}</div>:null}
        <button disabled={loading} className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#181816] text-sm font-medium text-white disabled:opacity-55">{loading?"Входим…":"Продолжить"}<ArrowRight className="size-4"/></button>
      </form>
      <p className="mt-5 text-xs leading-5 text-black/32">Live-вход требует Supabase URL и publishable key.</p>
    </div>
  </section>
 </main>;
}
