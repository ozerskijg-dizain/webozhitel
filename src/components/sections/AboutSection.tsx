export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">08.</span>
        <h2 className="text-3xl font-bold">Кто такой Вебожитель</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p className="text-foreground text-xl font-semibold">Привет 👋</p>
          <p>
            Разрабатываю сайты и автоматизирую бизнес-процессы. Моя цель — запускать проекты быстро и без лишней сложности.
          </p>
          <p>
            В работе ценю <span className="text-primary font-semibold">чистый код</span>, продуманный интерфейс и внимание к деталям.
          </p>
          <p className="text-foreground font-medium">
            И да — я ещё умею вышивать крестиком.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Проектов сдано", value: "10+" },
            { label: "Довольных клиентов", value: "8+" },
            { label: "Telegram-ботов", value: "5+" },
            { label: "Технологий", value: "10+" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-xl p-5 shadow-sm">
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
