import React, { useState, useEffect } from 'react';
import { Phone, AlertCircle, CheckCircle2 } from 'lucide-react';
import { VERIFIED_FACTS } from '../data/workshopData';
import { validateCallbackForm, CallbackValidationResult } from '../utils/validation';

interface CallbackFormProps {
  initialTopic?: string;
  id?: string;
}

export const CallbackForm: React.FC<CallbackFormProps> = ({ initialTopic = '', id = 'callback-form' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(initialTopic);
  const [validation, setValidation] = useState<CallbackValidationResult | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    phone: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    if (initialTopic) {
      setMessage(initialTopic);
      setSubmittedData(null);
    }
  }, [initialTopic]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateCallbackForm({ name, phone, message });
    setValidation(result);
    if (result.valid) {
      setSubmittedData({
        name: name.trim(),
        phone: phone.trim(),
        message: message.trim(),
      });
    } else {
      setSubmittedData(null);
    }
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setMessage('');
    setValidation(null);
    setSubmittedData(null);
  };

  return (
    <div
      id={id}
      className="bg-white border border-[#DCD9D0] p-6 sm:p-8 text-[#111214]"
    >
      <div className="border-b border-[#E6E3DA] pb-4 mb-6">
        <p className="text-xs font-medium text-[#60656F] uppercase tracking-wider">
          Interactive Demonstration Form · Non-Transmitting
        </p>
        <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#111214] mt-1">
          Request a Workshop Callback (Demo Only)
        </h3>
        <p className="mt-1.5 text-sm text-[#4A4F58]">
          This preview form demonstrates layout and input validation only. To speak with Westend Auto Repairs, call{' '}
          <a
            href={VERIFIED_FACTS.phoneHref}
            className="font-mono-num font-semibold text-[#C83E2B] underline underline-offset-2 hover:text-[#111214]"
          >
            {VERIFIED_FACTS.phoneDisplay}
          </a>
          .
        </p>
      </div>

      {submittedData && validation?.valid ? (
        <div
          role="status"
          aria-live="polite"
          className="bg-[#181A1E] text-white p-6 border border-[#111214]"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#E56B58] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-3">
              <p className="text-base sm:text-lg font-semibold text-white">
                {VERIFIED_FACTS.callbackDemoMessage}
              </p>
              <p className="text-sm text-[#C4C9D4]">
                No email or SMS has been sent from this independent demo site. Use the direct workshop phone link below to reach Westend Auto Repairs at {VERIFIED_FACTS.fullAddress}.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={VERIFIED_FACTS.phoneHref}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#C83E2B] hover:bg-[#B23321] transition-colors rounded-sm whitespace-nowrap shrink-0"
                >
                  <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Call {VERIFIED_FACTS.phoneDisplay}</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2.5 text-sm font-medium text-[#D8D6D0] hover:text-white border border-white/20 hover:border-white/40 transition-colors rounded-sm whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Reset demo form
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <label
              htmlFor={`${id}-name`}
              className="block text-sm font-semibold text-[#181A1E] mb-1.5"
            >
              Your name <span className="text-[#C83E2B]">*</span>
            </label>
            <input
              id={`${id}-name`}
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Sam Mitchell"
              aria-invalid={Boolean(validation?.errors.name)}
              aria-describedby={validation?.errors.name ? `${id}-name-error` : undefined}
              className="w-full px-3.5 py-2.5 text-sm bg-[#F9F8F6] border border-[#C8C4B8] text-[#111214] placeholder:text-[#7A7F89] focus:outline-none focus:border-[#111214] focus:bg-white transition-colors"
            />
            {validation?.errors.name && (
              <p
                id={`${id}-name-error`}
                role="alert"
                className="mt-1.5 text-xs font-medium text-[#B83322] flex items-center gap-1.5"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{validation.errors.name}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor={`${id}-phone`}
              className="block text-sm font-semibold text-[#181A1E] mb-1.5"
            >
              Phone number <span className="text-[#C83E2B]">*</span>
            </label>
            <input
              id={`${id}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 0412 345 678 or 02 6331 2920"
              aria-invalid={Boolean(validation?.errors.phone)}
              aria-describedby={validation?.errors.phone ? `${id}-phone-error` : undefined}
              className="w-full px-3.5 py-2.5 text-sm bg-[#F9F8F6] border border-[#C8C4B8] text-[#111214] placeholder:text-[#7A7F89] focus:outline-none focus:border-[#111214] focus:bg-white transition-colors font-mono-num"
            />
            {validation?.errors.phone && (
              <p
                id={`${id}-phone-error`}
                role="alert"
                className="mt-1.5 text-xs font-medium text-[#B83322] flex items-center gap-1.5"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{validation.errors.phone}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor={`${id}-message`}
              className="block text-sm font-semibold text-[#181A1E] mb-1.5"
            >
              Vehicle & repair notes <span className="text-[#C83E2B]">*</span>
            </label>
            <textarea
              id={`${id}-message`}
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Vehicle make/model and what you need checked..."
              aria-invalid={Boolean(validation?.errors.message)}
              aria-describedby={validation?.errors.message ? `${id}-message-error` : undefined}
              className="w-full px-3.5 py-2.5 text-sm bg-[#F9F8F6] border border-[#C8C4B8] text-[#111214] placeholder:text-[#7A7F89] focus:outline-none focus:border-[#111214] focus:bg-white transition-colors"
            />
            {validation?.errors.message && (
              <p
                id={`${id}-message-error`}
                role="alert"
                className="mt-1.5 text-xs font-medium text-[#B83322] flex items-center gap-1.5"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>{validation.errors.message}</span>
              </p>
            )}
          </div>

          <div className="pt-1 flex flex-wrap items-center justify-between gap-4">
            <button
              type="submit"
              className="px-6 py-3 text-sm font-semibold text-white bg-[#C83E2B] hover:bg-[#B23321] transition-colors rounded-sm whitespace-nowrap shrink-0 cursor-pointer"
            >
              Test callback request (Demo)
            </button>
            <a
              href={VERIFIED_FACTS.phoneHref}
              className="text-xs sm:text-sm font-mono-num font-semibold text-[#111214] hover:text-[#C83E2B] underline underline-offset-4 transition-colors"
            >
              Or call {VERIFIED_FACTS.phoneDisplay} directly
            </a>
          </div>
        </form>
      )}
    </div>
  );
};
