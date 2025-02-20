interface DaysInterface {
  isMobile: boolean;
}
export default function Days({ isMobile }: DaysInterface): ReactElement {
  const [currentDay, setCurrentDay] = useState(0);
  const days = generateDays();

  const nextDay = () => {
    setCurrentDay((prev) => (prev < days.length - 1 ? prev + 1 : prev));
  };

  const prevDay = () => {
    setCurrentDay((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToDay = (dayIndex: number) => {
    setCurrentDay(dayIndex);
  };

  const currentPadding = days[currentDay].padding || 180;
  const canNext = currentDay < days.length - 1;
  const canPrev = currentDay > 0;
  return (
    <div className={isMobile ? `w-full mt-8 flex justify-center` : 'mt-8'
    }>
      <div className="card " style={{ paddingBottom: `${currentPadding}px` }}>
        <div className="card-option">
          <Header
            title={days[currentDay].title}
            date={days[currentDay].date}
            onNext={nextDay}
            onPrev={prevDay}
            canNext={canNext}
            canPrev={canPrev}
          />
          <AllDays day={days} current={currentDay} />
          <Line activeIndex={currentDay} total={days.length} goToDay={goToDay} />
        </div>
      </div>
    </div >
  );
}
import { useState, ReactElement } from "react";
import DaySchedule from "./days-components/DaySchedule";
import AllDays from "./days-components/AllDays";
import Line from "./days-components/features/Line";
import Header from "./days-components/features/Header";
// Define the schedule data
import schedules from "./data/schedules.json";

// Function to generate `days` dynamically

const generateDays = () => {
  return schedules.map((schedule) => ({
    component: <DaySchedule schedule={schedule.events} />,
    title: schedule.title,
    date: schedule.date,
    padding: schedule.padding,
  }));
};
