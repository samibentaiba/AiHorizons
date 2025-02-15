export default function FeatureText() {
  return (
    <div
      className="self-stretch h-20 flex-col justify-start items-start gap-1 flex scale-x-[-1]"
      style={{ width: "200px" }}
    >
      <div
        data-layer="Learn AI with ease"
        className="LearnAiWithEase self-stretch text-white text-lg font-bold font-['Plus Jakarta Sans'] leading-7"
      >
        Learn AI with ease
      </div>

      <div
        data-layer="Fun, beginner-friendly workshops to get started."
        className="FunBeginnerFriendlyWorkshopsToGetStarted self-stretch text-white/60 text-base font-normal font-['Plus Jakarta Sans'] leading-normal"
      >
        Fun, beginner-friendly workshops to get started.
      </div>
    </div>
  );
}
