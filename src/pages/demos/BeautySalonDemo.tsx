import { useState } from "react";
import DemoCTA from "./DemoCTA";

type Page = "home" | "services" | "masters" | "contacts";

const SERVICES_DATA = [
  { cat: "Волосы", items: [
    { name: "Стрижка женская", price: "от 1 500 ₽", time: "60 мин", emoji: "✂️" },
    { name: "Стрижка мужская", price: "от 900 ₽", time: "40 мин", emoji: "✂️" },
    { name: "Окрашивание", price: "от 4 000 ₽", time: "150 мин", emoji: "🎨" },
    { name: "Укладка", price: "от 1 200 ₽", time: "45 мин", emoji: "💇" },
  ]},
  { cat: "Ногти", items: [
    { name: "Маникюр", price: "от 1 200 ₽", time: "60 мин", emoji: "💅" },
    { name: "Педикюр", price: "от 1 500 ₽", time: "75 мин", emoji: "👣" },
    { name: "Наращивание", price: "от 2 500 ₽", time: "120 мин", emoji: "✨" },
  ]},
  { cat: "Лицо", items: [
    { name: "Чистка лица", price: "от 2 500 ₽", time: "90 мин", emoji: "🧖" },
    { name: "Брови и ресницы", price: "от 800 ₽", time: "45 мин", emoji: "👁️" },
    { name: "Макияж", price: "от 2 000 ₽", time: "60 мин", emoji: "💄" },
  ]},
];

const MASTERS = [
  { name: "Анна Волкова", role: "Стилист-колорист", exp: "8 лет", emoji: "👩‍🎨", rating: 5.0 },
  { name: "Ольга Синицына", role: "Мастер маникюра", exp: "5 лет", emoji: "💅", rating: 4.9 },
  { name: "Екатерина Лис", role: "Косметолог", exp: "6 лет", emoji: "🧖", rating: 4.8 },
  { name: "Ирина Ромова", role: "Бровист / визажист", exp: "4 года", emoji: "🎨", rating: 5.0 },
];

