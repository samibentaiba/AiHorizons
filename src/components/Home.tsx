"use client";
import { useEffect, useState } from "react";
import Brought from "./home-components/BroughtCar";
import Timer from "./home-components/TimerCard";
import useCountdown from "./home-components/useCountdown";
import EventCard from "./home-components/EventCard";
import FeatureCard from "./home-components/FeatureCard";
import Feature1Card from "./home-components/Feature1Card";
import RegisterComponent from "./home-components/RegisterComponent";
import PerformersComponent from "./home-components/PerformersComponent";
import ComingsoonComponent from "./home-components/ComingsoonComponent";
import EditionCard from "./home-components/EditionCard";
import Days from "./Days";
import Hero from "../assets/image.png";
import Blur from "../assets/blur.png";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const { Today, Hours, minutes } = useCountdown();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative max-h-[900px] w-full max-w-[1920px] px-4 md:px-6">
        {/* Background Images */}
        <img
          src={Hero || "/placeholder.svg"}
          alt="Hero"
          className="absolute"
          style={{
            left: "50%",
            top: "46%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <img
          src={Blur || "/placeholder.svg"}
          alt="Blur"
          className="absolute"
          style={{
            left: "50%",
            top: "46%",
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* Main Content */}
        <div className="flex flex-col space-y-4">
          {/* Top Section */}
          <div
            className={`flex ${isMobile ? "flex-col space-y-4" : "flex-row justify-around items-start space-x-4"}`}
          >
            {/* Coming Soon - Desktop Only */}
            {!isMobile && (
              <div className="w-full max-w-[622px]">
                <ComingsoonComponent />
              </div>
            )}

            {/* Edition Card */}
            <div className={`w-full ${isMobile ? "" : "w-[556px]"}`}>
              <EditionCard />
            </div>

            {/* Feature Cards - Mobile Only */}
            {isMobile && (
              <div className="flex flex-row justify-between w-full max-w-[556px]">
                <div className="w-[264px]">
                  <Feature1Card />
                </div>
                <div className="w-[264px]">
                  <FeatureCard />
                </div>
              </div>
            )}

            {/* Brought By & Timers */}
            <div
              className={`w-full ${isMobile ? "max-w-[556px]" : "max-w-[622px]"} space-y-4`}
            >
              <Brought />
              <div className="grid grid-cols-3 gap-2 lg:gap-4">
                <Timer value={Today} label="Days" />
                <Timer value={Hours} label="Hours" />
                <Timer value={minutes} label="minutes" />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div
            className={`flex ${isMobile ? "flex-col space-y-4" : "flex-row space-x-4"}`}
          >
            {/* Performers & Register */}
            <div
              className={`w-full ${isMobile ? "max-w-[556px]" : "flex-1 h-[220px]"} space-y-6`}
            >
              <PerformersComponent />
              <RegisterComponent />
            </div>

            {/* Feature Cards - Desktop Only */}
            {!isMobile && (
              <div className="flex flex-row gap-[20px]">
                <div className="w-[264px]">
                  <Feature1Card />
                </div>
                <div className="w-[264px]">
                  <FeatureCard />
                </div>
              </div>
            )}

            {/* Event Card */}
            <div className={`w-full ${isMobile ? "max-w-[556px]" : "flex-1"}`}>
              <EventCard />
            </div>
          </div>
        </div>

        {/* Days Component - Mobile Only */}
        {isMobile && (
          <section className="w-full max-w-[556px] flex justify-center">
            <Days />
          </section>
        )}
        {!isMobile && <Days />}
      </div>
    </div>
  );
}
