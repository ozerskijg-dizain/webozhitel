interface PricingSectionProps {
  onScrollTo: (id: string) => void;
}

const PLANS = [
  {
    title: "Лендинг",
    price: "от 15 000 ₽",
    features: ["Одна страница", "Адаптивный дизайн", "SEO-настройка", "Форма обратной связи"],
    highlighted: false,
  },
  {
    title: "Сайт для бизнеса",
    price: "от 30 000 ₽",
    features: ["До 7 страниц", "Личный кабинет", "Интеграции", "Поддержка 1 месяц"],
    highlighted: true,
  },
  {
    title: "Интернет-магазин",
    price: "от 50 000 ₽",
    features: ["Каталог товаров", "Корзина и оплата", "CRM-интеграция", "Поддержка 3 месяца"],
    highlighted: false,
  },
];

export default function PricingSection({ onScrollTo }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">07.</span>
        <h2 className="text-3xl font-bold">Стоимость</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid sm:grid-cols-3 gap-6 mb-10">
        {PLANS.map((plan) => (
          <div
            key={plan.title}
            className={`rounded-xl p-6 flex flex-col transition-all ${
              plan.highlighted
                ? "bg-primary text-primary-foreground shadow-lg scale-[1.02]"
                : "bg-card border border-border hover:border-primary hover:shadow-md"
            }`}
          >
            <h3 className={`font-bold text-lg mb-1 ${plan.highlighted ? "text-primary-foreground" : ""}`}>
              {plan.title}
            </h3>
            <p className={`text-2xl font-black mb-5 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`}>
              {plan.price}
            </p>
            <ul className="space-y-2 flex-1 mb-6">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className={`text-sm flex items-center gap-2 ${
                    plan.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${plan.highlighted ? "bg-primary-foreground" : "bg-primary"}`} />
                  {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => onScrollTo("contact")}
              className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-all ${
                plan.highlighted
                  ? "bg-primary-foreground text-primary hover:opacity-90"
                  : "border border-border hover:border-primary hover:text-primary text-muted-foreground"
              }`}
            >
              Обсудить проект
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
