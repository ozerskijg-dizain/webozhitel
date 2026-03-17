import { useState } from "react";
import DemoCTA from "./DemoCTA";

type Page = "home" | "tech" | "economy" | "sport" | "article";

const ARTICLES = {
  tech: [
    { id: "ai-dev", cat: "Технологии", title: "ИИ переписывает правила разработки ПО", time: "2 часа назад", lead: "Исследователи из ведущих технологических компаний утверждают, что AI-ассистенты уже закрывают до 40% задач в sprint. Но разработчики не теряют работу — они меняют роль.", read: "3 мин" },
    { id: "chip", cat: "Технологии", title: "Представлен новый процессор с рекордной производительностью", time: "Вчера", lead: "Новый чипсет превосходит конкурентов по показателю производительность/энергопотребление. Анонс состоялся на международной выставке в Берлине.", read: "2 мин" },
    { id: "quantum", cat: "Технологии", title: "Квантовые вычисления: первый коммерческий кейс", time: "2 дня назад", lead: "Банковский сектор первым внедрил квантовые алгоритмы для оптимизации торговых стратегий.", read: "4 мин" },
  ],
  economy: [
    { id: "ruble", cat: "Экономика", title: "Рубль укрепился на фоне роста нефтяных котировок", time: "4 часа назад", lead: "Курс доллара опустился до минимума за последние три месяца. Эксперты связывают укрепление с решением ОПЕК+ о сокращении добычи.", read: "2 мин" },
    { id: "export", cat: "Экономика", title: "Экспорт IT-услуг вырос на 25% за первый квартал", time: "Вчера", lead: "Несмотря на санкционное давление, российские технологические компании наращивают присутствие на рынках Азии и Латинской Америки.", read: "3 мин" },
  ],
  sport: [
    { id: "hockey", cat: "Спорт", title: "Сборная по хоккею вышла в финал чемпионата мира", time: "6 часов назад", lead: "В полуфинальном матче сборная России одержала победу над командой Швеции со счётом 4:2. Финал состоится в субботу.", read: "2 мин" },
    { id: "football", cat: "Спорт", title: "ЦСКА подписал нового форварда из Аргентины", time: "2 дня назад", lead: "Контракт рассчитан на три года. По данным источников, сумма трансфера составила около 8 млн евро.", read: "2 мин" },
  ],
};

const FEATURED = { id: "space", cat: "Космос", title: "Россия запустила новую орбитальную станцию", time: "1 час назад", lead: "Первый модуль новой российской орбитальной станции успешно выведен на орбиту. Космонавты приступят к работе уже через месяц. Старт прошёл штатно с космодрома Восточный.", read: "5 мин" };

const ALL_ARTICLES = [...ARTICLES.tech, ...ARTICLES.economy, ...ARTICLES.sport];

export default function NewsDemo() {
  const [page, setPage] = useState<Page>("home");
  const [selected, setSelected] = useState(FEATURED);

  const openArticle = (a: typeof FEATURED) => {
    setSelected(a);
    setPage("article");
  };

  const nav: { id: Page; label: string }[] = [
    { id: "home", label: "Главное" },
    { id: "tech", label: "Технологии" },
    { id: "economy", label: "Экономика" },
    { id: "sport", label: "Спорт" },
  ];

  const catArticles = page === "tech" ? ARTICLES.tech : page === "economy" ? ARTICLES.economy : ARTICLES.sport;

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#1a1a2e] font-sans flex flex-col">
      <header className="bg-[#1a1a2e] text-white px-6 py-4 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <button onClick={() => setPage("home")} className="text-2xl font-black tracking-tight hover:opacity-80 transition-opacity">
            📰 ВЕСТНИК
          </button>
          <nav className="flex gap-1">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => setPage(n.id)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  page === n.id
                    ? "bg-blue-500 text-white font-semibold"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {n.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <div className="flex-1">
        {page === "home" && (
          <div>
            <section className="bg-[#1a1a2e] text-white px-6 pb-12 pt-6">
              <div className="max-w-5xl mx-auto">
                <div className="bg-[#16213e] rounded-2xl p-6 md:p-10 cursor-pointer hover:bg-[#1e2d4e] transition-colors" onClick={() => openArticle(FEATURED)}>
                  <span className="text-xs bg-blue-500 text-white px-3 py-1 rounded-full uppercase tracking-wider font-semibold">{FEATURED.cat}</span>
                  <h1 className="text-2xl md:text-4xl font-bold mt-4 mb-3 leading-tight">{FEATURED.title}</h1>
                  <p className="text-gray-400 text-base max-w-2xl">{FEATURED.lead}</p>
                  <div className="flex gap-4 items-center mt-4 text-gray-500 text-sm">
                    <span>{FEATURED.time}</span>
                    <span>· {FEATURED.read} чтения</span>
                  </div>
                </div>
              </div>
            </section>
            <section className="px-6 py-10 max-w-5xl mx-auto">
              <h2 className="text-xl font-bold mb-6">Последние новости</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {ALL_ARTICLES.map((a) => (
                  <div key={a.id} onClick={() => openArticle(a)} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow cursor-pointer">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">{a.cat}</span>
                    <h3 className="font-semibold mt-3 mb-2 leading-tight text-sm">{a.title}</h3>
                    <p className="text-gray-400 text-xs">{a.time} · {a.read}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {(page === "tech" || page === "economy" || page === "sport") && (
          <div className="px-6 py-10 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">
              {page === "tech" ? "Технологии" : page === "economy" ? "Экономика" : "Спорт"}
            </h2>
            <div className="flex flex-col gap-5">
              {catArticles.map((a) => (
                <div key={a.id} onClick={() => openArticle(a)} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow cursor-pointer flex gap-4">
                  <div className="flex-1">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold mb-2 inline-block">{a.cat}</span>
                    <h3 className="font-bold text-lg mb-2 leading-tight">{a.title}</h3>
                    <p className="text-gray-500 text-sm mb-3 line-clamp-2">{a.lead}</p>
                    <div className="flex gap-3 text-gray-400 text-xs">
                      <span>{a.time}</span>
                      <span>· {a.read} чтения</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === "article" && (
          <div className="px-6 py-10 max-w-3xl mx-auto">
            <button onClick={() => setPage("home")} className="text-blue-600 text-sm mb-6 hover:underline flex items-center gap-1">
              ← Все новости
            </button>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">{selected.cat}</span>
            <h1 className="text-2xl md:text-3xl font-bold mt-4 mb-3 leading-tight">{selected.title}</h1>
            <div className="flex gap-3 text-gray-400 text-sm mb-6">
              <span>{selected.time}</span>
              <span>· {selected.read} чтения</span>
            </div>
            <p className="text-gray-600 text-base leading-relaxed mb-4">{selected.lead}</p>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Эксперты отрасли отмечают, что данное событие является значимым для всей сферы. Аналитики прогнозируют долгосрочные последствия как для российского, так и для мирового рынка.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Дальнейшее развитие ситуации редакция Вестника будет отслеживать в режиме реального времени.
            </p>
          </div>
        )}
      </div>

      <footer className="border-t border-gray-200 px-6 py-6 text-center text-gray-400 text-sm">
        <p>© 2025 Вестник · Все права защищены</p>
      </footer>
      <DemoCTA />
    </div>
  );
}
