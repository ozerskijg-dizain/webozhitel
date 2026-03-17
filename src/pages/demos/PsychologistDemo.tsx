import { useState } from "react";
import DemoCTA from "./DemoCTA";

type Page = "home" | "about" | "services" | "book";

const REVIEWS = [
  { name: "Мария К.", text: "Работаю с Еленой уже полгода. Научилась справляться с тревогой и выстраивать границы.", rating: 5 },
  { name: "Алексей Р.", text: "Очень профессиональный подход. После 8 сессий жизнь стала ощущаться иначе.", rating: 5 },
  { name: "Светлана М.", text: "Помогла разобраться в отношениях с родителями. Буду рекомендовать всем.", rating: 5 },
];

export default function PsychologistDemo() {
  const [page, setPage] = useState<Page>("home");
  const [submitted, setSubmitted] = useState(false);

  const nav: { id: Page; label: string }[] = [
    { id: "home", label: "Главная" },
    { id: "about", label: "Обо мне" },
    { id: "services", label: "Услуги" },
    { id: "book", label: "Запись" },
  ];

  return (
    <div className="min-h-screen bg-[#fafbff] text-[#1a1a35] font-sans flex flex-col">
      <header className="px-6 py-4 flex justify-between items-center border-b border-[#e8eaf8] sticky top-0 bg-[#fafbff] z-40">
        <button onClick={() => setPage("home")} className="text-lg font-semibold text-[#5a5aaa] hover:opacity-80 transition-opacity">
          🧠 Елена Васильева
        </button>
        <nav className="flex gap-1">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => setPage(n.id)}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                page === n.id
                  ? "bg-[#5a5aaa] text-white font-semibold"
                  : "text-[#7a7aaa] hover:text-[#5a5aaa]"
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
            <section className="px-8 py-16 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-[#5a5aaa] text-sm tracking-widest uppercase mb-4">Психолог · Гештальт-терапевт</p>
                  <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                    Помогаю найти<br />
                    <span className="text-[#5a5aaa]">внутренний ресурс</span>
                  </h1>
                  <p className="text-[#7a7aaa] text-lg mb-8 leading-relaxed">
                    Работаю с тревогой, отношениями, самооценкой и жизненными кризисами. Индивидуальные и групповые консультации.
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    <button onClick={() => setPage("book")} className="bg-[#5a5aaa] text-white px-7 py-3 rounded-xl font-semibold text-sm hover:bg-[#4a4a9a] transition-colors">
                      Записаться онлайн
                    </button>
                    <button onClick={() => setPage("services")} className="border border-[#5a5aaa] text-[#5a5aaa] px-7 py-3 rounded-xl font-semibold text-sm hover:bg-[#f0f0ff] transition-colors">
                      Первая консультация бесплатно
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#e8e8ff] to-[#f0e8ff] rounded-3xl h-64 md:h-80 flex items-center justify-center text-6xl">
                  🧘
                </div>
              </div>
            </section>
            <section className="px-8 py-8 max-w-4xl mx-auto grid sm:grid-cols-3 gap-5">
              {[
                { icon: "🎓", title: "15+ лет опыта", text: "Профессиональная подготовка и постоянное обучение" },
                { icon: "🌐", title: "Онлайн и очно", text: "Консультации по всему миру в любом удобном формате" },
                { icon: "🔒", title: "Конфиденциально", text: "Полная анонимность и безопасное пространство" },
              ].map((f) => (
                <div key={f.title} className="bg-white border border-[#e8eaf8] rounded-2xl p-6 text-center hover:shadow-sm transition-shadow">
                  <div className="text-3xl mb-2">{f.icon}</div>
                  <div className="font-semibold mb-1">{f.title}</div>
                  <p className="text-[#7a7aaa] text-sm">{f.text}</p>
                </div>
              ))}
            </section>
            <section className="px-8 py-10 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Отзывы клиентов</h2>
              <div className="grid sm:grid-cols-3 gap-5">
                {REVIEWS.map((r) => (
                  <div key={r.name} className="bg-white border border-[#e8eaf8] rounded-2xl p-5">
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(r.rating)].map((_, i) => <span key={i} className="text-[#5a5aaa]">★</span>)}
                    </div>
                    <p className="text-[#4a4a6a] text-sm leading-relaxed mb-3">"{r.text}"</p>
                    <div className="text-[#9090b8] text-xs font-semibold">{r.name}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {page === "about" && (
          <div className="px-8 py-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Обо мне</h2>
            <div className="flex gap-6 items-start mb-8">
              <div className="bg-gradient-to-br from-[#e8e8ff] to-[#f0e8ff] rounded-2xl w-24 h-24 flex items-center justify-center text-4xl shrink-0">🧘</div>
              <div>
                <div className="font-bold text-xl mb-1">Елена Васильева</div>
                <div className="text-[#5a5aaa] mb-2">Психолог, гештальт-терапевт</div>
                <div className="text-[#7a7aaa] text-sm">Москва / онлайн · Опыт 15+ лет</div>
              </div>
            </div>
            <p className="text-[#4a4a6a] leading-relaxed mb-5">
              Я помогаю людям находить опору в себе в моменты жизненных изменений: потеря работы, разрывы отношений, тревога, хроническая усталость, ощущение потери смысла.
            </p>
            <p className="text-[#4a4a6a] leading-relaxed mb-8">
              Работаю в гуманистическом подходе, ориентированном на человека. В нашей работе вы — главный эксперт своей жизни, я — партнёр, который идёт рядом.
            </p>
            <div className="bg-white border border-[#e8eaf8] rounded-2xl p-6">
              <h3 className="font-bold mb-4 text-[#5a5aaa]">Образование и сертификаты</h3>
              <ul className="flex flex-col gap-2 text-sm text-[#4a4a6a]">
                {[
                  "МГУ — Клиническая психология, 2007",
                  "Московский Гештальт Институт — 4-летняя подготовка терапевтов",
                  "EMDR Institute — работа с травмой",
                  "Регулярная супервизия и интервизия",
                ].map((e) => (
                  <li key={e} className="flex gap-2"><span className="text-[#5a5aaa]">✓</span>{e}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {page === "services" && (
          <div className="px-8 py-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-3">Услуги и направления</h2>
            <p className="text-[#7a7aaa] mb-8">С чем я работаю</p>
            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {[
                { title: "Тревога и панические атаки", desc: "Снижение уровня тревоги, освоение техник саморегуляции" },
                { title: "Отношения", desc: "Конфликты, границы, созависимость, расставания" },
                { title: "Самооценка", desc: "Работа с внутренним критиком, неуверенностью, перфекционизмом" },
                { title: "Жизненные кризисы", desc: "Потеря, изменения, поиск смысла и нового пути" },
                { title: "Выгорание", desc: "Восстановление ресурса, пересмотр приоритетов" },
                { title: "Детско-родительские отношения", desc: "Работа с травмой детства и семейными сценариями" },
              ].map((s) => (
                <div key={s.title} className="bg-white border border-[#e8eaf8] rounded-xl p-5 hover:border-[#5a5aaa] transition-colors">
                  <div className="font-semibold mb-2">{s.title}</div>
                  <p className="text-[#7a7aaa] text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-bold mb-5">Форматы работы</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { title: "Индивидуальная терапия", price: "3 500 ₽/сессия", icon: "👤", desc: "Очно или онлайн, 50 мин" },
                { title: "Онлайн-консультация", price: "3 000 ₽/сессия", icon: "💻", desc: "Zoom или WhatsApp, 50 мин" },
                { title: "Групповая терапия", price: "1 500 ₽/встреча", icon: "👥", desc: "Каждую субботу, 2 часа" },
              ].map((s) => (
                <div key={s.title} className="bg-white border border-[#e8eaf8] rounded-2xl p-6 text-center hover:border-[#5a5aaa] hover:shadow-sm transition-all">
                  <div className="text-4xl mb-3">{s.icon}</div>
                  <div className="font-semibold mb-1">{s.title}</div>
                  <div className="text-[#7a7aaa] text-xs mb-2">{s.desc}</div>
                  <div className="text-[#5a5aaa] font-bold">{s.price}</div>
                  <button onClick={() => setPage("book")} className="mt-3 w-full bg-[#f0f0ff] text-[#5a5aaa] text-sm py-2 rounded-lg font-semibold hover:bg-[#5a5aaa] hover:text-white transition-colors">
                    Записаться
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === "book" && (
          <div className="px-8 py-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-3">Записаться на консультацию</h2>
            <p className="text-[#7a7aaa] mb-8">Первая ознакомительная встреча (20 мин) — бесплатно</p>
            {submitted ? (
              <div className="bg-[#f0f0ff] border border-[#5a5aaa] rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2 text-[#5a5aaa]">Заявка принята!</h3>
                <p className="text-[#7a7aaa]">Я свяжусь с вами в течение 2 часов для подтверждения времени.</p>
              </div>
            ) : (
              <div className="bg-white border border-[#e8eaf8] rounded-2xl p-6">
                <div className="flex flex-col gap-4">
                  <input placeholder="Ваше имя" className="border border-[#e8eaf8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5a5aaa] transition-colors" />
                  <input placeholder="Telegram или телефон" className="border border-[#e8eaf8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#5a5aaa] transition-colors" />
                  <select className="border border-[#e8eaf8] rounded-xl px-4 py-3 text-sm text-[#7a7aaa] focus:outline-none focus:border-[#5a5aaa] transition-colors">
                    <option>Формат: Онлайн (Zoom)</option>
                    <option>Формат: Очно, Москва</option>
                    <option>Формат: WhatsApp</option>
                  </select>
                  <textarea placeholder="С чем хотите поработать? (необязательно)" rows={3} className="border border-[#e8eaf8] rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:border-[#5a5aaa] transition-colors" />
                  <button onClick={() => setSubmitted(true)} className="bg-[#5a5aaa] text-white py-3.5 rounded-xl font-semibold hover:bg-[#4a4a9a] transition-colors">
                    Отправить заявку
                  </button>
                  <p className="text-[#9090b8] text-xs text-center">Вся информация строго конфиденциальна</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <footer className="border-t border-[#e8eaf8] px-8 py-6 text-center text-[#9090b8] text-sm">
        <p>© 2025 Елена Васильева · Психолог · Запись через сайт или Telegram</p>
      </footer>
      <DemoCTA />
    </div>
  );
}
