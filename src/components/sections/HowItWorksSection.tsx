import { MessageCircle, ClipboardList, Rocket } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Свяжитесь со мной",
    description: "Напишите в Telegram или заполните форму — расскажите о своём проекте.",
  },
  {
    number: "02",
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Обсудим проект",
    description: "Уточним задачи, сроки и бюджет. Подготовлю предложение под ваши цели.",
  },
  {
    number: "03",
    icon: <Rocket className="w-6 h-6" />,
    title: "Запуск сайта",
    description: "Разрабатываю, тестирую и запускаю. Вы получаете готовый работающий сайт.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">05.</span>
        <h2 className="text-3xl font-bold">Как я работаю</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid sm:grid-cols-3 gap-8">
        {STEPS.map((step, i) => (
          <div key={step.number} className="relative flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl font-black text-primary/15 font-mono leading-none">{step.number}</span>
              <div className="text-primary bg-primary/10 p-2 rounded-lg">{step.icon}</div>
            </div>
            <h3 className="font-bold text-lg mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            {i < STEPS.length - 1 && (
              <div className="hidden sm:block absolute top-6 left-full w-8 h-px bg-border -translate-x-4" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
