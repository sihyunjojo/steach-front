import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  StackDivider,
  Stack,
  Box,
  Text,
} from "@chakra-ui/react";
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
