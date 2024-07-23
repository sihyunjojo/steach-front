import React from "react";
import TodayLecture from "./TodayLecture";
import ScheduledLecture from "./ScheduledLecture";

const MyLecture: React.FC = () => {
  return (
    <>
      <TodayLecture />
      <ScheduledLecture />
    </>
  );
};

export default MyLecture;
