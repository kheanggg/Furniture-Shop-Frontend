import Nav from "@/components/HomeNav";

export default function Home() {
  return (
    <div className="md:flex md:justify-center bg-black">
      <div className="text-black bg-white min-h-screen md:w-md md:pt-2">
        <Nav />
      </div>
    </div>
  );
}
