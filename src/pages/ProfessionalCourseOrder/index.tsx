import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar as MainNavbar } from '../../components/Navbar';
import SiteFooter from '../../components/SiteFooter';

type PaymentMethodKey = 'bkash' | 'nagad';
type PaymentMethod = PaymentMethodKey | '';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  paymentMethod: PaymentMethod;
  transactionId: string;
  acceptTerms: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  paymentMethod?: string;
  transactionId?: string;
  acceptTerms?: string;
}

const PAYMENT_CONFIG = {
  bkash: {
    name: 'bKash',
    number: '01740570244',
    bg: 'bg-pink-500',
    bgLight: 'bg-pink-50',
    text: 'text-pink-400',
    border: 'border-pink-500',
    ring: 'ring-pink-400',
    label: 'bKash',
  },
  nagad: {
    name: 'Nagad',
    number: '01740570244',
    bg: 'bg-orange-500',
    bgLight: 'bg-orange-50',
    text: 'text-orange-400',
    border: 'border-orange-500',
    ring: 'ring-orange-400',
    label: 'Nagad',
  },
} as const;

const COURSE_PRICE = 1499;
const ORIGINAL_PRICE = 4999;
const DISCOUNT = ORIGINAL_PRICE - COURSE_PRICE;

export const ProfessionalCourseOrder = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    paymentMethod: '',
    transactionId: '',
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^(\+88)?01[3-9]\d{8}$/.test(phone.replace(/\s/g, ''));

  const validateForm = () => {
    const e: FormErrors = {};
    if (!formData.fullName.trim()) e.fullName = 'Full name is required';
    if (formData.email.trim() && !validateEmail(formData.email)) e.email = 'Enter a valid email';
    if (formData.phone.trim() && !validatePhone(formData.phone)) e.phone = 'Enter a valid BD phone number (01XXXXXXXXX)';
    if (!formData.paymentMethod) e.paymentMethod = 'Select bKash or Nagad';
    if (!formData.transactionId.trim()) e.transactionId = 'Transaction ID is required';
    else if (formData.transactionId.trim().length < 6) e.transactionId = 'Minimum 6 characters';
    if (!formData.acceptTerms) e.acceptTerms = 'Please accept the terms';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1800));
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const handleDone = () => {
    setShowSuccess(false);
    navigate('/');
  };

  const payment = formData.paymentMethod ? PAYMENT_CONFIG[formData.paymentMethod as PaymentMethodKey] : null;
  const selected = formData.paymentMethod;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* ── NAVBAR (shared main navigation) ── */}
      <MainNavbar />

      {/* ── PAGE CONTENT (offset for fixed navbar) ── */}
      <div className="pt-20">

        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.08),transparent_60%)]" />
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
                Premium Course Enrollment
              </span>
              <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                [CyberCracker] Hacker Pathway – Level 1 (Batch 01 | May)
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
                Pay securely using <span className="font-semibold text-pink-400">bKash</span> or{' '}
                <span className="font-semibold text-orange-400">Nagad</span>. Get instant access after verification.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
                {['20+ hours video', 'Lifetime access', 'Certificate included'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== CHECKOUT ===== */}
        <section className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">

            {/* ---- LEFT: FORM ---- */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 sm:p-8 backdrop-blur-sm"
            >
              <h2 className="text-lg font-semibold text-white">Your Information</h2>
              <p className="mt-1 text-sm text-slate-400">Fill in your details and complete payment.</p>
              
              <div className="mt-3 rounded-lg bg-blue-500/10 border border-blue-500/30 p-3">
                <p className="text-sm text-blue-300">
                  <span className="font-semibold">Important:</span> After payment, use your transaction ID to join our Facebook group. The transaction ID will be the answer to the membership question. You'll find class routine, syllabus, recordings, assignments, and all resources in the group.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <InputField
                    label="Full Name" required error={errors.fullName}
                    id="fullName" name="fullName" value={formData.fullName}
                    onChange={handleChange} placeholder="John Doe"
                  />
                  <InputField
                    label="Email" error={errors.email}
                    id="email" name="email" type="email" value={formData.email}
                    onChange={handleChange} placeholder="john@example.com (optional)"
                  />
                </div>
                <InputField
                  label="Phone Number" error={errors.phone}
                  id="phone" name="phone" type="tel" value={formData.phone}
                  onChange={handleChange} placeholder="01XXXXXXXXX (optional)"
                />
              </div>

              {/* ---- ENROLLMENT VIDEO removed from here; moved to summary column ---- */}

              {/* ---- PAYMENT METHOD ---- */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-white">Payment Method</h2>
                <p className="mt-1 text-sm text-slate-400">Choose your preferred mobile wallet.</p>

                {errors.paymentMethod && (
                  <p className="mt-2 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-400">{errors.paymentMethod}</p>
                )}

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {(Object.keys(PAYMENT_CONFIG) as PaymentMethodKey[]).map((key) => {
                    const cfg = PAYMENT_CONFIG[key];
                    const active = selected === key;
                    return (
                      <motion.button
                        key={key}
                        type="button"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, paymentMethod: key }));
                          setErrors((prev) => ({ ...prev, paymentMethod: undefined }));
                        }}
                        className={`relative flex items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                          active
                            ? `${cfg.border} ring-1 ${cfg.ring}/40`
                            : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600'
                        }`}
                      >
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${active ? cfg.bg : 'bg-slate-700'} text-white font-bold text-sm shadow-lg`}>
                          {cfg.label}
                        </div>
                        <div className="flex-1">
                          <p className={`font-semibold ${active ? 'text-white' : 'text-slate-300'}`}>{cfg.name}</p>
                          <p className="mt-0.5 text-xs text-slate-500">{cfg.number}</p>
                        </div>
                        {active && (
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500">
                            <svg className="h-3.5 w-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* ---- PAYMENT INSTRUCTIONS + TXN ID ---- */}
              <AnimatePresence mode="wait">
                {payment && (
                  <motion.div
                    key={payment.name}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-6 overflow-hidden"
                  >
                    <div className={`rounded-xl border ${payment.border}/30 p-4`}>
                      <h3 className="text-sm font-semibold text-white">Pay with {payment.name}</h3>
                      <p className="mt-1 text-sm text-slate-400">
                        Send <span className="font-semibold text-white">৳{COURSE_PRICE.toLocaleString()}</span> to{' '}
                        <span className={`font-semibold ${payment.text}`}>{payment.number}</span>,
                        then enter the transaction ID below.
                      </p>
                    </div>
                    <div className="mt-4">
                      <InputField
                        label="Transaction ID" required error={errors.transactionId}
                        id="transactionId" name="transactionId" value={formData.transactionId}
                        onChange={handleChange} placeholder="e.g. TRX123ABC"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ---- TERMS + SUBMIT ---- */}
              <div className="mt-8 space-y-4">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="mt-0.5 h-4 w-4 rounded border-slate-600 bg-slate-700 text-indigo-500 focus:ring-indigo-500"
                  />
                  <span className="text-sm text-slate-400">
                    I agree to the{' '}
                    <a href="#" className="font-medium text-indigo-400 hover:underline">terms &amp; conditions</a>
                  </span>
                </label>
                {errors.acceptTerms && <p className="text-sm text-red-400">{errors.acceptTerms}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      Complete Order — ৳{COURSE_PRICE.toLocaleString()}
                    </span>
                  )}
                </button>
              </div>
            </motion.form>

            {/* ---- RIGHT: SUMMARY ---- */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 backdrop-blur-sm">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Order Summary</h3>

                <div className="mt-4 flex items-start gap-3 rounded-xl bg-slate-800/60 p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white text-xs font-bold flex-shrink-0">
                    CC
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Hacker Pathway – Level 1 (Batch 01)</p>
                    <p className="mt-0.5 text-xs text-slate-500">20+ hours &bull; Certificate &bull; Lifetime</p>
                  </div>
                </div>

                <div className="mt-4 space-y-2 border-t border-slate-700/50 pt-4 text-sm">
                  <div className="flex justify-between text-slate-400">
                    <span>Original Price</span>
                    <span className="line-through">৳{ORIGINAL_PRICE.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount</span>
                    <span>-৳{DISCOUNT.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Fee</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-700/50 pt-3 text-base font-semibold text-white">
                    <span>Total</span>
                    <span>৳{COURSE_PRICE.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">30-Day Money-Back Guarantee</p>
                    <p className="text-xs text-slate-400">Full refund if you're not satisfied.</p>
                  </div>
                </div>
              </div>

              {/* ---- ENROLLMENT VIDEO (moved here) ---- */}
              <div className="mt-4 rounded-2xl border border-slate-700/40 bg-slate-800 p-4">
                <h4 className="text-sm font-semibold text-white mb-2">Enrollment Guide</h4>
                <p className="text-xs text-slate-400 mb-3">Quick walkthrough — complete enrollment steps</p>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/GygxdwZBLDo"
                    title="How to Enroll"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 rounded-2xl border border-slate-700/50 bg-slate-800/20 px-5 py-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">🔒 SSL Encrypted</span>
                <span className="flex items-center gap-1">✅ Manual Verification</span>
              </div>
            </motion.aside>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <SiteFooter />
      </div>

      {/* ===== SUCCESS MODAL ===== */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleDone} />
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-sm rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center shadow-2xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/30">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">Order Confirmed!</h3>
              <p className="mt-2 text-sm text-slate-400">
                Thank you for your enrollment! Next step: Join our Facebook group to access all course materials.
              </p>
              
              <div className="mt-4 rounded-xl bg-slate-800/50 p-4 text-left text-sm">
                <p className="font-semibold text-white mb-2">📋 Next Steps:</p>
                <p className="text-slate-400 mb-3">1. Join our Facebook group using the link below</p>
                <p className="text-slate-400 mb-3">2. Use your transaction ID as the answer to the membership question</p>
                <p className="text-slate-400 mb-4">3. Once approved, you'll find class routine, syllabus, recordings, assignments, and all resources in the group</p>
                
                <a
                  href="https://www.facebook.com/share/g/1FxQcDyXDA/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors mb-4"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Join Facebook Group
                </a>
                
                <div className="border-t border-slate-700 pt-3 mt-3">
                  <p className="text-xs text-slate-500">Transaction ID: <span className="font-mono text-slate-300">{formData.transactionId}</span></p>
                  <p className="text-xs text-slate-500 mt-1">Amount: <span className="font-semibold text-indigo-400">৳{COURSE_PRICE.toLocaleString()}</span></p>
                </div>
              </div>
              <button
                onClick={handleDone}
                className="mt-6 w-full rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ---- Reusable Input ---- */
function InputField({
  label, required, error, id, name, type = 'text', value, onChange, placeholder,
}: {
  label: string;
  required?: boolean;
  error?: string;
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-300">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-slate-800/50 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:ring-2 ${
          error
            ? 'border-red-500/50 focus:ring-red-500/30'
            : 'border-slate-700/50 focus:border-indigo-500/50 focus:ring-indigo-500/20'
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
}
