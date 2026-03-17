import { useState } from "react";
import DemoCTA from "./DemoCTA";

type Page = "home" | "catalog" | "delivery" | "about";

const CATALOG = [
  { cat: "Рыба", items: [
    { name: "Лосось охл.", weight: "1 кг", price: "890 ₽", badge: "Хит", emoji: "🐟" },
    { name: "Семга стейк", weight: "500 г", price: "650 ₽", badge: "", emoji: "🐟" },
    { name: "Форель", weight: "1 кг", price: "780 ₽", badge: "Свежее", emoji: "🐡" },
    { name: "Треска", weight: "1 кг", price: "420 ₽", badge: "", emoji: "🐠" },
  ]},
  { cat: "Морепродукты", items: [
    { name: "Тигровые креветки", weight: "500 г", price: "640 ₽", badge: "Свежее", emoji: "🦐" },
    { name: "Устрицы", weight: "6 шт", price: "780 ₽", badge: "", emoji: "🦪" },
    { name: "Краб варёный", weight: "1 кг", price: "2 400 ₽", badge: "Премиум", emoji: "🦀" },
    { name: "Мидии", weight: "1 кг", price: "350 ₽", badge: "", emoji: "🦪" },
    { name: "Гребешок", weight: "500 г", price: "1 100 ₽", badge: "Свежее", emoji: "🦪" },
  ]},
  { cat: "Икра", items: [
    { name: "Икра лосося", weight: "100 г", price: "450 ₽", badge: "Хит", emoji: "🟠" },
    { name: "Икра трески", weight: "200 г", price: "280 ₽", badge: "", emoji: "⚫" },
    { name: "Икра ежа", weight: "100 г", price: "1 200 ₽", badge: "Премиум", emoji: "🟡" },
  ]},
];

