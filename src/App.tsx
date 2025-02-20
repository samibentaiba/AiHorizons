export default function App(): React.ReactElement {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log("hello world")

  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="mt-[200px] relative max-h-[900px] w-full max-w-[1920px] px-4 md:px-6 md:mt-[100px]">
        {/* Background Images */}
        <BackgroundImage src={Hero} alt="Hero" />
        <BackgroundImage src={Blur} alt="Blur" />
        <Home isMobile={isMobile} />
        <Days isMobile={isMobile} />
      </div>
    </div>
  );
}
interface BackgroundImageProps {
  src: string;
  alt: string;
}
const BackgroundImage: React.FC<BackgroundImageProps> = ({ src, alt }) => {
  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      className="absolute"
      style={{
        left: "50%",
        top: "46%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};
import React from "react";
import Home from "./components/Home";
import Days from "./components/Days";
import Hero from "./assets/image.png";
import Blur from "./assets/blur.png";
import { useState, useEffect } from "react";
