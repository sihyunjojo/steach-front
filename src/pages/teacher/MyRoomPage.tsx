import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
} from "@chakra-ui/react";

import MyLecture from "../../components/teacher/MyLecture";
import TeacherLectureHistory from "../../components/teacher/TeacherLectureHistory";
import TeacherUpdateMyInfo from "../../components/teacher/TeacherUpdateMyInfo";

const TeacherProfilePage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (tab: number) => {
    setSelectedTab(tab);
  };
  return (
    <Box flex="3" className="rounded-lg shadow border-2 p-2 m-6">
      <Tabs orientation="vertical">
        <Flex>
          <TabList className="w-52 border-r-2 font-semibold flex flex-col align-middle items-center p-5  min-h-screen">
            <Tab
              className={`my-2 text-2xl p-3 ${
                selectedTab === 0 ? "bg-green-300 text-white rounded-3xl" : ""
              }`}
              onClick={() => handleTabClick(0)}
            >
              내 강의
            </Tab>
            <Tab
              className={`my-2 text-2xl p-3 ${
                selectedTab === 1 ? "bg-green-300 text-white rounded-3xl" : ""
              }`}
              onClick={() => handleTabClick(1)}
            >
              강의 히스토리
            </Tab>
            <Tab
              className={`my-2 text-2xl p-3 ${
                selectedTab === 3 ? "bg-green-300 text-white rounded-3xl" : ""
              }`}
              onClick={() => handleTabClick(3)}
            >
              내정보
            </Tab>
          </TabList>

          <TabPanels className="p-3">
            <TabPanel>
              <MyLecture />
            </TabPanel>
            <TabPanel>
              <TeacherLectureHistory />
            </TabPanel>
            <TabPanel>
              <TeacherUpdateMyInfo />
            </TabPanel>
          </TabPanels>
        </Flex>
      </Tabs>
    </Box>
  );
};

export default TeacherProfilePage;
