"use client";

import { useRecoilState } from "recoil";
import { EventState } from "../State/atoms/EventState";
import Events from "../Events/page";
import Collections from "../Collections/page";

export default function EventDetails() {
  let [activeTab, setActiveTab] = useRecoilState(EventState);
  return activeTab === "Events" ? <Events /> : <Collections />;
}
