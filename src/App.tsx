import Home from "./components/Home";
import { useEffect, useState } from "react";

export default function App(): React.ReactElement {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <Home />
      </div>
      {!isMobile && (
        <section className="w-full mt-10 flex justify-center"></section>
      )}
    </>
  );
}
