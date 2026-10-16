const steps = [
  {
    number: "01",
    title: "List your produce",
    description: "Farmers add crop details, quantity, price, and location.",
  },
  {
    number: "02",
    title: "Discover produce",
    description: "Buyers browse available crops and find local farmers.",
  },
  {
    number: "03",
    title: "Connect directly",
    description:
      "Buyers contact farmers through WhatsApp to discuss purchases.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
          How It Works
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="text-center">
              <p className="mb-3 text-3xl font-bold text-green-700">
                {step.number}
              </p>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
