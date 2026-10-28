import SellList from "@/lib/models/SellList";
import { dbConnect } from "@/lib/mongodb";
import { connection } from "next/server";

import Link from "next/link";
export const instant = false;
type SearchParams = Promise<{
  crop?: string;
  village?: string;
}>;

export default async function Listings({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  await connection();
  const params = await searchParams;

  const cropName = params.crop?.trim() ?? "";
  const location = params.village?.trim() ?? "";
  const filter: Record<string, unknown> = {};

  // 2. Add filters only when values exist
  if (cropName) {
    filter.cropName = { $regex: cropName, $options: "i" };
  }

  if (location) {
    filter.location = { $regex: location, $options: "i" };
  }
  await dbConnect();
  const listings = await SellList.find(filter).sort({ createdAt: -1 }).lean();
  console.log(listings);
  const hasFilters = Boolean(cropName || location);
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        ଫସଲ ତାଲିକା
        <span className="block text-xl text-gray-600 mt-1">
          Available Crops
        </span>
      </h1>
      <form action="/listings" method="GET" className="mb-6 flex space-x-4">
        <div>
          <label htmlFor="crop" className="block mb-1">
            Crop / ଫସଲ
          </label>

          <select
            id="crop"
            name="crop"
            defaultValue={cropName}
            className="w-full border rounded-lg p-3"
          >
            <option value="">All crops</option>
            <option value="tomato">Tomato</option>
            <option value="potato">Potato</option>
            <option value="onion">Onion</option>
            <option value="rice">Rice</option>
          </select>
        </div>

        <div>
          <label htmlFor="village" className="block mb-1">
            Village / ଗାଁ
          </label>

          <input
            id="village"
            name="village"
            type="text"
            defaultValue={location}
            placeholder="Enter village name"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <button
          type="submit"
          className="bg-green-700 text-white rounded-lg px-5 py-3 mt-6"
        >
          Apply filters / ଫିଲ୍ଟର କରନ୍ତୁ
        </button>
      </form>

      {hasFilters && listings.length === 0 ? (
        <div className="py-8">
          <p className="text-lg font-semibold">
            No {cropName || "crop"} listings
            {location ? ` in ${location}` : ""} yet.
          </p>

          <p className="text-gray-600 mt-2">
            {location
              ? `${location} ଗାଁରେ ଏପର୍ଯ୍ୟନ୍ତ ଏହି ଫସଲର ବିଜ୍ଞାପନ ନାହିଁ।`
              : "ଏହି ଫସଲ ପାଇଁ ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ବିଜ୍ଞାପନ ନାହିଁ।"}
          </p>

          <Link
            href="/listings"
            className="inline-block mt-4 text-green-700 underline"
          >
            Clear filters / ଫିଲ୍ଟର ହଟାନ୍ତୁ
          </Link>
        </div>
      ) : listings.length === 0 ? (
        // No listings exist at all
        <p>No listings yet / ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ଫସଲ ନାହିଁ</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {listings.map((listing) => {
            const message = `Hello, I am interested in your ${listing.cropName} crop. Is it available?`;
            const phone = String(listing.mobNumber).replace(/\D/g, "");
            const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

            return (
              <article
                key={String(listing._id)}
                className="bg-white rounded-xl border border-gray-200 p-5"
              >
                <h2 className="text-xl font-bold">{listing.cropName}</h2>
                <p className="text-lg font-semibold text-gray-800">
                  {listing.farmerName}
                </p>

                <p className="text-lg mt-4">
                  {listing.cropQuantity} kg · ₹{listing.cropPrice}/kg
                </p>

                <p className="text-sm text-gray-600 mt-1">{listing.location}</p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg py-3 px-4 mt-5 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </article>
            );
          })}
        </div>
      )}
    </main>
  );
}
