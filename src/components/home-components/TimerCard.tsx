"use client";

interface TimerProps {
  value: number;
  label: string;
}

export default function Timer({ value, label }: TimerProps) {
  return (
    <div className="px-4 sm:px-2 pt-[34px] pb-8 flex flex-col justify-center items-center w-full max-w-[189px] h-auto sm:h-[211px] p-4 sm:p-[34px_32px_32px_32px] gap-4 sm:gap-[24px] rounded-[24px] border border-[rgba(255,255,255,0.05)] bg-[#02234E]">
      <div className="text-center text-white text-4xl sm:text-[62px] font-medium font-jetbrains leading-tight sm:leading-[56px]">
      {value < 10 ? `0${value}` : value}
      </div>
      <div className="h-10 relative w-full">
        <div className="h-10 relative flex justify-center items-center">
          <div className="w-full max-w-[119.90px] h-10 absolute bg-gradient-to-r from-[rgba(0,173,235,0.10)] to-[rgba(2,35,78,0.20)]" />
          <Svgleft />
          <Svgright />
          <p className="text-[#00ADEB] text-center font-[400] text-sm sm:text-base">
          {label}
          </p>
        </div>
      </div>
    </div>
  );
}

function Svgleft() {
  return (
    <div data-svg-wrapper className="left-0 top-0 absolute">
      <svg
        width="7"
        height="40"
        viewBox="0 0 7 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full"
      >
        <title>Left border</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.39158 6L0 0H6.37755L3.98597 6H4.18878V34.5088L6.37755 40H0L2.18878 34.5088V6H2.39158Z"
          fill="#00ADEB"
        />
      </svg>
    </div>
  );
}

function Svgright() {
  return (
    <div data-svg-wrapper className="right-0 top-0 absolute">
      <svg
        width="8"
        height="40"
        viewBox="0 0 8 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full"
      >
        <title>Right border</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.28953 6L0.897949 0H7.2755L4.88392 6H5.08672V34.5088L7.2755 40H0.897949L3.08672 34.5088V6H3.28953Z"
          fill="#00ADEB"
        />
      </svg>
    </div>
  );
}
