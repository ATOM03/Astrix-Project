"use client";

import { useRecoilState } from "recoil";
import { EventState } from "../State/atoms/EventState";

export default function EventDetails() {
  let [activeTab, setActiveTab] = useRecoilState(EventState);
  return activeTab === "Events" ? <div>Events</div> : <div>Collections</div>;
}
