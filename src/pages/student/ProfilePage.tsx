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
import ProfileLectureHistory from "../../components/student/ProfileLectureHistory";
import MyLecturePreference from "../../components/student/MyLecturePreference";
import CareerRecommendation from "../../components/student/CareerRecommendation";
import SchduledLectures from "../../components/student/ScheduledLectures";
import MyInfo from "../../components/student/MyInfo";
import UpdateMyInfo from "../../components/student/UpdateMyInfo";

const ProfilePage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (tab: number) => {
    setSelectedTab(tab);
  };
  return (
    <Box flex="3" className="rounded-lg shadow border-2 p-2 m-6">
      <Tabs orientation="vertical">
        <Flex>
          <TabList className="w-52 border-r-2 font-semibold flex flex-col align-middle items-center p-5 ">
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
                selectedTab === 2 ? "bg-green-300 text-white rounded-3xl" : ""
              }`}
              onClick={() => handleTabClick(2)}
            >
              통계 및 진로추천
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
              <SchduledLectures />
            </TabPanel>
            <TabPanel>
              <ProfileLectureHistory />
            </TabPanel>
            <TabPanel>
              <div className="flex justify-center">
                <MyLecturePreference />
                <CareerRecommendation />
              </div>
            </TabPanel>
            <TabPanel>
              <UpdateMyInfo />
            </TabPanel>
          </TabPanels>
        </Flex>
      </Tabs>
    </Box>
  );
};

export default ProfilePage;
