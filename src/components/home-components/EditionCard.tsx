import Eclipse from "./aihorizons-card-camponents/Eclipse.tsx";
import BgCard from "./aihorizons-card-camponents/bg-card.tsx";
import Edition from "./aihorizons-card-camponents/Edition.tsx";
import BinaryDecoration from "./aihorizons-card-camponents/binary-decoration";
export default function EditionCard() {
  return (
    <BgCard>
      <div className="feature-card-container">
        <div className="absolute left-[94px] top-[235px]">
          <BinaryDecoration />
        </div>
        <div className="absolute right-[87px] bottom-[-215px]">
          <Eclipse />
        </div>
        <div className="flex justify-center items-center">
          <Edition />
        </div>
      </div>
    </BgCard>
  );
}
