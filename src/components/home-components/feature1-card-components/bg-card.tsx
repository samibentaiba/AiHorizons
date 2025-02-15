import { ReactNode } from "react";

interface BgCardProps {
  children?: ReactNode;
}

interface BgCardWrapperProps {
  children?: ReactNode;
}

interface BgCardProps {
  children?: ReactNode;
}

export default function BgCard({ children }: BgCardProps) {
  return <BgCardWrapper>{children}</BgCardWrapper>;
}
function BgCardWrapper({ children }: BgCardWrapperProps) {
  return (
    <div
      className="scale-x-[-1]"
      style={{
        position: "relative",
        width: "264px",
        height: "412px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        clipPath:
          "path('M21.7768 153.061C9.61184 155.786 0 165.986 0 178.452V388C0 401.255 10.7452 412 24 412H240C253.255 412 264 401.255 264 388V24C264 10.7452 253.255 0 240 0H172.039C159.122 0 148.711 10.2855 146.428 22.9993C134.846 87.5001 85.3185 138.831 21.7768 153.061Z')",
      }}
    >
      <BgCardShape />
      <div
        style={{
          position: "absolute",
          zIndex: 1,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
function BgCardShape() {
  return (
    <svg
      width="264"
      height="412"
      viewBox="0 0 264 412"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", zIndex: 0 }}
    >
      <title>title</title>
      <mask id="path-1-inside-1_9_3865" fill="white">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.7768 153.061C9.61184 155.786 0 165.986 0 178.452V388C0 401.255 10.7452 412 24 412H240C253.255 412 264 401.255 264 388V24C264 10.7452 253.255 0 240 0H172.039C159.122 0 148.711 10.2855 146.428 22.9993C134.846 87.5001 85.3185 138.831 21.7768 153.061Z"
        />
      </mask>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.7768 153.061C9.61184 155.786 0 165.986 0 178.452V388C0 401.255 10.7452 412 24 412H240C253.255 412 264 401.255 264 388V24C264 10.7452 253.255 0 240 0H172.039C159.122 0 148.711 10.2855 146.428 22.9993C134.846 87.5001 85.3185 138.831 21.7768 153.061Z"
        fill="#02234E"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.7768 153.061C9.61184 155.786 0 165.986 0 178.452V388C0 401.255 10.7452 412 24 412H240C253.255 412 264 401.255 264 388V24C264 10.7452 253.255 0 240 0H172.039C159.122 0 148.711 10.2855 146.428 22.9993C134.846 87.5001 85.3185 138.831 21.7768 153.061Z"
        fill="url(#paint0_radial_9_3865)"
        fill-opacity="0.3"
      />
      <path
        d="M146.428 22.9993L145.444 22.8225L146.428 22.9993ZM1 388V178.452H-1V388H1ZM240 411H24V413H240V411ZM263 24V388H265V24H263ZM172.039 1H240V-1H172.039V1ZM145.444 22.8225C133.933 86.9256 84.7087 137.943 21.5583 152.086L21.9953 154.037C85.9282 139.719 135.759 88.0747 147.412 23.176L145.444 22.8225ZM172.039 -1C158.554 -1 147.797 9.71922 145.444 22.8225L147.412 23.176C149.625 10.8518 159.689 1 172.039 1V-1ZM265 24C265 10.1929 253.807 -1 240 -1V1C252.703 1 263 11.2975 263 24H265ZM240 413C253.807 413 265 401.807 265 388H263C263 400.703 252.703 411 240 411V413ZM1 178.452C1 166.533 10.2057 156.677 21.9953 154.037L21.5583 152.086C9.01802 154.894 -1 165.439 -1 178.452H1ZM-1 388C-1 401.807 10.1929 413 24 413V411C11.2974 411 1 400.703 1 388H-1Z"
        fill="white"
        fill-opacity="0.05"
        mask="url(#path-1-inside-1_9_3865)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_9_3865"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-12 -7.00003) rotate(56.6267) scale(501.734 501.734)"
        >
          <stop stop-color="#00ADEB" />
          <stop offset="1" stop-color="#02234E" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
