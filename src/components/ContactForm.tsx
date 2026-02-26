"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      body.append(key, String(value));
    }

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario");
      }

      window.location.href = "/contact/success";
    } catch {
      setIsSubmitting(false);
      window.alert("No se pudo enviar el mensaje. Intenta nuevamente.");
    }
  }

  return (
    <form
      name="contact"
      action="/__forms.html"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border border-black/10 p-5 dark:border-white/10"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="subject" value="Nuevo contacto desde Portafolio Virtual" />
      <p className="hidden">
        <label htmlFor="bot-field">
          No llenar este campo si eres humano:
          <input id="bot-field" name="bot-field" />
        </label>
      </p>
      <div className="space-y-1">
        <label htmlFor="name" className="text-sm font-medium">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-black/15 px-3 py-2 text-sm dark:border-white/20"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-black/15 px-3 py-2 text-sm dark:border-white/20"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="message" className="text-sm font-medium">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-black/15 px-3 py-2 text-sm dark:border-white/20"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-zinc-900"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
