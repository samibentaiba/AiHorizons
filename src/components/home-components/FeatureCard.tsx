import TimelineDecoration from "./feature-card-components/timeline-decoration";
import BgCard from "./ui/bg-card";
import Eclipse from "./ui/Eclipse";
import FeatureContent from "./feature-card-components/feature-content";
import BinaryDecoration from "./feature-card-components/binary-decoration";
interface FeatureCardProps {
  direction?: "left" | "right";
}
export default function FeatureCard({ direction = "right" }: FeatureCardProps) {
  return (
    <div className="w-[264px]">
      <BgCard direction={direction} isMiddle={false}>

        <div className="relative w-[100%] h-[100%]">
          <div className={`absolute ${direction == "left" ? "left-[93px] top-[-7px] scale-x-[-1]" : "left-[-194px] top-[-6px]"}`}>
            <BinaryDecoration direction={direction} />
          </div>
          <div className="absolute top-[-200px] left-[-205px]">
            <Eclipse />
          </div>
          <div className="absolute left-[200px] height-[700px]">
            <TimelineDecoration direction={direction} />
          </div>
          <div className="absolute top-[300px] left-[0px]">
            <FeatureContent direction={direction} />
          </div>
        </div>
      </BgCard >
    </div >
  )
}

