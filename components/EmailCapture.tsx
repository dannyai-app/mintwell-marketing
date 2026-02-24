"use client";

import { useState } from "react";

export default function EmailCapture({
  label = "Enter your email",
  placeholder = "you@example.com",
  cta = "Notify Me",
}: {
  label?: string;
  placeholder?: string;
  cta?: string;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to backend or 3rd-party email service
    setSubmitted(true);
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-xl mx-auto">
      <label htmlFor="email" className="block text-sm sm:text-base font-medium text-mintwell-navy mb-2">
        {label}
      </label>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto] md:items-center">
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          inputMode="email"
          autoComplete="email"
          className="w-full px-4 py-3 rounded-xl border border-mintwell-gray focus:outline-none focus:ring-2 focus:ring-mintwell-teal text-sm sm:text-base"
        />
        <button
          type="submit"
          className="w-full md:w-auto bg-mintwell-blue hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-bold transition-colors text-sm sm:text-base"
        >
          {cta}
        </button>
      </div>
      {submitted && (
        <p className="mt-3 text-sm text-green-700">Thanks! We'll be in touch soon.</p>
      )}
    </form>
  );
}
