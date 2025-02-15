import { EventBadge } from "./event-card-components/event-badge";
import { EventContent } from "./event-card-components/event-content";
import { OnlineIndicator } from "./event-card-components/online-indicator";
import { TimelineDecoration } from "./event-card-components/timeline-decoration";

export default function EventCard() {
  return (
    <div
      style={{
        background:
          "radial-gradient(180.49% 237.36% at -115.27% 0%, rgba(0, 173, 235, 0.30) 0%, rgba(2, 35, 78, 0.00) 100%), #02234E",
      }}
      className="flex flex-col justify-between items-center shrink-0  
            max-w-[623px] min-w-[350px] h-[412px] p-[28px_32px_24px_32px] rounded-[24px]  
            border border-white/5  
            bg-[#02234E]  
      relative
      overflow-hidden"
    >
      <div className="absolute top-[-3px] left-10">
        <TimelineDecoration />
      </div>
      <div className="absolute top-[20px] right-5">
        <EventBadge />
      </div>
      <div className="absolute bottom-[130px] left-10">
        <EventContent />
      </div>
      <div className="absolute top-[330px] left-10 ">
        <OnlineIndicator />
      </div>
    </div>
  );
}
