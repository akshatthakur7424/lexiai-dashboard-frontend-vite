import React, { useState } from "react";
import { Calendar } from "./ui/calendar";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date)
  // const [date, setDate] = (React.useState < Date) | (undefined > new Date());

  return (
    <>
      <div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="bg-white w-full"
        />
      </div>
    </>
  );
};

export default CalendarComponent;
