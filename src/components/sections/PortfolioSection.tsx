import { ExternalLink, Coffee, Sparkles, Newspaper, Fish, CalendarCheck, Calculator, HeartPulse, Brain, Bot, Database, Settings } from "lucide-react";
import { ReactNode } from "react";

interface Project {
  title: string;
  description: string;
  demo: string;
  icon: ReactNode;
}

const PROJECTS: Project[] = [
  { title: "Сайт кофейни", description: "Современный сайт кофейни с меню и онлайн-заказом", demo: "/test/coffee", icon: <Coffee className="w-5 h-5" /> },
  { title: "Сайт салона красоты", description: "Лендинг салона красоты с услугами и записью", demo: "/test/beauty-salon", icon: <Sparkles className="w-5 h-5" /> },
  { title: "Новостной портал", description: "Многостраничный сайт новостей с категориями", demo: "/test/news", icon: <Newspaper className="w-5 h-5" /> },
  { title: "Сайт рыбного магазина", description: "Интернет-витрина магазина морепродуктов", demo: "/test/seafood", icon: <Fish className="w-5 h-5" /> },
  { title: "Трекер привычек", description: "Приложение для отслеживания ежедневных привычек", demo: "/test/habits", icon: <CalendarCheck className="w-5 h-5" /> },
  { title: "Калькулятор услуг", description: "Интерактивный калькулятор стоимости услуг", demo: "/test/calculator", icon: <Calculator className="w-5 h-5" /> },
  { title: "CRM для нутрициолога", description: "Система управления клиентами и программами питания", demo: "/test/nutrition-crm", icon: <HeartPulse className="w-5 h-5" /> },
  { title: "Сайт психолога", description: "Персональный сайт специалиста с записью на консультацию", demo: "/test/psychologist", icon: <Brain className="w-5 h-5" /> },
  { title: "AI консультант", description: "Интерфейс AI-ассистента для бизнеса", demo: "/test/ai-consultant", icon: <Bot className="w-5 h-5" /> },
  { title: "AI CRM система", description: "CRM-панель с AI-автоматизацией процессов", demo: "/test/ai-crm", icon: <Database className="w-5 h-5" /> },
  { title: "AI админ-панель", description: "Административная панель управления AI-агентами", demo: "/test/ai-admin", icon: <Settings className="w-5 h-5" /> },
];

export default function PortfolioSection() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">02.</span>
        <h2 className="text-3xl font-bold">Портфолио</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="text-primary bg-primary/10 p-2 rounded-lg">{project.icon}</div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
            <button
              onClick={() => window.open(project.demo, "_blank")}
              className="w-full py-2 border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all cursor-pointer"
            >
              Открыть демо
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
