"use client";

import { motion } from "framer-motion";
import { SparklesText } from "@/components/ui/sparkles-text";

const messages = [
  { name: "M", avatar: "bg-orange-100 text-orange-600", text: "Pessoal, consegui minha primeira vaga de Dev graças às dicas daqui! 🎉" },
  { name: "E", avatar: "bg-blue-100 text-blue-600", text: "Que demais, parabéns! O nível das discussões aqui é outro. 🚀" },
  { name: "V", avatar: "bg-primary text-white", text: "Sim! Eu deveria ter entrado antes. Já estou recomendando pra todo mundo! 💙", own: true },
  { name: "C", avatar: "bg-purple-100 text-purple-600", text: "O networking que fiz aqui já me rendeu ótimas parcerias." },
  { name: "V", avatar: "bg-primary text-white", text: "Com certeza! Alguém topa uma call de estudos mais tarde? 💻", own: true },
  { name: "M", avatar: "bg-orange-100 text-orange-600", text: "Fechado! Te chamo na DM pra gente combinar certinho." },
  { name: "D", avatar: "bg-blue-100 text-blue-600", text: "Posso colar também? Tô precisando focar nos estudos de React." },
];

export default function MockupUI() {
  return (
    <div className="hover-3d relative w-full max-w-[420px] aspect-[3/4]">
      <div className="w-full h-full relative z-0 !overflow-visible">
        <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 scale-105 blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform -rotate-2" />

        <motion.div
          className="absolute inset-0 bg-white border border-border shadow-2xl rounded-3xl overflow-hidden flex flex-col"
          initial={{ y: 50, opacity: 0, rotateX: 10, rotateY: -10 }}
          animate={{ y: 0, opacity: 1, rotateX: 0, rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="px-5 py-3 border-b border-border flex justify-between items-center bg-gray-50/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-primary font-bold">
<img src="/hyphen-logo.png" alt="Hyphen Logo" className="w-8" />
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm">Comunidade Hyphen</div>
                <div className="text-xs text-green-500 flex items-center gap-1 mt-0.5"><span className="w-2 h-2 rounded-full bg-green-500 inline-block" />Online</div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
          </div>

          <div className="p-4 flex-1 flex flex-col gap-3 bg-[#f8fafc] relative overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {messages.map((message, index) => (
              <motion.div key={`${message.name}-${index}`} className={`flex gap-2 max-w-[85%] ${message.own ? "self-end flex-row-reverse" : ""}`} initial={{ x: message.own ? 20 : -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 + index * 0.6 }}>
                <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-[10px] ${message.avatar}`}>{message.name}</div>
                <div className={`${message.own ? "bg-primary text-primary-foreground rounded-tr-none shadow-md" : "bg-white text-foreground rounded-tl-none shadow-sm border border-border/50"} p-2.5 rounded-2xl text-xs`}>{message.text}</div>
              </motion.div>
            ))}
          </div>

          <div className="p-3 bg-white border-t border-border flex gap-2 items-center">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg></div>
            <div className="flex-1 h-9 bg-gray-50 border border-border rounded-full px-4 flex items-center text-xs text-muted-foreground">Escreva uma mensagem...</div>
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg></div>
          </div>
        </motion.div>

        <motion.div className="absolute -left-30 bottom-8 hidden bg-white px-4 py-3 rounded-2xl shadow-xl border border-border md:flex items-center gap-3 z-10" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 4.8, type: "spring" }}>
          <div className="w-3 h-3 rounded-full bg-green-500" /><span className="font-semibold text-sm text-foreground">Novos membros!</span>
        </motion.div>
        <motion.div className="absolute -right-24 top-32 hidden bg-primary text-primary-foreground px-5 py-3 rounded-2xl shadow-xl md:flex items-center gap-3 z-10" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 5, type: "spring" }}>
          <SparklesText sparklesCount={6} colors={{ first: '#ffffffff', second: '#c0c0c0ff', } } className="text-sm font-light">
            Comunidade ativa 🚀
          </SparklesText>
        </motion.div>
        <motion.div className="absolute -left-34 top-52 hidden bg-primary text-primary-foreground px-5 py-3 rounded-2xl shadow-xl md:flex items-center gap-3 z-10" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 5, type: "spring" }}>
          <SparklesText sparklesCount={6} colors={{ first: '#ffffffff', second: '#c0c0c0ff', } } className="text-sm font-light">
            Conhecimento 📃
          </SparklesText>
        </motion.div>
      </div>

      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
