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
import { VscGraph } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { FaPencilAlt, FaHistory } from "react-icons/fa";
import ProfileLectureHistory from "../../components/student/ProfileLectureHistory";
import MyLecturePreference from "../../components/student/MyLecturePreference";
import CareerRecommendation from "../../components/student/CareerRecommendation";
import SchduledLectures from "../../components/student/MyLecture";
import UpdateMyInfo from "../../components/student/UpdateMyInfo";

const ProfilePage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (tab: number) => {
    setSelectedTab(tab);
  };
  return (
    <Box flex="3" className="p-2 shadow">
      <Tabs orientation="vertical">
        <Flex>
          <TabList className="w-52 border-r-2 font-semibold flex flex-col align-middle items-center p-5  min-h-screen">
            <Tab
              className={`my-2 text-lg p-3 sticky top-[4rem] ${
                selectedTab === 0
                  ? "bg-orange-300 text-white rounded-3xl"
                  : "hover:text-orange-300"
              } flex-col`}
              onClick={() => handleTabClick(0)}
            >
              <FaPencilAlt className="size-8 my-2" />
              <h2>내 강의</h2>
            </Tab>
            <Tab
              className={`my-2 text-lg p-3 sticky top-[11rem] ${
                selectedTab === 1
                  ? "bg-orange-300 text-white rounded-3xl"
                  : "hover:text-orange-300"
              } flex-col`}
              onClick={() => handleTabClick(1)}
            >
              <FaHistory className="size-8 my-2" />
              <h2>강의 히스토리</h2>
            </Tab>
            <Tab
              className={`my-2 text-lg p-3 sticky top-[18rem] ${
                selectedTab === 2
                  ? "bg-orange-300 text-white rounded-3xl"
                  : "hover:text-orange-300"
              } flex-col`}
              onClick={() => handleTabClick(2)}
            >
              <VscGraph className="size-8 my-2" />
              <h2>내 진로 분석</h2>
            </Tab>
            <Tab
              className={`my-2 text-lg p-3 sticky top-[25rem] ${
                selectedTab === 3
                  ? "bg-orange-300 text-white rounded-3xl"
                  : "hover:text-orange-300"
              } flex-col`}
              onClick={() => handleTabClick(3)}
            >
              <CgProfile className="size-8 my-2" />
              <h2>내 정보</h2>
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
