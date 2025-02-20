import Eclipse from "./ui/Eclipse.tsx";
import BgCard from "./ui/bg-card.tsx";
import Edition from "./aihorizons-card-camponents/Edition.tsx";
import BinaryDecoration from "./aihorizons-card-camponents/binary-decoration";
export default function EditionCard() {
  return (
    <BgCard isMiddle={true}>
      <div className="relative w-[100%] h-[100%]">
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
