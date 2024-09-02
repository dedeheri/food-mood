import Category from "@/components/category";
import Navbar from "@/components/navbar";
import Search from "@/components/search";

export default function Home() {
  return (
    <div className="bg-neutral-100 w-full h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 space-y-2 lg:space-y-5 duration-300">
        {/* header */}
        <Navbar />
        {/* category */}
        <Category />
        {/* search */}
        <Search />
        {/* menu */}
      </div>
    </div>
  );
}
