import { useState } from "react";
import DemoCTA from "./DemoCTA";

type Page = "home" | "menu" | "about" | "contacts";

const MENU = [
  { cat: "Кофе", items: [
    { name: "Эспрессо", price: "150 ₽", desc: "Крепкий, насыщенный" },
    { name: "Капучино", price: "220 ₽", desc: "Нежная молочная пена" },
    { name: "Флэт уайт", price: "240 ₽", desc: "Двойной эспрессо с молоком" },
    { name: "Раф кофе", price: "280 ₽", desc: "Сливки, ваниль, эспрессо" },
  ]},
  { cat: "Напитки", items: [
    { name: "Матча латте", price: "290 ₽", desc: "Японский зелёный чай" },
    { name: "Какао", price: "200 ₽", desc: "Насыщенный горячий шоколад" },
    { name: "Лимонад", price: "180 ₽", desc: "Домашний, сезонный" },
  ]},
  { cat: "Еда", items: [
    { name: "Круассан", price: "180 ₽", desc: "Свежая выпечка каждое утро" },
    { name: "Авокадо-тост", price: "320 ₽", desc: "С яйцом пашот" },
    { name: "Сырник", price: "250 ₽", desc: "Со сметаной и джемом" },
  ]},
];

export default function CoffeeDemo() {
  const [page, setPage] = useState<Page>("home");
  const [menuCat, setMenuCat] = useState(0);

  const nav: { id: Page; label: string }[] = [
    { id: "home", label: "Главная" },
    { id: "menu", label: "Меню" },
    { id: "about", label: "О нас" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-[#1a0f00] text-[#f5e6d3] font-sans flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center border-b border-[#3d2a15] sticky top-0 bg-[#1a0f00] z-40">
        <button onClick={() => setPage("home")} className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          ☕ Кофейня «Зерно»
        </button>
        <nav className="flex gap-1">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => setPage(n.id)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                page === n.id
                  ? "bg-[#c9a97a] text-[#1a0f00] font-semibold"
                  : "text-[#c9a97a] hover:bg-[#2a1a08]"
              }`}
            >
              {n.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Pages */}
      <div className="flex-1">
        {page === "home" && (
          <div>
            <section className="px-8 py-24 max-w-4xl mx-auto text-center">
              <p className="text-[#c9a97a] text-sm tracking-widest uppercase mb-4">Specialty coffee · Москва</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Каждая чашка —<br />
                <span className="text-[#c9a97a]">маленькое счастье</span>
              </h1>
              <p className="text-[#a08060] text-xl mb-10 max-w-xl mx-auto">
                Свежеобжаренный спешелти кофе, домашняя выпечка и уютная атмосфера в самом центре города.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button onClick={() => setPage("menu")} className="bg-[#c9a97a] text-[#1a0f00] px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#e0c090] transition-colors">
                  Смотреть меню
                </button>
                <button onClick={() => setPage("contacts")} className="border border-[#3d2a15] px-8 py-3.5 rounded-xl text-sm text-[#c9a97a] hover:border-[#c9a97a] transition-colors">
                  Забронировать стол
                </button>
              </div>
            </section>
            <section className="px-8 py-12 max-w-4xl mx-auto grid sm:grid-cols-3 gap-6">
              {[
                { icon: "🫘", title: "Свежеобжаренный кофе", text: "Обжариваем зерно сами, каждую неделю" },
                { icon: "🥐", title: "Домашняя выпечка", text: "Круассаны, сырники и тосты — каждое утро" },
                { icon: "📍", title: "Уютное место", text: "Центр города, тихий зал, быстрый Wi-Fi" },
              ].map((f) => (
                <div key={f.title} className="bg-[#2a1a08] border border-[#3d2a15] rounded-2xl p-6 text-center">
                  <div className="text-4xl mb-3">{f.icon}</div>
                  <div className="font-semibold mb-2">{f.title}</div>
                  <p className="text-[#a08060] text-sm">{f.text}</p>
                </div>
              ))}
            </section>
          </div>
        )}

        {page === "menu" && (
          <div className="px-8 py-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Наше меню</h2>
            <div className="flex gap-2 mb-8">
              {MENU.map((c, i) => (
                <button
                  key={c.cat}
                  onClick={() => setMenuCat(i)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    menuCat === i ? "bg-[#c9a97a] text-[#1a0f00]" : "bg-[#2a1a08] text-[#c9a97a] border border-[#3d2a15] hover:border-[#c9a97a]"
                  }`}
                >
                  {c.cat}
                </button>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {MENU[menuCat].items.map((item) => (
                <div key={item.name} className="bg-[#2a1a08] border border-[#3d2a15] rounded-xl p-5 hover:border-[#c9a97a] transition-colors">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-[#c9a97a] font-bold">{item.price}</span>
                  </div>
                  <p className="text-[#a08060] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === "about" && (
          <div className="px-8 py-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">О нас</h2>
            <p className="text-[#a08060] text-lg leading-relaxed mb-8">
              Кофейня «Зерно» открылась в 2019 году. Мы верим, что хороший кофе — это не просто напиток, это ритуал и пространство для общения.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                { label: "Лет в бизнесе", val: "6" },
                { label: "Чашек в день", val: "200+" },
                { label: "Сортов кофе", val: "12" },
                { label: "Постоянных гостей", val: "500+" },
              ].map((s) => (
                <div key={s.label} className="bg-[#2a1a08] border border-[#3d2a15] rounded-xl p-5">
                  <div className="text-3xl font-bold text-[#c9a97a]">{s.val}</div>
                  <div className="text-[#a08060] text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-[#2a1a08] border border-[#3d2a15] rounded-2xl p-6">
              <h3 className="font-bold mb-3 text-[#c9a97a]">Наша команда</h3>
              <div className="flex flex-col gap-3">
                {[
                  { name: "Алексей Зернов", role: "Владелец и бариста", emoji: "👨‍🍳" },
                  { name: "Мария Кофеева", role: "Шеф-бариста", emoji: "👩‍🍳" },
                  { name: "Иван Пахнет", role: "Обжарщик кофе", emoji: "🧑‍🏭" },
                ].map((m) => (
                  <div key={m.name} className="flex items-center gap-3">
                    <span className="text-2xl">{m.emoji}</span>
                    <div>
                      <div className="font-medium">{m.name}</div>
                      <div className="text-[#a08060] text-xs">{m.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {page === "contacts" && (
          <div className="px-8 py-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Контакты и бронирование</h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                { icon: "📍", label: "Адрес", val: "ул. Кофейная, 12, Москва" },
                { icon: "🕐", label: "Режим работы", val: "Пн–Вс 8:00–22:00" },
                { icon: "📞", label: "Телефон", val: "+7 (495) 000-00-00" },
                { icon: "📷", label: "Instagram", val: "@zerno_coffee" },
              ].map((c) => (
                <div key={c.label} className="bg-[#2a1a08] border border-[#3d2a15] rounded-xl p-5 flex gap-3">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <div className="text-[#a08060] text-xs mb-1">{c.label}</div>
                    <div className="font-medium">{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#2a1a08] border border-[#3d2a15] rounded-2xl p-6">
              <h3 className="font-bold mb-5">Забронировать стол</h3>
              <div className="flex flex-col gap-4">
                <input placeholder="Ваше имя" className="bg-[#1a0f00] border border-[#3d2a15] rounded-xl px-4 py-3 text-sm placeholder-[#5a4030] focus:outline-none focus:border-[#c9a97a] transition-colors" />
                <input placeholder="Телефон или Telegram" className="bg-[#1a0f00] border border-[#3d2a15] rounded-xl px-4 py-3 text-sm placeholder-[#5a4030] focus:outline-none focus:border-[#c9a97a] transition-colors" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="date" className="bg-[#1a0f00] border border-[#3d2a15] rounded-xl px-4 py-3 text-sm text-[#a08060] focus:outline-none focus:border-[#c9a97a] transition-colors" />
                  <select className="bg-[#1a0f00] border border-[#3d2a15] rounded-xl px-4 py-3 text-sm text-[#a08060] focus:outline-none focus:border-[#c9a97a] transition-colors">
                    <option>Количество гостей</option>
                    {[1,2,3,4,5,6].map(n => <option key={n}>{n} {n === 1 ? "гость" : n < 5 ? "гостя" : "гостей"}</option>)}
                  </select>
                </div>
                <button className="bg-[#c9a97a] text-[#1a0f00] py-3 rounded-xl font-semibold text-sm hover:bg-[#e0c090] transition-colors">
                  Забронировать
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="border-t border-[#3d2a15] px-8 py-6 text-center text-[#a08060] text-sm">
        <p>© 2025 Кофейня «Зерно» · ул. Кофейная, 12 · Пн–Вс 8:00–22:00</p>
      </footer>
      <DemoCTA />
    </div>
  );
}
