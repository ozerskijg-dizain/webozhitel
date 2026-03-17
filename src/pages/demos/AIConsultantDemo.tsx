import { useState } from "react";
import DemoCTA from "./DemoCTA";

type Page = "home" | "chat" | "pricing" | "about";

const INITIAL_MESSAGES = [
  { role: "assistant", text: "Привет! Я ваш AI-консультант. Чем могу помочь?" },
  { role: "user", text: "Как вы можете помочь моему бизнесу?" },
  { role: "assistant", text: "Я могу отвечать на вопросы клиентов 24/7, помогать с продажами, обрабатывать заявки и предоставлять аналитику по обращениям. Что именно вас интересует?" },
];

const USE_CASES = [
  { icon: "💬", title: "Поддержка клиентов", desc: "Отвечает на вопросы, обрабатывает обращения в любое время суток" },
  { icon: "🛒", title: "Продажи", desc: "Консультирует покупателей, помогает выбрать продукт, оформляет заказы" },
  { icon: "📊", title: "Лидогенерация", desc: "Квалифицирует лидов и передаёт горячие контакты в CRM" },
  { icon: "📅", title: "Запись", desc: "Принимает онлайн-записи и напоминает клиентам о визитах" },
  { icon: "📚", title: "База знаний", desc: "Отвечает по документации, регламентам и FAQ вашей компании" },
  { icon: "🔔", title: "Уведомления", desc: "Рассылает сообщения и обновления статусов по заказам" },
];

