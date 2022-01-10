import Scroller from "@/components/Scroller";
import React from "react";
import Header from "./Header";

export default function Layout(props: { children: React.ReactFragment }) {
  return (
    <>
      <div className="flex">
        <aside className="fixed z-40 flex-1 flex-shrink-0 float-left w-[70px] p-3 border-2 h-screen">
          <Scroller />
        </aside>

        <main className="ml-[70px]">
          <Header />
          <section
            id="content"
            className="flex-auto px-0 md:px-4 mx-auto mt-4 max-w-[1012px]"
          >
            {props.children}
          </section>
        </main>
      </div>
    </>
  );
}
