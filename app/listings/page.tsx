import SellList from "@/lib/models/SellList";
import { dbConnect } from "@/lib/mongodb";
export const instant = false;

export default async function Listings({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  await dbConnect();
  const listings = await SellList.find({}).sort({ createdAt: -1 }).lean();
  console.log(listings);
  const filter = await searchParams;
  console.log(filter);

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        ଫସଲ ତାଲିକା
        <span className="block text-xl text-gray-600 mt-1">
          Available Crops
        </span>
      </h1>
      <form method="get">
        <select name="crop">
          <option>Tomato</option>
          <option>Potato</option>
          <option>Bean</option>
        </select>
        <label htmlFor="">
          Village: <input type="text" name="location" />
        </label>
        <button type="submit">Submit</button>
      </form>

      {listings.length === 0 ? (
        <div className="text-center py-12 bg-green-50 rounded-xl border border-green-100">
          <h2 className="text-xl font-bold text-gray-800">No listings yet</h2>
          <p className="text-gray-600 mt-2">ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ଫସଲ ନାହିଁ</p>
        </div>
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
