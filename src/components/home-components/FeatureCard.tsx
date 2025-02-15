import TimelineDecoration from "./feature-card-components/timeline-decoration";
import BgCard from "./feature-card-components/bg-card";
import Eclipse from "./feature-card-components/Eclipse";
import FeatureContent from "./feature-card-components/feature-content";
import "./feature-card.css"; // Import the CSS file
import BinaryDecoration from "./feature-card-components/binary-decoration";
export default function FeatureCard() {
  return (
    <BgCard>
      <div className="feature-card-container">
        <div className="absolute left-[-194px] top-[-6px]">
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
