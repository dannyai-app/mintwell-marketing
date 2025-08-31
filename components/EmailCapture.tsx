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
    <form onSubmit={onSubmit} className="w-full max-w-md mx-auto">
      <label htmlFor="email" className="block text-sm font-medium text-mintwell-navy mb-2">
        {label}
      </label>
      <div className="flex gap-2">
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-4 py-3 rounded-xl border border-mintwell-gray focus:outline-none focus:ring-2 focus:ring-mintwell-teal"
        />
        <button
          type="submit"
          className="bg-mintwell-blue hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-bold transition-colors"
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
