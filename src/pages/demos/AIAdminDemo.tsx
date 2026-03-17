import { useState } from "react";
import DemoCTA from "./DemoCTA";

type Page = "agents" | "logs" | "api" | "billing";

const AGENTS = [
  { name: "Агент поддержки", model: "GPT-4o", status: "Активен", requests: 1423, success: 98, desc: "Отвечает клиентам 24/7" },
  { name: "Агент продаж", model: "Claude 3.5", status: "Активен", requests: 847, success: 94, desc: "Квалифицирует лидов" },
  { name: "Агент аналитики", model: "GPT-4o-mini", status: "Пауза", requests: 321, success: 99, desc: "Строит отчёты по данным" },
  { name: "Email-агент", model: "GPT-4o", status: "Активен", requests: 2105, success: 97, desc: "Обрабатывает входящую почту" },
];

const LOGS = [
  { time: "14:23:11", agent: "Агент поддержки", event: "Запрос обработан", status: "ok" },
  { time: "14:22:58", agent: "Email-агент", event: "Письмо классифицировано: срочное", status: "ok" },
  { time: "14:22:44", agent: "Агент продаж", event: "Лид квалифицирован: score 87", status: "ok" },
  { time: "14:22:31", agent: "Email-агент", event: "Ответ отправлен клиенту", status: "ok" },
  { time: "14:21:19", agent: "Агент аналитики", event: "Отчёт сформирован", status: "warn" },
  { time: "14:20:05", agent: "Агент поддержки", event: "Эскалация на менеджера", status: "warn" },
];

