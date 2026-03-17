import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "Сколько стоит разработка сайта?",
    answer:
      "Стоимость зависит от типа и сложности сайта. Лендинг — от 15 000 ₽, корпоративный сайт — от 30 000 ₽, интернет-магазин — от 50 000 ₽. Точную цену называю после обсуждения задачи.",
  },
  {
    question: "Сколько времени занимает создание сайта?",
    answer:
      "Лендинг — 3–7 дней, корпоративный сайт — 1–2 недели, интернет-магазин — 2–4 недели. Срок зависит от объёма работ и скорости согласования материалов с вашей стороны.",
  },
  {
    question: "Вы помогаете с хостингом и доменом?",
    answer:
      "Да, помогаю с выбором и подключением хостинга и домена. Могу взять это на себя полностью или проконсультировать, если хотите разобраться сами.",
  },
  {
    question: "Сайт будет работать на телефоне?",
    answer:
      "Да, все сайты адаптированы для мобильных устройств. Правильное отображение на смартфонах — один из базовых стандартов при разработке.",
  },
  {
    question: "Можете переделать уже существующий сайт?",
    answer:
      "Да, занимаюсь редизайном и доработкой существующих сайтов. Оцениваю текущий сайт и предлагаю конкретные улучшения — под ваш бюджет и цели.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">11.</span>
        <h2 className="text-3xl font-bold">Частые вопросы</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="flex flex-col gap-3">
        {FAQS.map((faq, i) => (
          <div
            key={i}
            className="border border-border rounded-xl overflow-hidden bg-card transition-all"
          >
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 hover:bg-muted/40 transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="font-medium text-foreground">{faq.question}</span>
              <ChevronDown
                className={`w-4 h-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {open === i && (
              <div className="px-6 pb-5 pt-1 text-muted-foreground text-sm leading-relaxed border-t border-border">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
