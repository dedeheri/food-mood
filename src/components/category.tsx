"use client";

import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { category } from "@/dummy/data";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
const Category = () => {
  const [selecetedMenu, setSelectedMenu] = useState<string>();

  console.log(selecetedMenu);

  return (
    <ScrollArea>
      <div className="flex space-x-2 w-full h-12 lg:h-auto overflow-x-hidden pb-1">
        {category.map((c, i) => (
          <Card
            onClick={() => setSelectedMenu(c.name)}
            key={i}
            className={`bg-white shadow-none h-9 w-full lg:w-36 lg:h-36 lg:p-3 px-5 items-center lg:items-start duration-300 flex lg:flex-col justify-between group hover:border-green-500 cursor-pointer ${
              selecetedMenu === c.name
                ? "border-green-500"
                : "border-transparent"
            }`}
          >
            <div
              className={`hidden rounded-full h-10 w-10 lg:flex items-center justify-center  ${
                selecetedMenu === c.name
                  ? "bg-green-500 text-white"
                  : "bg-neutral-100 text-neutral-500"
              }`}
            >
              {c.icon}
            </div>

            <div className="-space-y-1 ">
              <h1 className="lg:text-lg font-medium text-nowrap flex items-center">
                {c.name}
              </h1>
              <p className="text-neutral-400 hidden lg:block">{c.item} Items</p>
            </div>
          </Card>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default Category;