export default function BeautySalonDemo() {
  const [page, setPage] = useState<Page>("home");
  const [serviceCat, setServiceCat] = useState(0);

  const nav: { id: Page; label: string }[] = [
    { id: "home", label: "Главная" },
    { id: "services", label: "Услуги" },
    { id: "masters", label: "Мастера" },
    { id: "contacts", label: "Запись" },
  ];

  return (
    <div className="min-h-screen bg-[#fdf6f0] text-[#2d1b12] font-sans flex flex-col">
      <header className="px-6 py-4 flex justify-between items-center border-b border-[#f0d8c8] sticky top-0 bg-[#fdf6f0] z-40">
        <button onClick={() => setPage("home")} className="text-xl font-bold text-[#c97a5a] hover:opacity-80 transition-opacity">
          ✦ Bloom Studio
        </button>
        <nav className="flex gap-1">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => setPage(n.id)}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                page === n.id
                  ? "bg-[#c97a5a] text-white font-semibold"
                  : "text-[#7a5a4a] hover:text-[#c97a5a]"
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
              <p className="text-[#c97a5a] text-sm tracking-widest uppercase mb-4">Салон красоты · Москва</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Ваша красота —<br />
                <span className="text-[#c97a5a]">наша работа</span>
              </h1>
              <p className="text-[#7a5a4a] text-xl mb-10 max-w-xl mx-auto">
                Профессиональный уход за волосами, лицом и телом. Запись онлайн за 1 минуту.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button onClick={() => setPage("contacts")} className="bg-[#c97a5a] text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#b06040] transition-colors shadow-lg">
                  Записаться онлайн
                </button>
                <button onClick={() => setPage("services")} className="border-2 border-[#c97a5a] text-[#c97a5a] px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#fff0e8] transition-colors">
                  Прайс-лист
                </button>
              </div>
            </section>
            <section className="px-8 py-8 max-w-4xl mx-auto grid sm:grid-cols-3 gap-5 mb-8">
              {[
                { icon: "⭐", title: "Рейтинг 4.9", text: "На основе 300+ отзывов" },
                { icon: "👩‍🎨", title: "4 мастера", text: "Опыт от 4 до 8 лет" },
                { icon: "🕐", title: "Работаем 9–21", text: "Ежедневно, без выходных" },
              ].map((f) => (
                <div key={f.title} className="bg-white border border-[#f0d8c8] rounded-2xl p-6 text-center hover:shadow-sm transition-shadow">
                  <div className="text-3xl mb-2">{f.icon}</div>
                  <div className="font-semibold mb-1">{f.title}</div>
                  <p className="text-[#7a5a4a] text-sm">{f.text}</p>
                </div>
              ))}
            </section>
            <section className="px-8 py-8 max-w-4xl mx-auto bg-[#fff8f4] rounded-3xl border border-[#f0d8c8] mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Популярные услуги</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { name: "Стрижка", price: "от 900 ₽", emoji: "✂️" },
                  { name: "Маникюр", price: "от 1 200 ₽", emoji: "💅" },
                  { name: "Окрашивание", price: "от 4 000 ₽", emoji: "🎨" },
                ].map((s) => (
                  <div key={s.name} className="bg-white border border-[#f0d8c8] rounded-xl p-5 text-center hover:border-[#c97a5a] transition-colors cursor-pointer" onClick={() => setPage("services")}>
                    <div className="text-3xl mb-2">{s.emoji}</div>
                    <div className="font-semibold">{s.name}</div>
                    <div className="text-[#c97a5a] text-sm mt-1">{s.price}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {page === "services" && (
          <div className="px-8 py-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Услуги и цены</h2>
            <div className="flex gap-2 mb-8 flex-wrap">
              {SERVICES_DATA.map((c, i) => (
                <button
                  key={c.cat}
                  onClick={() => setServiceCat(i)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    serviceCat === i ? "bg-[#c97a5a] text-white" : "bg-white border border-[#f0d8c8] text-[#7a5a4a] hover:border-[#c97a5a]"
                  }`}
                >
                  {c.cat}
                </button>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {SERVICES_DATA[serviceCat].items.map((s) => (
                <div key={s.name} className="bg-white border border-[#f0d8c8] rounded-2xl p-5 flex items-start gap-4 hover:border-[#c97a5a] hover:shadow-sm transition-all">
                  <div className="text-3xl">{s.emoji}</div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">{s.name}</div>
                    <div className="text-xs text-[#9a7a6a] mb-2">⏱ {s.time}</div>
                    <div className="text-[#c97a5a] font-semibold">{s.price}</div>
                  </div>
                  <button onClick={() => setPage("contacts")} className="bg-[#fdf0e8] text-[#c97a5a] text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-[#c97a5a] hover:text-white transition-colors shrink-0">
                    Записаться
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === "masters" && (
          <div className="px-8 py-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-3">Наши мастера</h2>
            <p className="text-[#7a5a4a] mb-8">Профессионалы с многолетним опытом и постоянным обучением</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {MASTERS.map((m) => (
                <div key={m.name} className="bg-white border border-[#f0d8c8] rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#fde8d8] to-[#f0c8b0] rounded-2xl flex items-center justify-center text-3xl">
                      {m.emoji}
                    </div>
                    <div>
                      <div className="font-bold text-lg">{m.name}</div>
                      <div className="text-[#c97a5a] text-sm">{m.role}</div>
                      <div className="text-[#9a7a6a] text-xs mt-0.5">Опыт: {m.exp}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#c97a5a] text-sm">★</span>
                      ))}
                      <span className="text-[#7a5a4a] text-xs ml-2">{m.rating}</span>
                    </div>
                    <button onClick={() => setPage("contacts")} className="bg-[#c97a5a] text-white text-xs px-4 py-1.5 rounded-full font-semibold hover:bg-[#b06040] transition-colors">
                      Записаться
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === "contacts" && (
          <div className="px-8 py-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-3">Онлайн-запись</h2>
            <p className="text-[#7a5a4a] mb-8">Выберите услугу и мастера — мы свяжемся для подтверждения</p>
            <div className="bg-white border border-[#f0d8c8] rounded-2xl p-6 mb-6">
              <div className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input placeholder="Ваше имя" className="border border-[#f0d8c8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c97a5a] transition-colors" />
                  <input placeholder="Телефон или Telegram" className="border border-[#f0d8c8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c97a5a] transition-colors" />
                </div>
                <select className="border border-[#f0d8c8] rounded-xl px-4 py-3 text-sm text-[#7a5a4a] focus:outline-none focus:border-[#c97a5a] transition-colors">
                  <option value="">Выберите услугу</option>
                  {SERVICES_DATA.flatMap(c => c.items).map(s => <option key={s.name}>{s.name} — {s.price}</option>)}
                </select>
                <select className="border border-[#f0d8c8] rounded-xl px-4 py-3 text-sm text-[#7a5a4a] focus:outline-none focus:border-[#c97a5a] transition-colors">
                  <option value="">Выберите мастера</option>
                  {MASTERS.map(m => <option key={m.name}>{m.name} — {m.role}</option>)}
                </select>
                <input type="date" className="border border-[#f0d8c8] rounded-xl px-4 py-3 text-sm text-[#7a5a4a] focus:outline-none focus:border-[#c97a5a] transition-colors" />
                <button className="bg-[#c97a5a] text-white py-3.5 rounded-xl font-semibold hover:bg-[#b06040] transition-colors">
                  Записаться
                </button>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: "📍", label: "Адрес", val: "ул. Цветочная, 5, Москва" },
                { icon: "🕐", label: "Режим", val: "Ежедневно 9:00–21:00" },
              ].map((c) => (
                <div key={c.label} className="bg-white border border-[#f0d8c8] rounded-xl p-4 flex gap-3">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <div className="text-xs text-[#9a7a6a] mb-0.5">{c.label}</div>
                    <div className="font-medium text-sm">{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <footer className="border-t border-[#f0d8c8] px-8 py-6 text-center text-[#7a5a4a] text-sm">
        <p>© 2025 Bloom Studio · ул. Цветочная, 5 · Ежедневно 9:00–21:00</p>
      </footer>
      <DemoCTA />
    </div>
  );
}
