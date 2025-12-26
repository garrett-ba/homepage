'use client';

import { useState } from 'react';
import { submitCTAForm } from '../actions/submit-cta';

export default function CTA() {
  const [status, setStatus] = useState<{
    success: boolean;
    message?: string;
    error?: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setStatus(null);

    try {
      const result = await submitCTAForm(formData);
      setStatus(result);

      if (result.success) {
        // Reset form on success
        const form = document.getElementById('cta-form') as HTMLFormElement;
        if (form) {
          form.reset();
        }
      }
    } catch (error) {
      setStatus({
        success: false,
        error: 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-accent-green/10 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-green/5 via-transparent to-transparent" />

      {/* Subtle top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-green/30 to-transparent" />

      <div className="relative max-w-2xl mx-auto px-6">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-center">
          Let&apos;s find your quick win.
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-10 text-center">
          Book a free 30-minute call. We&apos;ll talk about what&apos;s slowing you down and whether automation makes sense for your business. No pressure, no pitch.
        </p>

        {/* Status Messages */}
        {status && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              status.success
                ? 'bg-accent-green/20 border border-accent-green/50 text-accent-green'
                : 'bg-red-500/20 border border-red-500/50 text-red-400'
            }`}
          >
            <p className="text-sm font-medium">
              {status.success ? status.message : status.error}
            </p>
          </div>
        )}

        {/* Form */}
        <form id="cta-form" action={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full h-12 px-4 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:border-accent-green/50 focus:ring-1 focus:ring-accent-green/50 transition-colors"
                minLength={1}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@company.com"
                className="w-full h-12 px-4 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:border-accent-green/50 focus:ring-1 focus:ring-accent-green/50 transition-colors"
              />
            </div>
          </div>

          {/* Business Type */}
          <div>
            <label htmlFor="business-type" className="block text-sm font-medium text-zinc-300 mb-2">
              Business Type
            </label>
            <select
              id="business-type"
              name="business-type"
              className="w-full h-12 px-4 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-accent-green/50 focus:ring-1 focus:ring-accent-green/50 transition-colors appearance-none cursor-pointer"
              defaultValue=""
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2371717a'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
                backgroundSize: "20px",
              }}
            >
              <option value="" disabled className="text-zinc-500">
                Select your industry
              </option>
              <option value="contractors">Contractors & Trades</option>
              <option value="landscaping">Landscapers & Property Services</option>
              <option value="real-estate">Real Estate & Property Management</option>
              <option value="legal">Legal & Professional Services</option>
              <option value="restaurant">Restaurants & Caterers</option>
              <option value="manufacturing">Fabricators & Manufacturers</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* What are you looking for help with */}
          <div>
            <label htmlFor="help-with" className="block text-sm font-medium text-zinc-300 mb-2">
              What are you looking for help with?
            </label>
            <textarea
              id="help-with"
              name="help-with"
              rows={4}
              placeholder="Tell us about the tasks eating up your time, or what you'd like to automate..."
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:border-accent-green/50 focus:ring-1 focus:ring-accent-green/50 transition-colors resize-none"
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 rounded-full bg-accent-green text-black font-semibold text-lg hover:bg-accent-green-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Book a Free Consultation'}
            </button>
            <a
              href="mailto:hello@bendautomation.com"
              className="inline-flex items-center text-zinc-400 hover:text-white transition-colors"
            >
              <span>Or email me directly</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
