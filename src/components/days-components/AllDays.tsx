interface Day {
  component: React.ReactElement;
  title: string;
  date: string;
  padding: number;
}

interface DayOption {
  day: Array<Day>;
  current: number;
}

export default function AllDays({
  day,
  current,
}: DayOption): React.ReactElement {
  return <div className="order">{day[current].component}</div>;
}
