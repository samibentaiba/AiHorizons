export default function Header({
  title,
  date,
  onNext,
  onPrev,
  canNext,
  canPrev,
}: HeaderProps) {
  return (
    <div className="header">
      <ArrowButton direction="left" onClick={onPrev} isEnabled={canPrev} />

      <div className="content">
        <div className="title">{title}</div>
        <div className="day">{date}</div>
      </div>

      <ArrowButton direction="right" onClick={onNext} isEnabled={canNext} />
    </div>
  );
}
interface HeaderProps {
  title: string;
  date: string;
  onNext: () => void;
  onPrev: () => void;
  canNext: boolean;
  canPrev: boolean;
}

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick?: () => void;
  isEnabled: boolean;
}

const ArrowButton = ({ direction, onClick, isEnabled }: ArrowButtonProps) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className={`arrow ${!isEnabled ? "disabled" : ""}`}
      onClick={isEnabled ? onClick : undefined}
      onKeyDown={(e) => {
        if (isEnabled && (e.key === "Enter" || e.key === " ")) {
          onClick?.();
        }
      }}
    >
      <svg viewBox="0 0 48 49" fill="none">
        <title>{direction === "left" ? "Previous" : "Next"}</title>
        <path
          d={
            direction === "left"
              ? "M12 24.4893C12 24.1033 12.1485 23.7402 12.4324 23.4578L20.0888 15.8765C20.5958 15.3745 21.4169 15.3745 21.9239 15.8765L22.3825 16.3308C22.8894 16.8328 22.8894 17.646 22.3825 18.148L17.59 22.8943H34.7024C35.4196 22.8943 36 23.4691 36 24.1793V24.8219C36 25.5322 35.4196 26.1069 34.7024 26.1069H17.59L22.3825 30.852C22.8894 31.3539 22.8894 32.1672 22.3825 32.6692L21.9239 33.1236C21.4169 33.6255 20.5958 33.6255 20.0888 33.1236L12.4324 25.5422C12.1434 25.2562 11.9997 24.8755 12 24.4893Z"
              : "M36 24.4893C36 24.1033 35.8515 23.7402 35.5676 23.4578L27.9112 15.8765C27.4042 15.3745 26.5831 15.3745 26.0761 15.8765L25.6175 16.3308C25.1106 16.8328 25.1106 17.646 25.6175 18.148L30.41 22.8943H13.2976C12.5804 22.8943 12 23.4691 12 24.1793V24.8219C12 25.5322 12.5804 26.1069 13.2976 26.1069H30.41L25.6175 30.852C25.1106 31.3539 25.1106 32.1672 25.6175 32.6692L26.0761 33.1236C26.5831 33.6255 27.4042 33.6255 27.9112 33.1236L35.5676 25.5422C35.8566 25.2562 36.0003 24.8755 36 24.4893Z"
          }
          fill="white"
          fillOpacity={isEnabled ? 1 : 0.3}
        />
      </svg>
    </div>
  );
};
