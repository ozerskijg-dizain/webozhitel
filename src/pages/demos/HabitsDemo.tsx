import { useState } from "react";
import DemoCTA from "./DemoCTA";

type Page = "home" | "week" | "stats" | "settings";

const HABITS = ["Зарядка", "Чтение", "Медитация", "Вода 2л", "Без соцсетей"];
const DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const HABIT_DETAILS = [
  { name: "Зарядка", streak: 12, best: 21, total: 48, icon: "🏋️" },
  { name: "Чтение", streak: 7, best: 14, total: 35, icon: "📚" },
  { name: "Медитация", streak: 4, best: 9, total: 22, icon: "🧘" },
  { name: "Вода 2л", streak: 12, best: 12, total: 51, icon: "💧" },
  { name: "Без соцсетей", streak: 3, best: 7, total: 18, icon: "📵" },
];

export default function HabitsDemo() {
  const [page, setPage] = useState<Page>("home");
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => setChecked((p) => ({ ...p, [key]: !p[key] }));

  const todayChecked = HABITS.filter((h) => checked[`${h}-today`]).length;

  const nav: { id: Page; label: string }[] = [
    { id: "home", label: "Сегодня" },
    { id: "week", label: "Неделя" },
    { id: "stats", label: "Статистика" },
    { id: "settings", label: "Настройки" },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-[#e8e8ff] font-sans flex flex-col">
      <header className="px-6 py-4 border-b border-[#2a2a4a] flex justify-between items-center sticky top-0 bg-[#0f0f1a] z-40">
        <button onClick={() => setPage("home")} className="text-xl font-bold text-[#7c6aff] hover:opacity-80 transition-opacity">
          ✦ HabitFlow
        </button>
        <nav className="flex gap-1">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => setPage(n.id)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                page === n.id
                  ? "bg-[#7c6aff] text-white font-semibold"
                  : "text-[#8080b8] hover:text-[#e8e8ff] hover:bg-[#1a1a2e]"
              }`}
            >
              {n.label}
            </button>
          ))}
        </nav>
      </header>

      <div className="flex-1">
        {page === "home" && (
          <div className="px-8 py-8 max-w-2xl mx-auto">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-2xl font-bold">Привет! 👋</h1>
                <p className="text-[#8080a8] text-sm mt-1">{new Date().toLocaleDateString("ru", { weekday: "long", day: "numeric", month: "long" })}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-[#7c6aff]">{todayChecked} / {HABITS.length}</div>
                <div className="text-xs text-[#8080a8]">выполнено</div>
              </div>
            </div>
            <div className="w-full h-2 bg-[#2a2a4a] rounded-full mb-8 overflow-hidden">
              <div className="h-2 bg-[#7c6aff] rounded-full transition-all" style={{ width: `${(todayChecked / HABITS.length) * 100}%` }} />
            </div>
            <h2 className="font-bold mb-4">Привычки на сегодня</h2>
            <div className="flex flex-col gap-3">
              {HABIT_DETAILS.map((h) => {
                const key = `${h.name}-today`;
                const done = checked[key];
                return (
                  <button
                    key={h.name}
                    onClick={() => toggle(key)}
                    className={`flex items-center gap-4 px-5 py-4 rounded-2xl border-2 transition-all text-left ${
                      done ? "border-[#7c6aff] bg-[#7c6aff]/10" : "border-[#2a2a4a] bg-[#1a1a2e] hover:border-[#7c6aff]/50"
                    }`}
                  >
                    <span className="text-2xl">{h.icon}</span>
                    <div className="flex-1">
                      <div className={`font-semibold ${done ? "line-through text-[#6060a0]" : ""}`}>{h.name}</div>
                      <div className="text-xs text-[#6060a0]">Серия: {h.streak} дней 🔥</div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      done ? "bg-[#7c6aff] border-[#7c6aff]" : "border-[#4040a0]"
                    }`}>
                      {done && <span className="text-white text-xs">✓</span>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {page === "week" && (
          <div className="px-8 py-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: "Серия дней", value: "12 🔥" },
                { label: "Выполнено", value: "3 / 5" },
                { label: "Процент успеха", value: "74%" },
              ].map((s) => (
                <div key={s.label} className="bg-[#1a1a2e] border border-[#2a2a4a] rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#7c6aff]">{s.value}</div>
                  <div className="text-xs text-[#8080a8] mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <h2 className="text-xl font-bold mb-6">Неделя</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left text-sm text-[#8080a8] font-medium pb-4 pr-4 min-w-[130px]">Привычка</th>
                    {DAYS.map((d) => (
                      <th key={d} className="text-center text-sm text-[#8080a8] font-medium pb-4 w-10">{d}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {HABITS.map((habit) => (
                    <tr key={habit} className="border-t border-[#2a2a4a]">
                      <td className="py-3 pr-4 text-sm font-medium">{habit}</td>
                      {DAYS.map((d, di) => {
                        const key = `${habit}-${d}`;
                        const pre = di < 4;
                        const isChecked = pre || checked[key];
                        return (
                          <td key={d} className="py-3 text-center">
                            <button
                              onClick={() => !pre && toggle(key)}
                              className={`w-7 h-7 rounded-lg border-2 mx-auto transition-all ${
                                isChecked ? "bg-[#7c6aff] border-[#7c6aff]" : "border-[#2a2a4a] hover:border-[#7c6aff]"
                              }`}
                            >
                              {isChecked && <span className="text-white text-xs">✓</span>}
                            </button>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {page === "stats" && (
          <div className="px-8 py-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Статистика</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Всего выполнений", val: "174" },
                { label: "Лучшая серия", val: "21 день" },
                { label: "Активных привычек", val: "5" },
                { label: "Недель подряд", val: "6" },
              ].map((s) => (
                <div key={s.label} className="bg-[#1a1a2e] border border-[#2a2a4a] rounded-xl p-5">
                  <div className="text-3xl font-bold text-[#7c6aff] mb-1">{s.val}</div>
                  <div className="text-[#8080a8] text-xs">{s.label}</div>
                </div>
              ))}
            </div>
            <h3 className="font-bold mb-4">По привычкам</h3>
            <div className="flex flex-col gap-3">
              {HABIT_DETAILS.map((h) => (
                <div key={h.name} className="bg-[#1a1a2e] border border-[#2a2a4a] rounded-xl p-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium flex gap-2">{h.icon} {h.name}</span>
                    <span className="text-[#7c6aff] text-sm font-bold">{h.streak} 🔥</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#2a2a4a] rounded-full overflow-hidden">
                    <div className="h-1.5 bg-[#7c6aff] rounded-full" style={{ width: `${(h.total / 60) * 100}%` }} />
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-[#6060a0]">
                    <span>{h.total} выполнений</span>
                    <span>Лучшая серия: {h.best}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === "settings" && (
          <div className="px-8 py-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Настройки</h2>
            <div className="bg-[#1a1a2e] border border-[#2a2a4a] rounded-2xl divide-y divide-[#2a2a4a]">
              {[
                { label: "Напоминания", val: "21:00", toggle: true },
                { label: "Тема оформления", val: "Тёмная" },
                { label: "Язык", val: "Русский" },
                { label: "Экспорт данных", val: "CSV" },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between px-5 py-4">
                  <span className="text-sm font-medium">{s.label}</span>
                  {s.toggle ? (
                    <div className="flex items-center gap-2">
                      <span className="text-[#7c6aff] text-sm">{s.val}</span>
                      <div className="w-10 h-5 bg-[#7c6aff] rounded-full relative cursor-pointer">
                        <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5" />
                      </div>
                    </div>
                  ) : (
                    <span className="text-[#8080a8] text-sm">{s.val} ›</span>
                  )}
                </div>
              ))}
            </div>
            <button className="mt-6 w-full bg-[#7c6aff] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#6a58ee] transition-colors">
              + Добавить новую привычку
            </button>
          </div>
        )}
      </div>
      <DemoCTA />
    </div>
  );
}
