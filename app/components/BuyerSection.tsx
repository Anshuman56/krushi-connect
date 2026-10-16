const buyerBenefits = [
  {
    odia: "ତାଜା ପରିବା ଖୋଜନ୍ତୁ।",
    english: "Discover fresh produce directly from local farmers.",
  },
  {
    odia: "ଫସଲ ଓ ସ୍ଥାନ ଅନୁସାରେ ଖୋଜନ୍ତୁ।",
    english: "Browse listings and filter by crop and location.",
  },
  {
    odia: "ଚାଷୀଙ୍କ ସହ ସିଧାସଳଖ ଯୋଗାଯୋଗ କରନ୍ତୁ।",
    english: "Contact farmers directly through WhatsApp for bulk purchases.",
  },
];

export default function BuyerSection() {
  return (
    <section id="buyers" className="bg-amber-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-3xl font-bold text-amber-950">
          କ୍ରେତାଙ୍କ ପାଇଁ
          <span className="mt-2 block text-xl font-medium text-gray-600">
            For Buyers
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {buyerBenefits.map((benefit) => (
            <article
              key={benefit.english}
              className="rounded-xl border border-gray-200 bg-white p-5"
            >
              <p className="mb-3 text-lg font-semibold text-green-900">
                {benefit.odia}
              </p>
              <p className="text-gray-600">{benefit.english}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
