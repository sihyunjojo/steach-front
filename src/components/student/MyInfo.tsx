import React from "react";
import MyLecturePreference from "./MyLecturePreference";
import CareerRecommendation from "./CareerRecommendation";

const MyInfo: React.FC = () => {
  return (
    <div>
      <MyLecturePreference />
      <CareerRecommendation />
    </div>
  );
};

export default MyInfo;
