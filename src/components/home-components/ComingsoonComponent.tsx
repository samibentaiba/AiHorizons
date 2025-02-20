function EventDetails() {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-white text-lg font-bold leading-7">
        19-22 February 2025
      </div>
      <div className="text-white/60 text-base font-normal leading-normal">
        Coming soon!
      </div>
    </div>
  );
}

export default function ComingsoonComponent() {
  return (

    <div className="w-full max-w-[622px]">
      <div
        className="w-full max-w-[622px] min-w-[350px] h-[396px] flex flex-col justify-between items-start p-6 sm:p-8 rounded-2xl"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.05)",
          background:
            "radial-gradient(200.24% 242.87% at 217.75% 107.58%, rgba(0, 173, 235, 0.30) 0%, rgba(2, 35, 78, 0.00) 100%), #02234E",
        }}
      >
        <div className="space-y-4 mb-8">
          <Logo />
          <div className="text-white text-2xl sm:text-4xl font-semibold leading-tight">
            Learn, build, and compete with 2 days of expert AI workshops and an
            online datathon!
          </div>
        </div>

        <EventDetails />
      </div>
    </div>
  );
}
function Logo() {
  return (
    <div className="Symbol2 relative">
      <svg
        width="58"
        height="44"
        viewBox="0 0 58 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Logo</title>
        <g clip-path="url(#clip0_161_3331)">
          <path
            d="M32.6258 43.3029C30.4851 44.1348 28.1007 44.0849 25.9969 43.1641C23.8931 42.2433 22.2423 40.527 21.4076 38.3927L19.0176 32.2769L27.0287 11.7844C27.528 10.5051 27.7145 9.12561 27.5727 7.76015C27.431 6.3947 26.9651 5.08255 26.2136 3.93234C25.4621 2.78212 24.4466 1.82693 23.2512 1.14585C22.0559 0.464763 20.715 0.0773718 19.3396 0.0157471C21.0384 0.0670072 22.6846 0.615348 24.0733 1.5925C25.4619 2.56966 26.5316 3.93247 27.1492 5.51128L37.5547 32.1174C38.3882 34.2524 38.3373 36.6301 37.413 38.7277C36.4887 40.8252 34.7667 42.4709 32.6258 43.3029Z"
            fill="url(#paint0_radial_161_3331)"
          />
          <path
            d="M57.9998 25.9841V34.3825C57.9998 36.673 57.0872 38.8697 55.4628 40.4894C53.8384 42.109 51.6353 43.0189 49.338 43.0189C47.0408 43.0189 44.8376 42.109 43.2132 40.4894C41.5888 38.8697 40.6763 36.673 40.6763 34.3825V25.9841C40.6763 23.6936 41.5888 21.4969 43.2132 19.8772C44.8376 18.2576 47.0408 17.3477 49.338 17.3477C51.6353 17.3477 53.8384 18.2576 55.4628 19.8772C57.0872 21.4969 57.9998 23.6936 57.9998 25.9841Z"
            fill="url(#paint1_radial_161_3331)"
          />
          <path
            d="M57.9998 8.64564C57.9977 10.6433 57.301 12.5785 56.0285 14.1216C54.756 15.6647 52.9864 16.7202 51.021 17.1083C49.0556 17.4965 47.0161 17.1933 45.2497 16.2504C43.4834 15.3075 42.0995 13.7832 41.3338 11.9371C40.5681 10.0911 40.4679 8.03741 41.0503 6.12597C41.6327 4.21452 42.8617 2.5635 44.5279 1.45412C46.1941 0.344737 48.1946 -0.154396 50.1884 0.0417387C52.1823 0.237873 54.0464 1.11714 55.463 2.52979C56.2698 3.33183 56.9092 4.28518 57.3446 5.33485C57.78 6.38452 58.0027 7.50974 57.9998 8.64564Z"
            fill="url(#paint2_linear_161_3331)"
          />
          <path
            d="M27.6225 8.64998C27.6216 9.72227 27.4211 10.7851 27.031 11.7844L19.0199 32.2768L16.7153 38.1743C15.8704 40.294 14.2189 41.9946 12.1211 42.9048C10.0234 43.815 7.64976 43.861 5.51814 43.0328C3.38651 42.2045 1.66995 40.5693 0.743019 38.4838C-0.183916 36.3984 -0.245981 34.032 0.570368 31.9011L10.8861 5.51124C11.5149 3.90293 12.6124 2.51926 14.0371 1.5386C15.4618 0.557937 17.1485 0.0252329 18.8797 0.00915527H19.1579H19.3419C21.5711 0.109755 23.6757 1.06325 25.2179 2.67136C26.7602 4.27947 27.6214 6.41843 27.6225 8.64343V8.64998Z"
            fill="url(#paint3_radial_161_3331)"
          />
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_161_3331"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(32.9588 41.4725) scale(28.6338 28.5501)"
          >
            <stop stop-color="#F2F2F9" />
            <stop offset="0.33" stop-color="#E1E1E6" />
            <stop offset="0.59" stop-color="#D9D9DD" />
            <stop offset="0.73" stop-color="#CBCBCD" />
            <stop offset="1" stop-color="#A5A5A5" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_161_3331"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(54.8957 18.1449) scale(26.4607 26.3833)"
          >
            <stop stop-color="#F2F2F9" />
            <stop offset="0.42" stop-color="#E1E1E6" />
            <stop offset="0.74" stop-color="#D9D9DD" />
            <stop offset="0.81" stop-color="#D4D4D8" />
            <stop offset="0.89" stop-color="#C6C6C8" />
            <stop offset="0.97" stop-color="#AEAEAF" />
            <stop offset="1" stop-color="#A5A5A5" />
          </radialGradient>
          <linearGradient
            id="paint2_linear_161_3331"
            x1="-43.3139"
            y1="-17.8043"
            x2="102.616"
            y2="58.0766"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00FF87" />
            <stop offset="1" stop-color="#60EFFF" />
          </linearGradient>
          <radialGradient
            id="paint3_radial_161_3331"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(24.1284 0.446003) scale(51.3835 51.2334)"
          >
            <stop stop-color="#F2F2F9" />
            <stop offset="0.33" stop-color="#E1E1E6" />
            <stop offset="0.59" stop-color="#D9D9DD" />
            <stop offset="0.73" stop-color="#CBCBCD" />
            <stop offset="1" stop-color="#A5A5A5" />
          </radialGradient>
          <clipPath id="clip0_161_3331">
            <rect width="58" height="43.8926" fill="white" />
          </clipPath>
        </defs>
      </svg>{" "}
    </div>
  );
}
