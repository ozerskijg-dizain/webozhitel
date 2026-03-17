import { AlertCircle } from "lucide-react";

interface ProblemsSectionProps {
  onScrollTo: (id: string) => void;
}

const PROBLEMS = [
  "Нет сайта для бизнеса",
  "Сайт есть, но не приводит клиентов",
  "Устаревший дизайн",
  "Медленный сайт",
  "Нужно запустить быстро",
];

export default function ProblemsSection({ onScrollTo }: ProblemsSectionProps) {
  return (
    <section id="problems" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">06.</span>
        <h2 className="text-3xl font-bold">Знакомые проблемы?</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {PROBLEMS.map((problem) => (
          <div
            key={problem}
            className="flex items-start gap-3 bg-card border border-border rounded-xl p-5 hover:border-primary hover:shadow-sm transition-all"
          >
            <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-foreground font-medium text-sm leading-relaxed">{problem}</span>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={() => onScrollTo("contact")}
          className="px-8 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
        >
          Решить эту проблему
        </button>
      </div>
    </section>
  );
}
