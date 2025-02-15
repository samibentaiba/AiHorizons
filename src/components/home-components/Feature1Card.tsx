import TimelineDecoration from "./feature1-card-components/timeline-decoration";
import BgCard from "./feature1-card-components/bg-card";
import Eclipse from "./feature1-card-components/Eclipse";
import FeatureContent from "./feature1-card-components/feature-content";
import "./feature1-card.css"; // Import the CSS file
import BinaryDecoration from "./feature1-card-components/binary-decoration";

export default function Feature1Card() {
  return (
    <BgCard>
      <div className="feature-card-container">
        <div className="absolute left-[93px] top-[-7px] scale-x-[-1]">
          <BinaryDecoration />
        </div>
        <div className="eclipse">
          <Eclipse />
        </div>
        <div className="timeline-decoration">
          <TimelineDecoration />
        </div>
        <div className="feature-content">
          <FeatureContent />
        </div>
      </div>
    </BgCard>
  );
}
