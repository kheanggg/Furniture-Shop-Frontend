import HomeNav from "@/components/HomeNav";
import NewArrival from "@/components/NewArrival";
import Collection from "@/components/Collection";

export default function Home() {
  return (
    <div className="md:flex md:justify-center bg-black">
      <div className="text-black bg-[#F5F5F5] min-h-screen md:w-md md:pt-2">
        <HomeNav />
        <NewArrival />
        <Collection />
      </div>
    </div>
  );
}