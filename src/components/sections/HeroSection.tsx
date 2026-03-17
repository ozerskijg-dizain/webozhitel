import { ChevronDown, Send, FolderOpen } from "lucide-react";

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

export default function HeroSection({ onScrollTo }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-20 relative">
      <p className="text-primary text-sm mb-3 tracking-widest uppercase font-mono font-semibold">
        Веб-разработка &amp; автоматизация бизнеса
      </p>
      <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-foreground">
        Сайты, которые<br />
        <span className="text-primary">приводят клиентов</span>
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
        Создаю быстрые, современные сайты и решения для автоматизации бизнеса — от идеи до запуска.
      </p>
      <div className="flex gap-4 mb-16 flex-wrap">
        <button
          onClick={() => onScrollTo("projects")}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
        >
          <FolderOpen className="w-4 h-4" />
          Смотреть портфолио
        </button>
        <a
          href="https://t.me/webozhitel"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-xl text-sm font-medium hover:border-primary hover:text-primary transition-colors"
        >
          <Send className="w-4 h-4" />
          Написать в Telegram
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
