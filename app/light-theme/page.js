import Nav from "@/components/Nav";
import NewArrival from "@/components/NewArrival";
import Collection from "@/components/Collection";
import Favorite from "@/components/Favorite";
import CategoryNav from "@/components/CategoryNav";

export default function Home() {
  return (
    <div className="md:flex md:justify-center bg-black">
      <div className="text-black bg-[#F5F5F5] min-h-screen md:w-md md:pt-2 pb-5">
        <Nav title="Welcome"/>
        <CategoryNav />
        <NewArrival />
        <Collection />
        <Favorite />
      </div>
    </div>
  );
}