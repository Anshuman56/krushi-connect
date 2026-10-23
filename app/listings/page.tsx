import SellList from "@/lib/models/SellList";
import { dbConnect } from "@/lib/mongodb";

export default async function Listings() {
  await dbConnect();
  const listings = await SellList.find({});
  console.log(listings);

  return (
    <>
      <h1>hello</h1>
      <h2>hyy</h2>
    </>
  );
}
