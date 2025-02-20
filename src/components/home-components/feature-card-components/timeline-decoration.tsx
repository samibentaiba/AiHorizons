function ColorsPallet1() {
  return (
    <div className="w-[73.38px] h-[140.88px] relative">
      <div className={`w-2.5 h-2.5 left-[3px] top-[33px] absolute opacity-60 bg-[#00adeb] rounded-full border-t border-b border-white/20`} />
      <div className="w-3.5 h-3.5 left-[1px] top-[126px] absolute">
        <div className={`w-3.5 h-3.5 left-0 top-0 absolute bg-[#00adeb] rounded-full border-t border-b border-white/20 blur-[27.70px]`} />
        <div className={`w-2.5 h-2.5 left-[2px] top-[2px] absolute bg-[#00adeb] rounded-full border-t border-b border-white/20`} />
      </div>
      <div className="w-1.5 h-[31px] left-[33px] top-[44px] absolute">
        <div className={`w-1.5 h-[31px] left-0 top-0 absolute bg-[#00adeb] rounded-full blur-[16.70px]`} />
        <div className={`w-1 h-5 left-[1px] top-[4px] absolute bg-[#00adeb] rounded-full border-t border-b border-white/20`} />
      </div>
    </div>)
}

function CollorPallet2() {
  return (
    <div className="w-[73.38px] h-[140.88px] relative">
      <div className="w-2.5 h-2.5 left-[3px] top-[33px] absolute opacity-60 bg-[#FD8240] rounded-full border-t border-b border-white/20" />
      <div className="w-3.5 h-3.5 left-[1px] top-[126px] absolute">
        <div className="w-3.5 h-3.5 left-0 top-0 absolute bg-[#FD8240] rounded-full border-t border-b border-white/20 blur-[27.70px]" />
        <div className="w-2.5 h-2.5 left-[2px] top-[2px] absolute bg-[#FD8240] rounded-full border-t border-b border-white/20" />
      </div>
      <div className="w-1.5 h-[31px] left-[33px] top-[44px] absolute">
        <div className="w-1.5 h-[31px] left-0 top-0 absolute bg-[#FD8240] rounded-full blur-[16.70px]" />
        <div className="w-1 h-5 left-[1px] top-[4px] absolute bg-[#FD8240] rounded-full border-t border-b border-white/20" />
      </div>
    </div>)

}

interface FeatureCardProps {
  direction?: "left" | "right";
}
export default function TimelineDecoration({ direction }: FeatureCardProps) {
  return (
    <div className="w-[73.38px] h-[140.88px] relative">
      <div data-svg-wrapper className="left-0 top-0 absolute">
        <svg
          width="73"
          height="143"
          viewBox="0 0 73 143"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>title</title>
          <g filter="url(#filter0_di_9_3873)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M72.5 0.878677C71.3284 -0.292895 69.4289 -0.292891 68.2574 0.878681L35.9289 33.2071C35.1788 33.9572 34.1614 34.3787 33.1005 34.3787H17.696C16.1662 34.3787 14.8294 33.4402 13.7696 32.3371C12.3139 30.8219 10.2671 29.8789 8 29.8789C3.58172 29.8789 0 33.4606 0 37.8789C0 42.2972 3.58172 45.8789 8 45.8789C10.5133 45.8789 12.7559 44.7199 14.2225 42.9073C15.3094 41.5639 16.7696 40.3787 18.4976 40.3787H29C31.2091 40.3787 33 42.1695 33 44.3787L33 102.565C33 103.891 32.4732 105.163 31.5355 106.101L13.9073 123.729C12.6565 124.98 10.731 125.151 8.97496 124.938C8.65541 124.899 8.33004 124.879 8 124.879C3.58172 124.879 0 128.461 0 132.879C0 137.297 3.58172 140.879 8 140.879C12.4183 140.879 16 137.297 16 132.879C16 131.39 16.2956 129.826 17.3483 128.773L35.7782 110.343C37.8411 108.28 39 105.482 39 102.565L39 40.2782C39 39.2173 39.4214 38.1999 40.1716 37.4497L72.5 5.12132C73.6716 3.94975 73.6716 2.05025 72.5 0.878677Z"
              fill="black"
              fill-opacity="0.25"
              shape-rendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_di_9_3873"
              x="0"
              y="0"
              width="75.3789"
              height="142.879"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_9_3873"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_9_3873"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.00547059 0 0 0 0 0.0187459 0 0 0 0 0.116098 0 0 0 0.6 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_9_3873"
              />
            </filter>
          </defs>
        </svg>
      </div>
      {direction == "right" ? <ColorsPallet1 /> : <CollorPallet2 />}

    </div>
  )
}

