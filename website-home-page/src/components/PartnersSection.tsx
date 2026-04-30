export default function PartnersSection() {
  const partners = [
    'EC-Council', 'CompTIA', 'ISC²', 'ISACA', 'SANS Institute',
    'Microsoft', 'AWS', 'Google Cloud', 'Cisco', 'Palo Alto Networks',
  ];

  return (
    <section className="py-16 border-y border-cyber-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-widest mb-10">
          Trusted by Leading Organizations Worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="px-6 py-3 text-gray-500 font-bold text-lg tracking-wide hover:text-gray-300 transition-colors duration-300 cursor-default"
              style={{ fontFamily: 'system-ui' }}
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
