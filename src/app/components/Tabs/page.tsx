"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { EventState } from "../State/atoms/EventState";

let tabs = [
  { id: "Events", label: "Events" },
  { id: "Collection", label: "Collection" },
];

export default function AnimatedTabs() {
  let [activeTab, setActiveTab] = useRecoilState(EventState);
  console.log(activeTab);

  return (
    <div className="flex space-x-1 ml-16">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-white/60"
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