export default function SeafoodDemo() {
  const [page, setPage] = useState<Page>("home");
  const [cat, setCat] = useState(0);
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (name: string) => setCart(p => [...p, name]);

  const nav: { id: Page; label: string }[] = [
    { id: "home", label: "Главная" },
    { id: "catalog", label: "Каталог" },
    { id: "delivery", label: "Доставка" },
    { id: "about", label: "О нас" },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-[#e8f4f8] font-sans flex flex-col">
      <header className="px-6 py-4 flex justify-between items-center border-b border-[#1a3048] sticky top-0 bg-[#0a1628] z-40">
        <button onClick={() => setPage("home")} className="text-xl font-bold text-[#4ab8d8] hover:opacity-80 transition-opacity">
          🐟 АтлантМаркет
        </button>
        <nav className="flex gap-1">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => setPage(n.id)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                page === n.id
                  ? "bg-[#4ab8d8] text-[#0a1628] font-semibold"
                  : "text-[#7ab8d0] hover:bg-[#0e2035]"
              }`}
            >
              {n.label}
            </button>
          ))}
        </nav>
        <button onClick={() => setPage("catalog")} className="bg-[#4ab8d8] text-[#0a1628] px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-[#6acde8] transition-colors relative">
          🛒 {cart.length > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">{cart.length}</span>}
        </button>
      </header>

      <div className="flex-1">
        {page === "home" && (
          <div>
            <section className="px-8 py-20 max-w-4xl mx-auto text-center">
              <p className="text-[#4ab8d8] text-sm tracking-widest uppercase mb-4">Свежие морепродукты · Доставка за 2 часа</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Океан —<br />
                <span className="text-[#4ab8d8]">на вашем столе</span>
              </h1>
              <p className="text-[#7ab8d0] text-xl mb-10 max-w-xl mx-auto">
                Свежая рыба, креветки, устрицы и морепродукты прямо с рыболовецких предприятий.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button onClick={() => setPage("catalog")} className="bg-[#4ab8d8] text-[#0a1628] px-10 py-4 rounded-xl font-bold text-sm hover:bg-[#6acde8] transition-colors">
                  Смотреть каталог
                </button>
                <button onClick={() => setPage("delivery")} className="border border-[#1a3048] text-[#7ab8d0] px-10 py-4 rounded-xl text-sm hover:border-[#4ab8d8] transition-colors">
                  Условия доставки
                </button>
              </div>
            </section>
            <section className="px-8 py-8 max-w-4xl mx-auto grid sm:grid-cols-3 gap-5">
              {[
                { icon: "🚚", title: "Доставка за 2 часа", text: "По всей Москве и МО" },
                { icon: "❄️", title: "Охлаждаемый транспорт", text: "Свежесть до самой двери" },
                { icon: "🏭", title: "Прямо с производства", text: "Без посредников" },
              ].map((f) => (
                <div key={f.title} className="bg-[#0e2035] border border-[#1a3048] rounded-2xl p-6 text-center">
                  <div className="text-3xl mb-2">{f.icon}</div>
                  <div className="font-semibold mb-1">{f.title}</div>
                  <p className="text-[#7ab8d0] text-sm">{f.text}</p>
                </div>
              ))}
            </section>
            <section className="px-8 py-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Хиты продаж</h2>
              <div className="grid sm:grid-cols-3 gap-5">
                {CATALOG[0].items.slice(0,3).concat(CATALOG[1].items.slice(0,3)).map((p) => (
                  <div key={p.name} className="bg-[#0e2035] border border-[#1a3048] rounded-xl p-5 hover:border-[#4ab8d8] transition-colors">
                    <div className="text-3xl mb-2">{p.emoji}</div>
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-sm">{p.name}</span>
                      {p.badge && <span className="text-xs bg-[#4ab8d8] text-[#0a1628] px-2 py-0.5 rounded-full font-semibold">{p.badge}</span>}
                    </div>
                    <p className="text-[#7ab8d0] text-xs mb-3">{p.weight}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#4ab8d8] font-bold">{p.price}</span>
                      <button onClick={() => addToCart(p.name)} className="bg-[#4ab8d8] text-[#0a1628] px-3 py-1 rounded-lg text-xs font-bold hover:bg-[#6acde8] transition-colors">
                        В корзину
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {page === "catalog" && (
          <div className="px-8 py-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Каталог</h2>
            <div className="flex gap-2 mb-8 flex-wrap">
              {CATALOG.map((c, i) => (
                <button
                  key={c.cat}
                  onClick={() => setCat(i)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    cat === i ? "bg-[#4ab8d8] text-[#0a1628] font-semibold" : "bg-[#0e2035] border border-[#1a3048] text-[#7ab8d0] hover:border-[#4ab8d8]"
                  }`}
                >
                  {c.cat}
                </button>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {CATALOG[cat].items.map((p) => (
                <div key={p.name} className="bg-[#0e2035] border border-[#1a3048] rounded-xl p-5 hover:border-[#4ab8d8] transition-colors">
                  <div className="text-4xl mb-3">{p.emoji}</div>
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold">{p.name}</span>
                    {p.badge && <span className="text-xs bg-[#4ab8d8] text-[#0a1628] px-2 py-0.5 rounded-full font-semibold">{p.badge}</span>}
                  </div>
                  <p className="text-[#7ab8d0] text-sm mb-3">{p.weight}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#4ab8d8] font-bold text-lg">{p.price}</span>
                    <button onClick={() => addToCart(p.name)} className="bg-[#4ab8d8] text-[#0a1628] px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-[#6acde8] transition-colors">
                      В корзину
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {cart.length > 0 && (
              <div className="mt-8 bg-[#0e2035] border border-[#4ab8d8] rounded-2xl p-5">
                <h3 className="font-bold mb-3 text-[#4ab8d8]">Корзина ({cart.length} позиции)</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[...new Set(cart)].map(name => (
                    <span key={name} className="bg-[#1a3048] text-[#e8f4f8] text-xs px-3 py-1 rounded-full">{name} ×{cart.filter(n=>n===name).length}</span>
                  ))}
                </div>
                <button className="bg-[#4ab8d8] text-[#0a1628] px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#6acde8] transition-colors">
                  Оформить заказ
                </button>
              </div>
            )}
          </div>
        )}

        {page === "delivery" && (
          <div className="px-8 py-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Доставка и оплата</h2>
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {[
                { icon: "🚚", title: "Экспресс-доставка", desc: "2 часа по Москве", price: "300 ₽" },
                { icon: "📅", title: "Плановая доставка", desc: "В удобное время", price: "150 ₽" },
                { icon: "🏪", title: "Самовывоз", desc: "Склад: ул. Портовая, 8", price: "Бесплатно" },
                { icon: "🎁", title: "Бесплатная доставка", desc: "При заказе от 3 000 ₽", price: "0 ₽" },
              ].map((d) => (
                <div key={d.title} className="bg-[#0e2035] border border-[#1a3048] rounded-2xl p-5">
                  <div className="text-3xl mb-2">{d.icon}</div>
                  <div className="font-semibold mb-1">{d.title}</div>
                  <div className="text-[#7ab8d0] text-sm mb-2">{d.desc}</div>
                  <div className="text-[#4ab8d8] font-bold">{d.price}</div>
                </div>
              ))}
            </div>
            <div className="bg-[#0e2035] border border-[#1a3048] rounded-2xl p-6">
              <h3 className="font-bold mb-4">Способы оплаты</h3>
              <div className="flex flex-wrap gap-3">
                {["💳 Карта онлайн", "💵 Наличными курьеру", "📱 СБП", "🏦 Счёт для ИП и ООО"].map(m => (
                  <span key={m} className="bg-[#1a3048] text-[#e8f4f8] text-sm px-4 py-2 rounded-xl">{m}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {page === "about" && (
          <div className="px-8 py-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">О компании</h2>
            <p className="text-[#7ab8d0] text-lg leading-relaxed mb-8">
              АтлантМаркет — прямые поставки рыбы и морепродуктов с Дальнего Востока, Мурманска и Астрахани. Работаем с 2018 года.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { val: "7 лет", label: "На рынке" },
                { val: "50+", label: "Поставщиков" },
                { val: "5 000+", label: "Клиентов" },
                { val: "7 дней", label: "Работаем" },
              ].map(s => (
                <div key={s.label} className="bg-[#0e2035] border border-[#1a3048] rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#4ab8d8]">{s.val}</div>
                  <div className="text-[#7ab8d0] text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-[#0e2035] border border-[#1a3048] rounded-2xl p-6">
              <h3 className="font-bold mb-4 text-[#4ab8d8]">Контакты</h3>
              <div className="flex flex-col gap-3 text-sm">
                <div>📍 Москва, ул. Портовая, 8</div>
                <div>🕐 Пн–Вс 7:00–22:00</div>
                <div>📞 +7 (495) 000-11-22</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="border-t border-[#1a3048] px-8 py-6 text-center text-[#7ab8d0] text-sm">
        <p>© 2025 АтлантМаркет · Доставка 7 дней в неделю</p>
      </footer>
      <DemoCTA />
    </div>
  );
}
