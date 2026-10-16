const farmerBenefits = [
  {
    odia: "ଆପଣଙ୍କ ଫସଲର ବିବରଣୀ ଦିଅନ୍ତୁ।",
    english: "List your crops, quantity, price, location, and photo.",
  },
  {
    odia: "ସିଧାସଳଖ କ୍ରେତାଙ୍କ ସହ ଯୋଡ଼ି ହୁଅନ୍ତୁ।",
    english:
      "Connect directly with buyers without unnecessary trips to market.",
  },
  {
    odia: "ଫସଲ ରୋଗ ଚିହ୍ନଟ କରିବାରେ ସାହାଯ୍ୟ ପାଆନ୍ତୁ।",
    english:
      "Get AI-assisted crop disease identification and treatment guidance in Odia.",
  },
];

export default function FarmerSection() {
  return (
    <section id="farmers" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-3xl font-bold text-green-900">
          ଚାଷୀଙ୍କ ପାଇଁ
          <span className="mt-2 block text-xl font-medium text-gray-600">
            For Farmers
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {farmerBenefits.map((benefit) => (
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
