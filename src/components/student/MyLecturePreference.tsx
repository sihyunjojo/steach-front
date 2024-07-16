import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  Box,
  StackDivider,
} from "@chakra-ui/react";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: ["국어", "수학", "사회", "과학", "예체능", "공학", "외국어", "기타"],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 90, 81, 56, 55, 40, 38],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointRadius: 2,
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "My Second Dataset",
      data: [28, 48, 40, 19, 96, 27, 100, 52],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointRadius: 2,
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
};

const options = {
  elements: {
    line: {
      borderWidth: 1,
    },
  },
};

const MyLecturePreference: React.FC = () => {
  return (
    <>
      <Card className="w-72 h-96 border-2 rounded-lg shadow my-6 p-5 flex justify-center">
        <CardHeader>
          <h2 className="text-4xl text-center">나의 수업 선호도</h2>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Radar data={data} options={options} />
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default MyLecturePreference;
