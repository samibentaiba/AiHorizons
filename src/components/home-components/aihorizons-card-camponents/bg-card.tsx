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
      style={{
        position: "relative",
        width: "556px",
        height: "396px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        clipPath:
          "path('M556 24C556 10.7452 545.255 0 532 0H24C10.7452 0 0 10.7452 0 24V372C0 385.255 10.7452 396 24 396H95.4926C107.507 396 117.483 387.043 120.612 375.443C139.327 306.059 202.701 255 278 255C353.299 255 416.673 306.059 435.388 375.443C438.517 387.043 448.493 396 460.507 396H532C545.255 396 556 385.255 556 372V24Z')",
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
  );
}
