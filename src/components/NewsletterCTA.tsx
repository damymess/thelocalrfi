"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with Resend
    setSent(true);
  };

  return (
    <section className="container-lg py-16">
      <div className="newsletter-cta">
        <div className="text-4xl mb-4">📬</div>
        <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
          Restez informé chaque semaine
        </h2>
        <p className="text-white/70 max-w-md mx-auto mb-8">
          Les meilleurs outils, guides et opportunités business — 1 email par semaine, pas de spam.
        </p>

        {sent ? (
          <div className="flex items-center justify-center gap-2 text-green-400">
            <CheckCircle size={20} />
            <span className="font-medium">Bienvenue ! Vérifiez votre boîte mail 🎉</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[var(--accent)]"
            />
            <button type="submit" className="btn-primary !rounded-xl whitespace-nowrap">
              <Send size={16} /> S&apos;inscrire
            </button>
          </form>
        )}

        <p className="mt-4 text-white/40 text-xs">
          Rejoignez 1 200+ entrepreneurs — désabonnement en 1 clic
        </p>
      </div>
    </section>
  );
}
