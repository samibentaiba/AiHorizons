interface ScheduleEvent {
  time: string;
  title: string;
}

interface DayScheduleProps {
  schedule: ScheduleEvent[];
}

export default function DaySchedule({ schedule }: DayScheduleProps) {
  return (
    <>
      {schedule.map(
        (event: ScheduleEvent): React.ReactElement => (
          <div key={event.time} className="element">
            <div className="element-option">
              <div className="time">{event.time}</div>
              <div className="content">
                <div className="title">{event.title}</div>
              </div>
            </div>
          </div>
        ),
      )}
    </>
  );
}
