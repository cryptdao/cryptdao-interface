import Scroller from "@/components/Scroller";
import React from "react";
import Header from "./Header";
import Info from "./Info";

export default function Layout(props: { children: React.ReactFragment }) {
  return (
    <>
      <Scroller />
      <div className="sm:ml-[68px]">
        <Header />
        <div className="flex-auto px-0 md:px-4 mx-auto mt-4 max-w-[1012px]">
          <div className="hidden float-left w-1/4 lg:block">
            <Info />
          </div>
          <div className="float-right w-full pl-0 lg:pl-5 lg:w-3/4">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}
