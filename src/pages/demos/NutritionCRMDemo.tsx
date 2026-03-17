import { useState } from "react";
import DemoCTA from "./DemoCTA";

type Page = "dashboard" | "clients" | "programs" | "analytics";

const CLIENTS = [
  { name: "Анна Смирнова", goal: "Снижение веса", calories: 1800, days: 12, status: "Активна", progress: 68 },
  { name: "Иван Петров", goal: "Набор мышц", calories: 2800, days: 28, status: "Активен", progress: 82 },
  { name: "Мария Козлова", goal: "Оздоровление", calories: 2100, days: 5, status: "Активна", progress: 31 },
  { name: "Дмитрий Нов.", goal: "Сушка", calories: 2200, days: 19, status: "Пауза", progress: 55 },
];

const PROGRAMS = [
  { name: "Старт: минус 5 кг", clients: 8, duration: "4 недели", status: "Активна" },
  { name: "Набор мышечной массы", clients: 5, duration: "8 недель", status: "Активна" },
  { name: "Детокс-программа", clients: 3, duration: "2 недели", status: "Архив" },
  { name: "Питание при диабете", clients: 2, duration: "Постоянная", status: "Активна" },
];

export default function NutritionCRMDemo() {
  const [page, setPage] = useState<Page>("dashboard");
  const [selected, setSelected] = useState<typeof CLIENTS[0] | null>(null);

  const nav: { id: Page; label: string }[] = [
    { id: "dashboard", label: "Дашборд" },
    { id: "clients", label: "Клиенты" },
    { id: "programs", label: "Программы" },
    { id: "analytics", label: "Аналитика" },
  ];

  return (
    <div className="min-h-screen bg-[#f5fbf7] text-[#1a2e20] font-sans flex flex-col">
      <div className="flex flex-1 min-h-screen">
        {/* Sidebar */}
        <aside className="w-52 bg-[#1a3a2a] text-white hidden md:flex flex-col p-5 shrink-0">
          <div className="text-lg font-bold text-[#6ddb9a] mb-8">🥗 NutriCRM</div>
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => { setPage(n.id); setSelected(null); }}
              className={`text-left px-4 py-2.5 rounded-lg text-sm mb-1 transition-colors ${
                page === n.id ? "bg-[#6ddb9a] text-[#1a3a2a] font-semibold" : "text-[#8dbfa0] hover:bg-[#2a4a3a]"
              }`}
            >
              {n.label}
            </button>
          ))}
          <div className="mt-auto p-3 bg-[#2a4a3a] rounded-xl">
            <div className="text-xs text-[#8dbfa0] mb-1">Встреч сегодня</div>
            <div className="text-2xl font-bold text-[#6ddb9a]">4</div>
          </div>
        </aside>

        {/* Mobile nav */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1a3a2a] flex z-30 border-t border-[#2a4a3a]">
          {nav.map((n) => (
            <button key={n.id} onClick={() => setPage(n.id)} className={`flex-1 py-3 text-xs font-medium transition-colors ${page === n.id ? "text-[#6ddb9a]" : "text-[#8dbfa0]"}`}>
              {n.label}
            </button>
          ))}
        </div>

        <main className="flex-1 p-6 md:p-8 overflow-auto pb-16 md:pb-8">
          {page === "dashboard" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Дашборд</h1>
                <button className="bg-[#2a7a4a] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1a6a3a] transition-colors">
                  + Новый клиент
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Всего клиентов", val: "24" },
                  { label: "Активных", val: "18" },
                  { label: "Программ", val: "31" },
                  { label: "Встреч сегодня", val: "4" },
                ].map((s) => (
                  <div key={s.label} className="bg-white border border-[#c8e8d0] rounded-xl p-4">
                    <div className="text-2xl font-bold text-[#2a7a4a]">{s.val}</div>
                    <div className="text-xs text-[#607060] mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <h2 className="font-bold mb-4">Ближайшие встречи</h2>
              <div className="flex flex-col gap-3 mb-6">
                {[
                  { name: "Анна Смирнова", time: "10:00", type: "Онлайн" },
                  { name: "Иван Петров", time: "12:30", type: "Очно" },
                  { name: "Мария Козлова", time: "15:00", type: "Онлайн" },
                  { name: "Дмитрий Нов.", time: "17:30", type: "Очно" },
                ].map((m) => (
                  <div key={m.name} className="bg-white border border-[#c8e8d0] rounded-xl px-5 py-3.5 flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">{m.name}</div>
                      <div className="text-xs text-[#607060]">{m.type}</div>
                    </div>
                    <span className="text-[#2a7a4a] font-bold text-sm">{m.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {page === "clients" && !selected && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Мои клиенты</h1>
                <button className="bg-[#2a7a4a] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1a6a3a] transition-colors">
                  + Новый клиент
                </button>
              </div>
              <div className="bg-white border border-[#c8e8d0] rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-[#f0f8f2] border-b border-[#c8e8d0]">
                    <tr>
                      {["Клиент", "Цель", "Ккал", "Дней", "Прогресс", "Статус"].map((h) => (
                        <th key={h} className="text-left px-5 py-3 text-[#607060] font-semibold text-xs uppercase">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {CLIENTS.map((c) => (
                      <tr key={c.name} onClick={() => setSelected(c)} className="border-b border-[#e8f5ec] hover:bg-[#f8fdf9] transition-colors cursor-pointer">
                        <td className="px-5 py-4 font-medium">{c.name}</td>
                        <td className="px-5 py-4 text-[#607060]">{c.goal}</td>
                        <td className="px-5 py-4">{c.calories}</td>
                        <td className="px-5 py-4">{c.days}</td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-[#e8f5ec] rounded-full overflow-hidden">
                              <div className="h-1.5 bg-[#2a7a4a] rounded-full" style={{ width: `${c.progress}%` }} />
                            </div>
                            <span className="text-xs text-[#607060]">{c.progress}%</span>
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${c.status === "Пауза" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>
                            {c.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {page === "clients" && selected && (
            <div>
              <button onClick={() => setSelected(null)} className="text-[#2a7a4a] text-sm mb-5 hover:underline flex gap-1 items-center">← Все клиенты</button>
              <div className="bg-white border border-[#c8e8d0] rounded-2xl p-6 mb-5">
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <h2 className="text-xl font-bold">{selected.name}</h2>
                    <div className="text-[#607060] text-sm">{selected.goal}</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${selected.status === "Пауза" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>
                    {selected.status}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Калорий/день", val: selected.calories },
                    { label: "Дней в работе", val: selected.days },
                    { label: "Прогресс", val: `${selected.progress}%` },
                  ].map(s => (
                    <div key={s.label} className="bg-[#f5fbf7] rounded-xl p-4">
                      <div className="text-xl font-bold text-[#2a7a4a]">{s.val}</div>
                      <div className="text-xs text-[#607060] mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white border border-[#c8e8d0] rounded-2xl p-5">
                <h3 className="font-bold mb-3">Заметки</h3>
                <textarea rows={4} defaultValue="Хорошо соблюдает режим. Рекомендовать добавить силовые тренировки." className="w-full border border-[#c8e8d0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2a7a4a] transition-colors resize-none" />
                <button className="mt-3 bg-[#2a7a4a] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#1a6a3a] transition-colors">Сохранить</button>
              </div>
            </div>
          )}

          {page === "programs" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Программы питания</h1>
                <button className="bg-[#2a7a4a] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1a6a3a] transition-colors">
                  + Новая программа
                </button>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {PROGRAMS.map((p) => (
                  <div key={p.name} className="bg-white border border-[#c8e8d0] rounded-2xl p-5 hover:shadow-sm transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div className="font-semibold">{p.name}</div>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${p.status === "Архив" ? "bg-gray-100 text-gray-600" : "bg-green-100 text-green-700"}`}>
                        {p.status}
                      </span>
                    </div>
                    <div className="flex gap-4 text-sm text-[#607060]">
                      <span>👥 {p.clients} клиентов</span>
                      <span>📅 {p.duration}</span>
                    </div>
                    <button className="mt-4 w-full border border-[#c8e8d0] py-2 rounded-lg text-sm text-[#2a7a4a] font-medium hover:bg-[#f5fbf7] transition-colors">
                      Открыть программу
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {page === "analytics" && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Аналитика</h1>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Средний прогресс", val: "59%" },
                  { label: "Удержание клиентов", val: "87%" },
                  { label: "Новых за месяц", val: "+6" },
                  { label: "Выручка / мес", val: "148 000 ₽" },
                ].map((s) => (
                  <div key={s.label} className="bg-white border border-[#c8e8d0] rounded-xl p-4">
                    <div className="text-2xl font-bold text-[#2a7a4a]">{s.val}</div>
                    <div className="text-xs text-[#607060] mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-white border border-[#c8e8d0] rounded-2xl p-5">
                <h3 className="font-bold mb-4">Прогресс по клиентам</h3>
                <div className="flex flex-col gap-3">
                  {CLIENTS.map((c) => (
                    <div key={c.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{c.name}</span>
                        <span className="text-[#2a7a4a] font-semibold">{c.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-[#e8f5ec] rounded-full overflow-hidden">
                        <div className="h-2 bg-[#2a7a4a] rounded-full transition-all" style={{ width: `${c.progress}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      <DemoCTA />
    </div>
  );
}
