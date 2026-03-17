import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

type FormState = {
  name: string;
  contact: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", contact: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Укажите имя";
    if (!form.contact.trim()) newErrors.contact = "Укажите способ связи (Telegram, телефон, email или VK)";
    if (!form.message.trim()) newErrors.message = "Напишите сообщение";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Новая заявка от ${form.name}`);
    const body = encodeURIComponent(
      `Имя: ${form.name}\nКак связаться: ${form.contact}\n\nСообщение:\n${form.message}`
    );
    window.open(`mailto:oz2000@yandex.ru?subject=${subject}&body=${body}`, "_blank");

    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-primary text-sm tracking-widest uppercase font-mono font-semibold">09.</span>
        <h2 className="text-3xl font-bold">Связаться со мной</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left column */}
        <div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Опишите идею своего проекта. Продолжить общение можно любым удобным способом: Telegram, телефон, email или VK.
          </p>
          <a
            href="https://t.me/webozhitel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity font-semibold text-sm shadow-sm"
          >
            <Send className="w-4 h-4" />
            Написать в Telegram
          </a>
        </div>

        {/* Right column — form */}
        <div>
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-12 gap-4 bg-card border border-border rounded-xl px-6">
              <CheckCircle className="w-12 h-12 text-primary" />
              <p className="text-foreground font-semibold text-lg">Спасибо! Сообщение отправлено.</p>
              <p className="text-muted-foreground text-sm">Я свяжусь с вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1" htmlFor="name">
                  Имя
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ваше имя"
                  className={`w-full rounded-lg border px-4 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors ${
                    errors.name ? "border-destructive" : "border-input"
                  }`}
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1" htmlFor="contact">
                  Как с вами связаться? <span className="text-muted-foreground font-normal">(Telegram / телефон / email / VK)</span>
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  value={form.contact}
                  onChange={handleChange}
                  placeholder="@username, +7 999 ..., email@..."
                  className={`w-full rounded-lg border px-4 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors ${
                    errors.contact ? "border-destructive" : "border-input"
                  }`}
                />
                {errors.contact && <p className="text-destructive text-xs mt-1">{errors.contact}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1" htmlFor="message">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Расскажите о вашем проекте..."
                  className={`w-full rounded-lg border px-4 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none ${
                    errors.message ? "border-destructive" : "border-input"
                  }`}
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
              >
                Отправить сообщение
              </button>
              <p className="text-muted-foreground text-xs text-center">
                Обычно отвечаю в течение 30–60 минут.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
