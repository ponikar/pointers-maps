import { Input } from "@mantine/core";
import React from "react";
import { Search as SearchIcon } from "react-feather";

export const Search = () => {
  return (
    <section className="w-5/12 fixed top-5 left-[50%] translate-x-[-50%]">
      <Input
        icon={<SearchIcon size={18} className="text-gray-400" />}
        placeholder="Search Location"
      />
    </section>
  );
};
