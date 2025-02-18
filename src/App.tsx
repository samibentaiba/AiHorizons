import Home from "./components/Home";
import { useEffect, useState } from "react";

export default function App(): React.ReactElement {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
  };

  window.addEventListener("resize", handleResize);
  handleResize(); // فحص فوري عند التحميل

  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
      <div className="flex justify-center items-center w-full">
        <Home />
      </div>
  );
}
