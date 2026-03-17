import { useState } from "react";
import DemoCTA from "./DemoCTA";

type Page = "calc" | "portfolio" | "faq";

const SERVICES = [
  { label: "Лендинг", price: 15000 },
  { label: "Корпоративный сайт", price: 30000 },
  { label: "Интернет-магазин", price: 50000 },
];

const EXTRAS = [
  { label: "SEO-оптимизация", price: 5000 },
  { label: "Интеграция CRM", price: 8000 },
  { label: "Онлайн-оплата", price: 6000 },
  { label: "Чат-бот", price: 10000 },
];

export default function CalculatorDemo() {
  const [page, setPage] = useState<Page>("calc");
  const [service, setService] = useState(0);
  const [extras, setExtras] = useState<number[]>([]);
  const [pages, setPages] = useState(1);

  const toggleExtra = (i: number) =>
    setExtras((p) => p.includes(i) ? p.filter((x) => x !== i) : [...p, i]);

  const base = SERVICES[service].price;
  const extrasTotal = extras.reduce((s, i) => s + EXTRAS[i].price, 0);
  const pagesExtra = (pages - 1) * 3000;
  const total = base + extrasTotal + pagesExtra;

  const nav: { id: Page; label: string }[] = [
    { id: "calc", label: "Калькулятор" },
    { id: "portfolio", label: "Портфолио" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <div className="min-h-screen bg-[#f0f4ff] text-[#1a1a3e] font-sans flex flex-col">
      {/* Header */}
      <header className="bg-[#1a1a3e] text-white px-6 py-4 flex justify-between items-center sticky top-0 z-40">
        <span className="text-xl font-bold">🔢 Калькулятор сайта</span>
        <nav className="flex gap-1">
          {nav.map((n) => (
            <button key={n.id} onClick={() => setPage(n.id)} className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${page === n.id ? "bg-blue-500 text-white font-semibold" : "text-blue-300 hover:bg-white/10"}`}>
              {n.label}
            </button>
          ))}
        </nav>
      </header>

      <div className="flex-1">
      {page === "calc" && (
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">Рассчитайте стоимость</h1>
        <p className="text-[#6060a0] mb-10">Настройте параметры и получите предварительную оценку</p>
        <div className="bg-white rounded-2xl p-6 mb-5 shadow-sm border border-[#dde4ff]">
          <h2 className="font-semibold mb-4">Тип сайта</h2>
          <div className="grid grid-cols-3 gap-3">
            {SERVICES.map((s, i) => (
              <button key={s.label} onClick={() => setService(i)} className={`p-4 rounded-xl border-2 text-sm font-medium transition-all text-center ${service === i ? "border-blue-600 bg-blue-50 text-blue-700" : "border-[#dde4ff] hover:border-blue-300"}`}>
                <div className="font-bold text-base mb-1">{s.label}</div>
                <div className="text-xs text-[#8080b0]">от {s.price.toLocaleString("ru")} ₽</div>
              </button>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 mb-5 shadow-sm border border-[#dde4ff]">
          <h2 className="font-semibold mb-4">Количество страниц: <span className="text-blue-600">{pages}</span></h2>
          <input type="range" min={1} max={20} value={pages} onChange={(e) => setPages(Number(e.target.value))} className="w-full accent-blue-600" />
          <div className="flex justify-between text-xs text-[#8080b0] mt-1"><span>1 стр.</span><span>20 стр.</span></div>
        </div>
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm border border-[#dde4ff]">
          <h2 className="font-semibold mb-4">Дополнительно</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {EXTRAS.map((e, i) => (
              <button key={e.label} onClick={() => toggleExtra(i)} className={`flex justify-between items-center p-3 rounded-xl border-2 text-sm transition-all ${extras.includes(i) ? "border-blue-600 bg-blue-50 text-blue-700" : "border-[#dde4ff] hover:border-blue-300"}`}>
                <span>{e.label}</span>
                <span className="font-semibold">+{e.price.toLocaleString("ru")} ₽</span>
              </button>
            ))}
          </div>
        </div>
        <div className="bg-[#1a1a3e] text-white rounded-2xl p-6 flex justify-between items-center">
          <div>
            <p className="text-blue-300 text-sm mb-1">Итоговая стоимость</p>
            <p className="text-4xl font-bold">{total.toLocaleString("ru")} ₽</p>
          </div>
          <a href="https://t.me/webozhitel" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors">
            Заказать
          </a>
        </div>
      </main>
      )}

      {page === "portfolio" && (
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold mb-8">Примеры работ</h1>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { name: "Лендинг для стоматологии", type: "Лендинг", price: "18 000 ₽" },
              { name: "Сайт строительной компании", type: "Корпоративный", price: "35 000 ₽" },
              { name: "Интернет-магазин одежды", type: "Интернет-магазин", price: "65 000 ₽" },
              { name: "Портфолио дизайнера", type: "Лендинг", price: "15 000 ₽" },
            ].map((p) => (
              <div key={p.name} className="bg-white border border-[#dde4ff] rounded-2xl p-5 hover:shadow-sm transition-shadow">
                <div className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold mb-3 inline-block">{p.type}</div>
                <div className="font-semibold mb-2">{p.name}</div>
                <div className="text-blue-600 font-bold">{p.price}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {page === "faq" && (
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold mb-8">Частые вопросы</h1>
          <div className="flex flex-col gap-4">
            {[
              { q: "Сколько времени занимает разработка?", a: "Лендинг — 3–7 дней. Корпоративный сайт — 2–4 недели. Интернет-магазин — 4–8 недель." },
              { q: "Что входит в стоимость?", a: "Дизайн, вёрстка, адаптив под мобильные, базовая SEO-настройка и 1 месяц поддержки." },
              { q: "Нужен ли хостинг?", a: "Помогу с выбором и настройкой хостинга и домена. Стоимость хостинга оплачивается отдельно." },
              { q: "Можно ли потом добавить функции?", a: "Да, сайт разрабатывается с учётом расширяемости. Новые функции добавляются по отдельному договору." },
            ].map((f) => (
              <div key={f.q} className="bg-white border border-[#dde4ff] rounded-xl p-5">
                <div className="font-semibold mb-2 text-[#1a1a3e]">{f.q}</div>
                <p className="text-[#6060a0] text-sm">{f.a}</p>
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
