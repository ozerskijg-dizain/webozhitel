import { Send, Layout, Building2, ShoppingBag, User, Wrench } from "lucide-react";

const TYPES = [
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Лендинги для бизнеса",
    description:
      "Одностраничный сайт, который быстро загружается и конвертирует посетителей в клиентов. Идеален для рекламных кампаний и акций.",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Корпоративные сайты",
    description:
      "Многостраничный сайт компании с описанием услуг, командой, портфолио и контактами. Создаёт доверие и профессиональный образ.",
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Интернет-магазины",
    description:
      "Полноценный магазин с каталогом, корзиной, оплатой и личным кабинетом. Продаёт 24/7 без участия менеджера.",
  },
  {
    icon: <User className="w-6 h-6" />,
    title: "Сайты-портфолио",
    description:
      "Личный сайт фрилансера, фотографа, дизайнера или специалиста. Показывает работы и помогает привлекать клиентов.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Сайты для услуг",
    description:
      "Сайт для мастера, салона, клиники, студии или агентства. Онлайн-запись, прайс, отзывы — всё для привлечения клиентов.",
  },
];

export default function WebsiteTypesSection() {
  return (
    <section id="website-types" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">10.</span>
        <h2 className="text-3xl font-bold">Какие сайты я создаю</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        Разрабатываю сайты под любые задачи бизнеса — от простого лендинга до полноценного интернет-магазина.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {TYPES.map((type) => (
          <div
            key={type.title}
            className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary hover:shadow-md transition-all"
          >
            <div className="text-primary bg-primary/10 p-2.5 rounded-lg w-fit">{type.icon}</div>
            <div>
              <h3 className="font-semibold text-base mb-2">{type.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{type.description}</p>
            </div>
            <a
              href="https://t.me/webozhitel"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 text-sm text-primary font-medium hover:opacity-80 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Обсудить проект
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
