import Scroller from "@/components/Scroller";
import React from "react";
import Header from "./Header";

export default function Layout(props: { children: React.ReactFragment }) {
  return (
    <>
      <Scroller />
      <div className="sm:ml-[68px]">
        <Header />
        <div className="flex-auto px-0 md:px-4 mx-auto mt-4 max-w-[1012px]">
          {props.children}
        </div>
      </div>
    </>
  );
}