export default function AIAdminDemo() {
  const [page, setPage] = useState<Page>("agents");
  const [selected, setSelected] = useState<typeof AGENTS[0] | null>(null);

  const nav: { id: Page; label: string }[] = [
    { id: "agents", label: "Агенты" },
    { id: "logs", label: "Логи" },
    { id: "api", label: "API-ключи" },
    { id: "billing", label: "Биллинг" },
  ];

  return (
    <div className="min-h-screen bg-[#080c14] text-[#c8d8f0] font-sans flex flex-col">
      <div className="flex flex-1 min-h-screen">
        {/* Sidebar */}
        <aside className="w-52 bg-[#0d1220] border-r border-[#1a2840] hidden md:flex flex-col p-4 shrink-0">
          <div className="text-[#4a90d8] font-bold text-lg mb-8 px-2">⚡ AgentHub</div>
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => { setPage(n.id); setSelected(null); }}
              className={`text-left px-3 py-2.5 rounded-lg text-sm mb-1 transition-colors ${
                page === n.id ? "bg-[#4a90d8] text-white font-semibold" : "text-[#6080a8] hover:bg-[#1a2840] hover:text-[#c8d8f0]"
              }`}
            >
              {n.label}
            </button>
          ))}
          <div className="mt-auto p-3 bg-[#1a2840] rounded-xl">
            <div className="text-xs text-[#6080a8] mb-1">API-запросов сегодня</div>
            <div className="text-xl font-bold text-[#4a90d8]">4 696</div>
          </div>
        </aside>

        {/* Mobile nav */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0d1220] flex z-30 border-t border-[#1a2840]">
          {nav.map((n) => (
            <button key={n.id} onClick={() => setPage(n.id)} className={`flex-1 py-3 text-xs font-medium transition-colors ${page === n.id ? "text-[#4a90d8]" : "text-[#6080a8]"}`}>
              {n.label}
            </button>
          ))}
        </div>

        <main className="flex-1 p-6 md:p-8 overflow-auto pb-16 md:pb-8">
          {page === "agents" && !selected && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-white">AI-агенты</h1>
                <button className="bg-[#4a90d8] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#3a80c8] transition-colors">
                  + Создать агента
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Активных агентов", val: "3" },
                  { label: "Запросов / час", val: "196" },
                  { label: "Ср. успешность", val: "97%" },
                  { label: "Токенов / день", val: "2.1M" },
                ].map((s) => (
                  <div key={s.label} className="bg-[#0d1220] border border-[#1a2840] rounded-xl p-4">
                    <div className="text-2xl font-bold text-[#4a90d8]">{s.val}</div>
                    <div className="text-xs text-[#6080a8] mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {AGENTS.map((a) => (
                  <div key={a.name} onClick={() => setSelected(a)} className="bg-[#0d1220] border border-[#1a2840] rounded-2xl p-5 hover:border-[#4a90d8]/50 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="font-semibold text-white">{a.name}</div>
                        <div className="text-xs text-[#6080a8] mt-0.5">{a.desc}</div>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${a.status === "Активен" ? "bg-green-900/50 text-green-400" : "bg-yellow-900/50 text-yellow-400"}`}>
                        {a.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="bg-[#1a2840] text-[#4a90d8] px-2.5 py-1 rounded-md text-xs font-mono">{a.model}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-[#1a2840] rounded-full overflow-hidden">
                          <div className="h-1.5 bg-green-500 rounded-full" style={{ width: `${a.success}%` }} />
                        </div>
                        <span className="text-xs text-green-400">{a.success}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {page === "agents" && selected && (
            <div>
              <button onClick={() => setSelected(null)} className="text-[#4a90d8] text-sm mb-6 hover:underline flex gap-1">← Все агенты</button>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white">{selected.name}</h2>
                  <p className="text-[#6080a8] text-sm">{selected.desc}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${selected.status === "Активен" ? "bg-green-900/50 text-green-400" : "bg-yellow-900/50 text-yellow-400"}`}>
                  {selected.status}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Запросов", val: selected.requests.toLocaleString("ru") },
                  { label: "Успешность", val: `${selected.success}%` },
                  { label: "Модель", val: selected.model },
                ].map(s => (
                  <div key={s.label} className="bg-[#0d1220] border border-[#1a2840] rounded-xl p-4">
                    <div className="text-xl font-bold text-[#4a90d8]">{s.val}</div>
                    <div className="text-xs text-[#6080a8] mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-[#0d1220] border border-[#1a2840] rounded-2xl p-5">
                <h3 className="font-semibold text-white mb-4">Инструкция агента</h3>
                <textarea rows={5} defaultValue={`Ты — ${selected.name.toLowerCase()} компании Webozhitel. Отвечай профессионально и по делу. Если не знаешь ответа, предложи переключить на менеджера.`} className="w-full bg-[#1a2840] border border-[#2a3850] rounded-xl px-4 py-3 text-sm text-[#c8d8f0] focus:outline-none focus:border-[#4a90d8] resize-none transition-colors" />
                <button className="mt-3 bg-[#4a90d8] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#3a80c8] transition-colors">
                  Сохранить
                </button>
              </div>
            </div>
          )}

          {page === "logs" && (
            <div>
              <h1 className="text-2xl font-bold text-white mb-6">Логи активности</h1>
              <div className="bg-[#0d1220] border border-[#1a2840] rounded-2xl overflow-hidden">
                <div className="px-5 py-3 border-b border-[#1a2840] flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-[#6080a8]">Реальное время</span>
                </div>
                <div className="divide-y divide-[#1a2840]">
                  {LOGS.map((l, i) => (
                    <div key={i} className="px-5 py-3 flex items-center gap-4 text-sm hover:bg-[#1a2840]/50 transition-colors">
                      <span className="font-mono text-[#4a6080] text-xs shrink-0">{l.time}</span>
                      <span className="text-[#6080a8] text-xs shrink-0 w-32">{l.agent}</span>
                      <span className="flex-1 text-[#c8d8f0]">{l.event}</span>
                      <span className={`text-xs px-2 py-0.5 rounded font-mono ${l.status === "ok" ? "bg-green-900/50 text-green-400" : "bg-yellow-900/50 text-yellow-400"}`}>
                        {l.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {page === "api" && (
            <div>
              <h1 className="text-2xl font-bold text-white mb-6">API-ключи</h1>
              <div className="bg-[#0d1220] border border-[#1a2840] rounded-2xl divide-y divide-[#1a2840]">
                {[
                  { name: "Production key", key: "sk-prod-••••••••••••••••••••••ab8f", created: "15 марта 2025", perms: "Чтение + запись" },
                  { name: "Test key", key: "sk-test-••••••••••••••••••••••3d12", created: "10 марта 2025", perms: "Только чтение" },
                ].map((k) => (
                  <div key={k.name} className="px-5 py-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold text-white text-sm">{k.name}</span>
                      <button className="text-xs text-[#4a90d8] hover:underline">Отозвать</button>
                    </div>
                    <div className="font-mono text-xs text-[#6080a8] bg-[#1a2840] px-3 py-2 rounded-lg mb-2">{k.key}</div>
                    <div className="flex gap-4 text-xs text-[#6080a8]">
                      <span>Создан: {k.created}</span>
                      <span>Доступ: {k.perms}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 bg-[#4a90d8] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#3a80c8] transition-colors">
                + Создать новый ключ
              </button>
            </div>
          )}

          {page === "billing" && (
            <div>
              <h1 className="text-2xl font-bold text-white mb-6">Биллинг</h1>
              <div className="bg-[#0d1220] border border-[#4a90d8]/30 rounded-2xl p-5 mb-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-[#6080a8] text-xs mb-1">Текущий тариф</div>
                    <div className="text-xl font-bold text-white">Business</div>
                  </div>
                  <span className="bg-[#4a90d8] text-white text-xs px-3 py-1 rounded-full font-semibold">Активен</span>
                </div>
                <div className="text-3xl font-bold text-[#4a90d8] mb-1">4 900 ₽<span className="text-base text-[#6080a8] font-normal">/мес</span></div>
                <div className="text-xs text-[#6080a8]">Следующее списание: 15 апреля 2025</div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-5">
                {[
                  { label: "Токенов использовано", val: "2.1M", max: "5M" },
                  { label: "Агентов", val: "4", max: "10" },
                  { label: "API-запросов", val: "14 696", max: "50 000" },
                ].map(s => (
                  <div key={s.label} className="bg-[#0d1220] border border-[#1a2840] rounded-xl p-4">
                    <div className="text-lg font-bold text-[#4a90d8] mb-0.5">{s.val}</div>
                    <div className="text-xs text-[#6080a8]">{s.label}</div>
                    <div className="text-xs text-[#4a6080] mt-1">из {s.max}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
      <DemoCTA />
    </div>
  );
}
