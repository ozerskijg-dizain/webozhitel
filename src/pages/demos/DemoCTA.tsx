import { Send } from "lucide-react";

export default function DemoCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-card text-card-foreground shadow-2xl rounded-2xl px-5 py-3.5 border border-border max-w-xs">
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground leading-tight">Нравится сайт?</span>
        <span className="text-sm font-semibold leading-tight text-foreground">Я сделаю такой для вас</span>
      </div>
      <a
        href="https://t.me/webozhitel"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 shrink-0 bg-primary hover:opacity-90 text-primary-foreground text-xs font-semibold px-4 py-2 rounded-xl transition-opacity whitespace-nowrap"
      >
        <Send className="w-3.5 h-3.5" />
        Обсудить проект
      </a>
    </div>
  );
}
