import { Globe, ShoppingCart, Layers } from "lucide-react";

interface ServicesSectionProps {
  onScrollTo: (id: string) => void;
}

const SERVICES = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Лендинг",
    price: "от 15 000 ₽",
    description: "Одностраничный сайт для продвижения товара или услуги. Быстро, красиво, конверсионно.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Сайт для бизнеса",
    price: "от 30 000 ₽",
    description: "Многостраничный сайт: о компании, услуги, портфолио, контакты. Под ключ.",
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Интернет-магазин",
    price: "от 50 000 ₽",
    description: "Полноценный магазин с каталогом, корзиной, оплатой и личным кабинетом.",
  },
];

export default function ServicesSection({ onScrollTo }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">03.</span>
        <h2 className="text-3xl font-bold">Услуги</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid sm:grid-cols-3 gap-6 mb-10">
        {SERVICES.map((s) => (
          <div key={s.title} className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all flex flex-col">
            <div className="text-primary bg-primary/10 p-3 rounded-xl w-fit mb-4">{s.icon}</div>
            <h3 className="font-bold text-lg mb-1">{s.title}</h3>
            <p className="text-primary font-semibold text-sm mb-3">{s.price}</p>
            <p className="text-muted-foreground text-sm leading-relaxed flex-1">{s.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={() => onScrollTo("contact")}
          className="px-8 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
        >
          Обсудить проект
        </button>
      </div>
    </section>
  );
}
