import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Do I need prior IT experience to enroll?',
    a: 'Not for our beginner courses! CompTIA Security+ and SOC Analyst Training are designed for newcomers. For intermediate and advanced courses like CEH and CISSP, we recommend some IT/networking background.',
  },
  {
    q: 'Are the courses live or self-paced?',
    a: 'We offer both formats. Most courses have live instructor-led sessions twice a week, plus self-paced lab exercises and recorded lectures you can access anytime. You choose the format that works best for you.',
  },
  {
    q: 'What certifications will I earn?',
    a: 'Each course prepares you for an industry-recognized certification exam (CompTIA, EC-Council, ISC², etc.). We include exam vouchers with most course packages and have a 98% pass rate.',
  },
  {
    q: 'Do you offer corporate training packages?',
    a: 'Yes! We work with 500+ companies globally to provide customized team training, group discounts, dedicated instructors, and enterprise lab environments. Contact us for a custom quote.',
  },
  {
    q: 'What kind of career support do you provide?',
    a: 'We offer resume building, interview prep, LinkedIn optimization, and direct connections to our hiring partner network of 200+ companies. 93% of our graduates land roles within 6 months.',
  },
  {
    q: 'Is there a money-back guarantee?',
    a: 'Absolutely. We offer a 14-day, no-questions-asked refund policy. If you\'re not satisfied with the course quality within the first two weeks, we\'ll refund your full payment.',
  },
  {
    q: 'How long do I have access to course materials?',
    a: 'You get lifetime access to all course recordings, notes, and resources. Lab environments are available for the duration of the course plus an additional 3 months of free access.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-neon-cyan text-sm font-semibold uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-5">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-neon-cyan to-neon-green bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-cyber-800/60 border rounded-xl overflow-hidden transition-all duration-300 ${
                open === i ? 'border-neon-green/30' : 'border-cyber-600/30 hover:border-cyber-500/30'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className={`font-semibold pr-4 transition-colors ${open === i ? 'text-neon-green' : 'text-white'}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    open === i ? 'rotate-180 text-neon-green' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-5 pb-5 text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
