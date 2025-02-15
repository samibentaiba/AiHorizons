export default function FeatureButtonLayout() {
  return (
    <>
      <div data-svg-wrapper>
        <svg
          width="91"
          height="66"
          viewBox="0 0 91 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>title</title>
          <g filter="url(#filter0_di_9_3885)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M58 64C75.6731 64 90 49.6731 90 32C90 14.3269 75.6731 0 58 0C41.9801 0 28.7096 11.7719 26.3671 27.1372C26.0414 29.2739 24.2976 31 22.1362 31H-35C-36.6569 31 -38 32.3431 -38 34C-38 35.6569 -36.6569 37 -35 37H22.967C24.9368 37 26.5869 38.4443 27.0993 40.3462C30.7706 53.972 43.2142 64 58 64Z"
              fill="black"
              fill-opacity="0.25"
              shape-rendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_di_9_3885"
              x="-39"
              y="0"
              width="130"
              height="66"
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
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.07 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_9_3885"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_9_3885"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.00547059 0 0 0 0 0.0187459 0 0 0 0 0.116098 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_9_3885"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
}
