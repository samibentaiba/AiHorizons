import FeatureText from "./feature-content-components/feature-text.tsx";
import FeatureButtonright from "./feature-content-components/feature-button-right.tsx";
import FeatureButtonleft from "./feature-content-components/feature-button-left.tsx";
import FeatureButtonLayout from "./feature-content-components/feature-buttonlayout.tsx";
interface FeatureContentProps {
  direction?: "left" | "right";
}
export default function FeatureContent({ direction = "right" }: FeatureContentProps) {
  return (
    <div className="h-96 w-full relative ">
      <div className="absolute top-[-73.5px] z-10 left-[164px] scale-x-[-1] p-4">
        {direction == "right" ? <FeatureButtonright />
          : <FeatureButtonleft />}
      </div>
      <div className="absolute top-[-80px] left-[157px] p-4 scale-x-[-1]">
        <FeatureButtonLayout />
      </div>
      <div className={`absolute w-5000 top-[-10px] left-5 p-4 ${direction == "left" ? "scale-x-[-1]" : ""}`}>
        <FeatureText Direction={direction} />
      </div>
    </div>
  );
}

