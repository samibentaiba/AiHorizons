export function OnlineIndicator() {
  return (
    <div className="h-12 p-5 bg-[#02234e]/20 rounded-full border border-white/5 justify-center items-center gap-1.5 inline-flex">
      <div className="w-2.5 h-2.5 origin-top-left bg-[#00adeb] rounded-full" />
      <div className="text-white/60 text-base font-medium font-['Plus Jakarta Sans'] leading-[34px]">
        Online
      </div>
    </div>
  );
}
