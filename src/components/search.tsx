import { IconSearch } from "@tabler/icons-react";
import React from "react";

const Search = () => {
  return (
    <div className="w-full duration-300 h-10 lg:h-12 bg-white p-3 rounded-full flex items-center space-x-5">
      <input
        placeholder="Search something sweet.."
        className="outline-none w-full"
      />
      <div className="bg-neutral-100 rounded-full justify-center items-center w-8 h-8 lg:h-9 lg:w-9 flex">
        <IconSearch className="h-4 w-4 lg:h-5 lg:w-5 text-neutral-600" />
      </div>
    </div>
  );
};

export default Search;
