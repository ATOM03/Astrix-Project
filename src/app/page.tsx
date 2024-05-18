"use client";

import Image from "next/image";
import Header from "./components/Header/page";
import { useState } from "react";
import AnimatedTabs from "./components/Tabs/page";

export default function Home() {
  const [active, setActive] = useState("tab1");

  return (
    <main className="w-screen h-screen">
      <div>
        <Header />
        <div className="flex flex-col  justify-center ml-16">
          <div className="mt-24">
            <div className="opacity-20 text-9xl font-extrabold ">ASTR </div>
            <div className="opacity-10 text-9xl font-extrabold ">IX</div>
            <div className="mt-32 opacity-20 text-9xl font-extrabold ">
              EVE{" "}
            </div>
            <div className="opacity-10 text-9xl font-extrabold ">NTS</div>
          </div>
        </div>
        <div className="mt-14">
          <AnimatedTabs />
        </div>
      </div>
    </main>
  );
}
