import { useState } from "react";
import DemoCTA from "./DemoCTA";

type Page = "dashboard" | "deals" | "contacts" | "automation";

const DEALS = [
  { name: "ООО «Технолоджи»", stage: "Переговоры", value: "150 000 ₽", score: 92, contact: "Дмитрий В.", days: 3 },
  { name: "ИП Соколов А.В.", stage: "КП отправлено", value: "45 000 ₽", score: 67, contact: "Алексей С.", days: 8 },
  { name: "Компания «Альфа»", stage: "Новый лид", value: "280 000 ₽", score: 84, contact: "Ирина М.", days: 1 },
  { name: "Стартап «Вектор»", stage: "Согласование", value: "95 000 ₽", score: 51, contact: "Павел К.", days: 12 },
  { name: "Группа «Прогресс»", stage: "Закрыто ✓", value: "320 000 ₽", score: 100, contact: "Наталья Р.", days: 0 },
];

const STAGES = ["Новый лид", "КП отправлено", "Переговоры", "Согласование", "Закрыто ✓"];

export default function AICRMDemo() {
  const [page, setPage] = useState<Page>("dashboard");
  const [activeStage, setActiveStage] = useState<string | null>(null);

  const nav: { id: Page; label: string }[] = [
    { id: "dashboard", label: "Дашборд" },
    { id: "deals", label: "Сделки" },
    { id: "contacts", label: "Контакты" },
    { id: "automation", label: "AI-авто" },
  ];

  const filtered = activeStage ? DEALS.filter(d => d.stage === activeStage) : DEALS;

  return (
    <div className="min-h-screen bg-[#f5f5ff] text-[#1a1a35] font-sans flex flex-col">
      <header className="bg-[#1a1a35] text-white px-6 py-4 flex justify-between items-center sticky top-0 z-40">
        <span className="text-lg font-bold text-violet-300">⚡ AI CRM</span>
        <nav className="flex gap-1">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => setPage(n.id)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                page === n.id
                  ? "bg-violet-600 text-white font-semibold"
                  : "text-violet-300 hover:bg-white/10"
              }`}
            >
              {n.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2 bg-violet-900/50 px-3 py-1.5 rounded-full">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-violet-300 hidden sm:block">AI активен</span>
        </div>
      </header>

      <div className="flex-1 px-6 py-8 max-w-5xl mx-auto w-full">
        {page === "dashboard" && (
          <div>
            <h1 className="text-2xl font-bold mb-6">Обзор продаж</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Лидов в работе", val: "24", delta: "+3 сегодня" },
                { label: "AI оценило", val: "19", delta: "из 24" },
                { label: "Конверсия", val: "34%", delta: "+8% за месяц" },
                { label: "Выручка/мес", val: "1.2M ₽", delta: "прогноз AI" },
              ].map((s) => (
                <div key={s.label} className="bg-white border border-[#dddaff] rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-violet-700">{s.val}</div>
                  <div className="text-xs text-[#8080a8] mt-0.5">{s.label}</div>
                  <div className="text-xs text-green-600 mt-1 font-medium">{s.delta}</div>
                </div>
              ))}
            </div>
            <div className="bg-white border border-[#dddaff] rounded-2xl p-6 shadow-sm mb-5">
              <h3 className="font-semibold mb-4 flex items-center gap-2">🤖 AI-рекомендации на сегодня</h3>
              <div className="flex flex-col gap-2">
                {[
                  "ООО «Технолоджи» — высокая вероятность закрытия. Рекомендую назначить встречу.",
                  "Компания «Альфа» — интерес высокий, но долгий цикл. Отправьте кейсы.",
                  "ИП Соколов — нет активности 5 дней. Напомните о себе.",
                ].map((tip, i) => (
                  <div key={i} className="flex gap-3 items-start bg-violet-50 border border-violet-100 rounded-lg px-4 py-3 text-sm text-violet-800">
                    <span className="text-violet-400 mt-0.5">▸</span>
                    {tip}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-[#dddaff] rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold mb-4">Воронка продаж</h3>
              <div className="flex flex-col gap-2">
                {STAGES.map((stage, i) => {
                  const count = DEALS.filter(d => d.stage === stage).length;
                  return (
                    <div key={stage} className="flex items-center gap-3">
                      <div className="w-28 text-xs text-[#8080a8] shrink-0">{stage}</div>
                      <div className="flex-1 h-6 bg-[#f0f0ff] rounded overflow-hidden">
                        <div className="h-6 bg-violet-500 rounded transition-all flex items-center px-2 text-white text-xs font-medium" style={{ width: `${Math.max(count * 25, 8)}%` }}>
                          {count}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {page === "deals" && (
          <div>
            <div className="flex justify-between items-center mb-5">
              <h1 className="text-2xl font-bold">Сделки</h1>
              <button className="bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-violet-500 transition-colors">
                + Новая сделка
              </button>
            </div>
            <div className="flex gap-2 mb-5 flex-wrap">
              <button onClick={() => setActiveStage(null)} className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${!activeStage ? "bg-violet-600 text-white" : "bg-white border border-[#dddaff] text-[#8080a8]"}`}>
                Все ({DEALS.length})
              </button>
              {STAGES.map(s => (
                <button key={s} onClick={() => setActiveStage(s === activeStage ? null : s)} className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${activeStage === s ? "bg-violet-600 text-white" : "bg-white border border-[#dddaff] text-[#8080a8]"}`}>
                  {s}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {filtered.map((d) => (
                <div key={d.name} className="bg-white border border-[#dddaff] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-1">
                    <div className="font-semibold">{d.name}</div>
                    <div className="text-sm text-[#8080a8] mt-0.5">Контакт: {d.contact} · {d.days > 0 ? `${d.days} дн. без активности` : "Закрыто"}</div>
                  </div>
                  <div className="text-lg font-bold text-violet-700">{d.value}</div>
                  <span className="text-xs bg-violet-100 text-violet-700 px-3 py-1 rounded-full font-medium w-fit">{d.stage}</span>
                  <div className="flex items-center gap-2 w-28 shrink-0">
                    <div className="flex-1 h-2 bg-[#e8e8ff] rounded-full overflow-hidden">
                      <div className={`h-2 rounded-full ${d.score >= 80 ? "bg-green-500" : d.score >= 60 ? "bg-yellow-500" : "bg-red-400"}`} style={{ width: `${d.score}%` }} />
                    </div>
                    <span className="text-xs font-bold text-[#5050a8]">{d.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === "contacts" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Контакты</h1>
              <button className="bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-violet-500 transition-colors">
                + Добавить
              </button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {DEALS.map((d) => (
                <div key={d.contact} className="bg-white border border-[#dddaff] rounded-xl p-5 hover:shadow-sm transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center text-violet-700 font-bold text-sm">
                      {d.contact.split(" ").map(w => w[0]).join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{d.contact}</div>
                      <div className="text-xs text-[#8080a8]">{d.name}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs bg-violet-50 text-violet-700 px-2 py-1 rounded-md">{d.stage}</span>
                    <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-md">{d.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === "automation" && (
          <div>
            <h1 className="text-2xl font-bold mb-2">AI-автоматизация</h1>
            <p className="text-[#8080a8] mb-6">Умные триггеры, которые работают без участия человека</p>
            <div className="flex flex-col gap-4">
              {[
                { trigger: "Новый лид создан", action: "AI отправляет welcome-письмо и оценивает потенциал", active: true },
                { trigger: "Нет активности 5 дней", action: "AI напоминает менеджеру и предлагает шаблон для follow-up", active: true },
                { trigger: "Score выше 80", action: "Уведомление руководителю: сделка созрела для закрытия", active: true },
                { trigger: "КП просмотрено", action: "Автоматическое письмо через 1 час с предложением встречи", active: false },
                { trigger: "Сделка закрыта", action: "Запуск NPS-опроса и создание задачи по онбордингу", active: false },
              ].map((a, i) => (
                <div key={i} className="bg-white border border-[#dddaff] rounded-xl p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs bg-violet-100 text-violet-700 px-2 py-0.5 rounded font-mono">ЕСЛИ</span>
                        <span className="text-sm font-medium">{a.trigger}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-mono">ТО</span>
                        <span className="text-sm text-[#8080a8]">{a.action}</span>
                      </div>
                    </div>
                    <div className={`w-10 h-5 rounded-full relative cursor-pointer shrink-0 mt-0.5 ${a.active ? "bg-violet-600" : "bg-[#e8e8ff]"}`}>
                      <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all ${a.active ? "right-0.5" : "left-0.5"}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <DemoCTA />
    </div>
  );
}
