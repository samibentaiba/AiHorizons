export function EventContent() {
  return (
    <div className="self-stretch px-16 md:px-16 gap-[18px] flex flex-col justify-start items-start">
      <div className="text-white text-lg md:text-sm font-bold font-['Plus Jakarta Sans'] leading-5">
        Event Breakdown
      </div>

      <div className="self-stretch flex flex-col justify-start items-start ">
        <div className="self-stretch">
          <span className="text-white font-bold font-['Plus Jakarta Sans']">
            19–20 Feb:
            <span className="-white  text-sm font-normal font-['Plus Jakarta Sans']">
              {" "}
              Presential AI Courses & Workshops
            </span>
          </span>
        </div>
        <ul className="list-disc list-inside text-white/60 text-sm font-normal font-['Plus Jakarta Sans'] leading-tight">
          <li>
            <span className="font-bold">Location:</span> Saad Dahleb University,
            Blida
          </li>
          <li className="whitespace-nowrap">
            3 sessions/day – beginner-friendly, open to everyone
          </li>
        </ul>
      </div>

      <div className="self-stretch flex flex-col justify-start items-start">
        <div className="self-stretch">
          <span className="text-white font-bold font-['Plus Jakarta Sans']">
            21–22 Feb:
          </span>
          <span className="-white text-sm font-normal font-['Plus Jakarta Sans']">
            {" "}
            Online Datathon
          </span>
        </div>
        <ul className="list-disc list-inside text-white/60 text-xs font-normal font-['Plus Jakarta Sans'] leading-tight">
          <li>For AI enthusiasts & workshop participants</li>
        </ul>
      </div>
    </div>
  );
}
