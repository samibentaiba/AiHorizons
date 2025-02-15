import FeatureText from "./feature-content-components/feature-text.tsx";
import FeatureButton from "./feature-content-components/feature-button.tsx";
import FeatureButtonLayout from "./feature-content-components/feature-buttonlayout.tsx";
export default function FeatureContent() {
  return (
    <div className="h-96 w-full relative ">
      <div className="absolute top-[-73.5px] z-10 left-[14.5px] p-4">
        <FeatureButton />
      </div>
      <div className="absolute top-[-80px] left-[-17px] p-4">
        <FeatureButtonLayout />
      </div>
      <div className="absolute w-5000 top-[-10px] left-5 p-4">
        <FeatureText />
      </div>
    </div>
  );
}
