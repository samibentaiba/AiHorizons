interface LineProps {
  activeIndex: number;
  total: number;
  goToDay: (dayIndex: number) => void;
}

export default function Line({ activeIndex, total, goToDay }: LineProps) {
  return (
    <div className="line">
      {[...Array(total)].map((_, index: number) => (
        <div
          key={`day-${index}`} // Use a more stable key
          className={index === activeIndex ? "active" : "disable"}
          onClick={() => goToDay(index)}
          tabIndex={0} // Make it focusable for keyboard users
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") goToDay(index);
          }} // Allow keyboard activation
          role="button" // Inform screen readers that it's clickable
        />
      ))}
    </div>
  );
}
