"use client";

import { useState } from "react";

export default function SupportForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <h3 className="text-2xl font-bold text-mintwell-navy mb-2">Thanks! We received your request.</h3>
        <p className="text-gray-600">Our team will reach out shortly (usually within 2 hours).</p>
      </div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-mintwell-navy font-semibold mb-3 text-lg" htmlFor="name">Full Name *</label>
          <input id="name" required className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-mintwell-blue focus:outline-none transition-colors text-lg" placeholder="Enter your full name" />
        </div>
        <div>
          <label className="block text-mintwell-navy font-semibold mb-3 text-lg" htmlFor="email">Email Address *</label>
          <input id="email" type="email" required className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-mintwell-blue focus:outline-none transition-colors text-lg" placeholder="your.email@company.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-mintwell-navy font-semibold mb-3 text-lg" htmlFor="topic">Support Topic *</label>
          <select id="topic" required className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-mintwell-blue focus:outline-none transition-colors text-lg bg-white">
            <option value="">Select a topic...</option>
            <option value="billing">Billing & Subscriptions</option>
            <option value="technical">Technical Help</option>
            <option value="onboarding">Getting Started</option>
            <option value="general">General Questions</option>
          </select>
        </div>
        <div>
          <label className="block text-mintwell-navy font-semibold mb-3 text-lg" htmlFor="priority">Priority Level</label>
          <select id="priority" className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-mintwell-blue focus:outline-none transition-colors text-lg bg-white">
            <option value="normal">Normal</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-mintwell-navy font-semibold mb-3 text-lg" htmlFor="subject">Subject Line *</label>
        <input id="subject" required className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-mintwell-blue focus:outline-none transition-colors text-lg" placeholder="Brief description of your issue" />
      </div>

      <div>
        <label className="block text-mintwell-navy font-semibold mb-3 text-lg" htmlFor="message">Detailed Message *</label>
        <textarea id="message" required rows={6} className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-mintwell-blue focus:outline-none transition-colors text-lg resize-none" placeholder="Please provide as much detail as possible..."></textarea>
      </div>

      <div className="bg-gray-50 rounded-xl p-6">
        <h4 className="font-semibold text-mintwell-navy mb-4">Attachments (Optional)</h4>
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
          <p className="text-gray-600 mb-2">Drag and drop files here, or click to browse</p>
          <p className="text-sm text-gray-500">Supported formats: PDF, PNG, JPG, DOC (Max 10MB)</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <button type="submit" className="flex-1 bg-mintwell-blue text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg">
          {loading ? "Submitting..." : "Submit Support Request"}
        </button>
        <button type="reset" className="bg-gray-100 text-gray-600 py-4 px-8 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-colors">
          Clear Form
        </button>
      </div>
    </form>
  );
}

