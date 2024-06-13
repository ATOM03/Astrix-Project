"use client";

import Image from "next/image";
import Header from "./components/Header/page";
import { useState } from "react";
import AnimatedTabs from "./components/Tabs/page";
import DemoCarousel from "./components/Carousel/page";
import Carousel from "./components/Carousel/page";
import SwiperDemo from "./components/Swiper/page";
import EventDetails from "./components/EventDeatils/page";

export default function Home() {
  const [active, setActive] = useState("tab1");
  const countries = [
    {
      image: "/brazil.jpg",
      title: "Brazil",
    },
    {
      image: "/china.jpg",
      title: "China",
    },
    {
      image: "/brazil.jpg",
      title: "Brazil",
    },
    {
      image: "/china.jpg",
      title: "China",
    },
    // {
    //   image: "/images/france.jpg",
    //   title: "France",
    // },
    // {
    //   image: "/images/japan.jpg",
    //   title: "Japan",
    // },
    // {
    //   image: "/images/norway.jpg",
    //   title: "Norway",
    // },
  ];

  return (
    <main className="w-screen h-screen flex">
      <div className="w-3/5">
        <div>
          <Header />
          <div>
            <div className="relative">
              {/* <Carousel images={countries} /> */}
              <SwiperDemo images={countries} />
            </div>

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
          </div>
          <div className="mt-14">
            <AnimatedTabs />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-2/5">
        <EventDetails />
      </div>
    </main>
  );
}
