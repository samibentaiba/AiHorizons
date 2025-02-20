
interface FeatureTextProps {
  Direction?: "left" | "right";
}

export default function FeatureText({ Direction = "right" }: FeatureTextProps) {
  const text = Object.freeze({
    up: Direction === "right" ? "Put skills into action" : "Learn AI with ease",
    down:
      Direction === "right"
        ? "Tackle real challenges and show what you’ve got."
        : "Fun, beginner-friendly workshops to get started.",
  });

  return (
    <div
      className="self-stretch h-20 flex-col justify-start items-start gap-1 flex"
      style={{ width: "200px" }}
    >
      <div className="self-stretch text-white text-lg font-bold font-['Plus Jakarta Sans'] leading-7">
        {text.up}
      </div>
      <div className="self-stretch text-white/60 text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
        {text.down}
      </div>
    </div>
  );
}

