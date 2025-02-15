import ITCLogo from "/ITCLogo.svg?url";

export default function SquareCard() {
  return (
    <div
      data-layer="card"
      className="flex w-full max-w-[622px] min-w-[350px] h-[164px] p-8 flex-col justify-center items-start flex-shrink-0 rounded-[24px] border"
      style={{
        border: "1px solid rgba(255, 255, 255, 0.05)",
        background:
          "radial-gradient(120.39% 158.57% at -30.31% 113.92%, rgba(0, 173, 235, 0.30) 0%, rgba(2, 35, 78, 0.00) 100%), #02234E",
      }}
    >
      <div className="self-stretch h-16 flex-col justify-start items-center gap-3 flex">
        <div data-svg-wrapper className="relative">
          <img
            src={ITCLogo}
            alt="ITC Logo"
            style={{
              width: "56px",
              height: "45.78px",
              aspectRatio: "56 / 45.78",
            }}
          />
        </div>
        <div className="text-center text-white/60 text-lg font-normal font-['Plus Jakarta Sans'] leading-7">
          Brought to you by ITC
        </div>
      </div>
    </div>
  );
}
