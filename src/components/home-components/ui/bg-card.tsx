import { ReactNode } from "react";

interface BgCardProps {
  children?: ReactNode;
  direction?: "left" | "right";
  isMiddle: boolean;
}

export default function BgCard({ children, direction = "right", isMiddle = false }: BgCardProps) {
  return <BgCardWrapper direction={direction} isMiddle={isMiddle}>{children}</BgCardWrapper>;
}

function BgCardWrapper({
  children,
  direction,
  isMiddle = false,
}: {
  children?: ReactNode;
  direction: "left" | "right";
  isMiddle: boolean;
}) {
  return (
    <div
      className={direction === "left" ? "scale-x-[-1]" : ""}
      style={{
        position: "relative",
        width: isMiddle ? "556px" : "264px",
        height: isMiddle ? "396px" : "412px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        clipPath: isMiddle
          ? "path('M556 24C556 10.7452 545.255 0 532 0H24C10.7452 0 0 10.7452 0 24V372C0 385.255 10.7452 396 24 396H95.4926C107.507 396 117.483 387.043 120.612 375.443C139.327 306.059 202.701 255 278 255C353.299 255 416.673 306.059 435.388 375.443C438.517 387.043 448.493 396 460.507 396H532C545.255 396 556 385.255 556 372V24Z')"
          : "path('M21.7768 153.061C9.61184 155.786 0 165.986 0 178.452V388C0 401.255 10.7452 412 24 412H240C253.255 412 264 401.255 264 388V24C264 10.7452 253.255 0 240 0H172.039C159.122 0 148.711 10.2855 146.428 22.9993C134.846 87.5001 85.3185 138.831 21.7768 153.061Z')"
      }}

    >
      <BgCardShape isMiddle={isMiddle} />
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
    </div >
  );
}

interface BgCardShapeProps {
  isMiddle: boolean
}

function BgCardShape({ isMiddle = false }: BgCardShapeProps) {
  return isMiddle ? (
    <svg
      width="556"
      height="396"
      viewBox="0 0 556 396"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>title</title>
      <mask id="path-1-inside-1_9_3821" fill="white">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M556 24C556 10.7452 545.255 0 532 0H24C10.7452 0 0 10.7452 0 24V372C0 385.255 10.7452 396 24 396H95.4926C107.507 396 117.483 387.043 120.612 375.443C139.327 306.059 202.701 255 278 255C353.299 255 416.673 306.059 435.388 375.443C438.517 387.043 448.493 396 460.507 396H532C545.255 396 556 385.255 556 372V24Z"
        />
      </mask>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M556 24C556 10.7452 545.255 0 532 0H24C10.7452 0 0 10.7452 0 24V372C0 385.255 10.7452 396 24 396H95.4926C107.507 396 117.483 387.043 120.612 375.443C139.327 306.059 202.701 255 278 255C353.299 255 416.673 306.059 435.388 375.443C438.517 387.043 448.493 396 460.507 396H532C545.255 396 556 385.255 556 372V24Z"
        fill="url(#paint0_radial_9_3821)"
      />
      <path
        d="M24 1H532V-1H24V1ZM1 372V24H-1V372H1ZM95.4926 395H24V397H95.4926V395ZM121.577 375.703C140.178 306.744 203.164 256 278 256V254C202.237 254 138.476 305.373 119.646 375.182L121.577 375.703ZM278 256C352.836 256 415.822 306.744 434.423 375.703L436.354 375.182C417.524 305.373 353.762 254 278 254V256ZM532 395H460.507V397H532V395ZM555 24V372H557V24H555ZM532 397C545.807 397 557 385.807 557 372H555C555 384.703 544.703 395 532 395V397ZM95.4926 397C108.033 397 118.351 387.663 121.577 375.703L119.646 375.182C116.614 386.422 106.981 395 95.4926 395V397ZM-1 372C-1 385.807 10.1929 397 24 397V395C11.2975 395 1 384.703 1 372H-1ZM532 1C544.703 1 555 11.2975 555 24H557C557 10.1929 545.807 -1 532 -1V1ZM434.423 375.703C437.649 387.663 447.967 397 460.507 397V395C449.019 395 439.386 386.422 436.354 375.182L434.423 375.703ZM24 -1C10.1929 -1 -1 10.1929 -1 24H1C1 11.2975 11.2975 1 24 1V-1Z"
        fill="white"
        fill-opacity="0.2"
        mask="url(#path-1-inside-1_9_3821)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_9_3821"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(278 423.929) rotate(-90) scale(295.753 296.5)"
        >
          <stop stop-color="#00ADEB" stop-opacity="0" />
          <stop offset="1" stop-color="#02234E" />
        </radialGradient>
      </defs>
    </svg>
  ) : (
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
    </svg >

  );
}


