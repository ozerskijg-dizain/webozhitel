import { Zap, Palette, Search, HeadphonesIcon } from "lucide-react";

const BENEFITS = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Быстрый запуск",
    description: "Запускаю проекты в сжатые сроки без потери качества.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Современный дизайн",
    description: "Чистый, понятный интерфейс, который нравится и пользователям, и поисковикам.",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "SEO-оптимизация",
    description: "Структура сайта настроена под поисковые системы с первого дня.",
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6" />,
    title: "Поддержка после запуска",
    description: "Остаюсь на связи и помогаю развивать проект после сдачи.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">04.</span>
        <h2 className="text-3xl font-bold">Почему выбирают меня</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {BENEFITS.map((b) => (
          <div key={b.title} className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all">
            <div className="text-primary bg-primary/10 p-3 rounded-xl w-fit mb-4">{b.icon}</div>
            <h3 className="font-bold mb-2">{b.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