export default function AIConsultantDemo() {
  const [page, setPage] = useState<Page>("home");
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages((p) => [
      ...p,
      { role: "user", text: input },
      { role: "assistant", text: "Отличный вопрос! Это демонстрационный интерфейс AI-консультанта. В реальном проекте здесь будет подключён AI с базой знаний вашего бизнеса." },
    ]);
    setInput("");
  };

  const nav: { id: Page; label: string }[] = [
    { id: "home", label: "Главная" },
    { id: "chat", label: "Демо-чат" },
    { id: "pricing", label: "Тарифы" },
    { id: "about", label: "О продукте" },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d1a] text-[#e8e8ff] font-sans flex flex-col">
      <header className="px-6 py-4 border-b border-[#1e1e3a] flex justify-between items-center sticky top-0 bg-[#0d0d1a] z-40">
        <button onClick={() => setPage("home")} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-7 h-7 bg-gradient-to-br from-violet-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">AI</div>
          <span className="font-semibold text-sm">Консультант</span>
        </button>
        <nav className="flex gap-1">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => setPage(n.id)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                page === n.id
                  ? "bg-violet-600 text-white font-semibold"
                  : "text-[#8080b8] hover:text-[#e8e8ff] hover:bg-[#1e1e3a]"
              }`}
            >
              {n.label}
            </button>
          ))}
        </nav>
      </header>

      <div className="flex-1">
        {page === "home" && (
          <div>
            <section className="px-8 py-20 max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-violet-900/30 border border-violet-800/50 text-violet-300 text-xs px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                Работает 24/7 без выходных
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                AI-консультант<br />
                <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">для вашего бизнеса</span>
              </h1>
              <p className="text-[#8080b8] text-xl mb-10 max-w-2xl mx-auto">
                Отвечает на вопросы клиентов, обрабатывает заявки и увеличивает продажи — автоматически.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button onClick={() => setPage("chat")} className="bg-violet-600 hover:bg-violet-500 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors">
                  Попробовать демо
                </button>
                <button onClick={() => setPage("pricing")} className="border border-[#2e2e5a] text-[#8080b8] px-8 py-3.5 rounded-xl font-semibold hover:border-violet-600 hover:text-violet-400 transition-colors">
                  Тарифы
                </button>
              </div>
            </section>
            <section className="px-8 py-10 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Что умеет AI-консультант</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {USE_CASES.map((u) => (
                  <div key={u.title} className="bg-[#1e1e3a] border border-[#2e2e5a] rounded-2xl p-5 hover:border-violet-600/50 transition-colors">
                    <div className="text-3xl mb-3">{u.icon}</div>
                    <div className="font-semibold mb-2">{u.title}</div>
                    <p className="text-[#8080b8] text-sm">{u.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {page === "chat" && (
          <div className="flex flex-col h-[calc(100vh-57px)]">
            <div className="px-4 py-3 border-b border-[#1e1e3a] flex items-center gap-3 bg-[#0d0d1a]">
              <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">AI</div>
              <div>
                <div className="font-semibold text-sm">Бизнес-консультант</div>
                <div className="text-xs text-green-400">● Онлайн</div>
              </div>
              <span className="ml-auto text-xs text-[#8080b8] bg-[#1e1e3a] px-3 py-1 rounded-full">Демо-режим</span>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-4 max-w-2xl mx-auto w-full">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-sm px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-violet-600 text-white rounded-br-sm"
                      : "bg-[#1e1e3a] text-[#e8e8ff] rounded-bl-sm border border-[#2e2e5a]"
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-[#1e1e3a] px-6 py-4">
              <div className="max-w-2xl mx-auto flex gap-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Введите сообщение..."
                  className="flex-1 bg-[#1e1e3a] border border-[#2e2e5a] rounded-xl px-4 py-3 text-sm text-[#e8e8ff] placeholder-[#5050a0] focus:outline-none focus:border-violet-500 transition-colors"
                />
                <button onClick={send} className="bg-violet-600 hover:bg-violet-500 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-colors">
                  Отправить
                </button>
              </div>
            </div>
          </div>
        )}

        {page === "pricing" && (
          <div className="px-8 py-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-center">Тарифы</h2>
            <p className="text-[#8080b8] text-center mb-10">Начните бесплатно, масштабируйте по мере роста</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { name: "Старт", price: "0 ₽", period: "/мес", features: ["500 сообщений/мес", "1 бот", "Базовые сценарии", "Email-поддержка"], highlight: false },
                { name: "Бизнес", price: "4 900 ₽", period: "/мес", features: ["10 000 сообщений/мес", "5 ботов", "CRM-интеграция", "Аналитика", "Приоритетная поддержка"], highlight: true },
                { name: "Энтерпрайз", price: "По запросу", period: "", features: ["Безлимит", "Любое кол-во ботов", "Кастом интеграции", "Выделенный менеджер"], highlight: false },
              ].map((p) => (
                <div key={p.name} className={`rounded-2xl p-6 border ${p.highlight ? "border-violet-500 bg-violet-600/10" : "border-[#2e2e5a] bg-[#1e1e3a]"}`}>
                  {p.highlight && <div className="text-xs text-violet-400 font-semibold mb-3 uppercase tracking-wider">Популярный</div>}
                  <div className="font-bold text-lg mb-1">{p.name}</div>
                  <div className="text-3xl font-bold mb-0.5 text-[#e8e8ff]">{p.price}</div>
                  <div className="text-[#6060a0] text-xs mb-5">{p.period}</div>
                  <ul className="flex flex-col gap-2 mb-6">
                    {p.features.map(f => (
                      <li key={f} className="text-sm text-[#a0a0c8] flex gap-2"><span className="text-violet-400">✓</span>{f}</li>
                    ))}
                  </ul>
                  <button className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    p.highlight ? "bg-violet-600 hover:bg-violet-500 text-white" : "bg-[#2e2e5a] hover:bg-[#3e3e6a] text-[#e8e8ff]"
                  }`}>
                    Начать
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === "about" && (
          <div className="px-8 py-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">О продукте</h2>
            <p className="text-[#8080b8] text-lg leading-relaxed mb-8">
              AI-консультант — это интеллектуальный чат-бот, обученный на базе знаний вашей компании. Он отвечает на вопросы как живой оператор, но без усталости и выходных.
            </p>
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {[
                { icon: "⚡", title: "Быстрое внедрение", desc: "Запуск за 3–7 дней после предоставления материалов" },
                { icon: "🔗", title: "Интеграции", desc: "CRM, Telegram, WhatsApp, сайт, Instagram" },
                { icon: "📈", title: "Аналитика", desc: "Статистика диалогов, конверсия, популярные вопросы" },
                { icon: "🔒", title: "Безопасность", desc: "Данные клиентов под защитой, GDPR-совместимость" },
              ].map((f) => (
                <div key={f.title} className="bg-[#1e1e3a] border border-[#2e2e5a] rounded-xl p-5">
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <div className="font-semibold mb-1">{f.title}</div>
                  <p className="text-[#6060a0] text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {page !== "chat" && <DemoCTA />}
      {page === "chat" && <DemoCTA />}
    </div>
  );
}
