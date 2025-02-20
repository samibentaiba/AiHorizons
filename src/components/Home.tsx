"use client";
interface HomeInterface {
  isMobile: boolean;
}
export default function Home({ isMobile }: HomeInterface): ReactElement {
  const { Today, Hours, minutes } = useCountdown();
  return (
    < div className="flex flex-col space-y-4" >
      {/* Top Section */}
      <div className={`flex ${isMobile ? "flex-col space-y-4" : "flex-row justify-around items-start space-x-4"}`}>
        {/* Coming Soon - Desktop Only */}
        {!isMobile && (<ComingsoonComponent />)}
        {/* Edition Card */}
        <div className={`w-full ${isMobile ? "" : "w-[556px]"}`}>
          <EditionCard />
        </div>
        {/* Feature Cards - Mobile Only */}
        {isMobile && (<div className="flex flex-row justify-between w-full max-w-[556px]">
          <FeatureCard direction="left" />
          <FeatureCard direction="right" />

        </div>)}

        {/* Brought By & Timers */}
        <div className={`w-full ${isMobile ? "max-w-[556px]" : "max-w-[622px]"} space-y-4`}>
          <Brought />
          <div className="grid grid-cols-3 gap-2 lg:gap-4">
            <Timer value={Today} label="Days" />
            <Timer value={Hours} label="Hours" />
            <Timer value={minutes} label="minutes" />
          </div>
        </div>
      </div >
      {/* Bottom Section */}
      <div className={`flex ${isMobile ? "flex-col space-y-4" : "flex-row space-x-4"}`}>
        {/* Performers & Register */}
        <div className={`w-full ${isMobile ? "max-w-[556px]" : "flex-1 h-[220px]"} space-y-6`}>
          <PerformersComponent />
          <RegisterComponent />
        </div >
        {/* Feature Cards - Desktop Only */}
        {!isMobile && (
          <div className="flex flex-row gap-[20px]">
            <FeatureCard direction="left" />
            <FeatureCard direction="right" />

          </div>)}
        {/* Event Card */}
        <div className={`w-full ${isMobile ? "max-w-[556px]" : "flex-1"}`}>
          <EventCard />
        </div>
      </div >
    </div >
  );
}
import { ReactElement } from "react";
import Brought from "./home-components/BroughtCar";
import Timer from "./home-components/TimerCard";
import useCountdown from "./home-components/useCountdown";
import EventCard from "./home-components/EventCard";
import FeatureCard from "./home-components/FeatureCard";
import RegisterComponent from "./home-components/RegisterComponent";
import PerformersComponent from "./home-components/PerformersComponent";
import ComingsoonComponent from "./home-components/ComingsoonComponent";
import EditionCard from "./home-components/EditionCard";

