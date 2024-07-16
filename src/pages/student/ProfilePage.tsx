import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import ProfileLectureHistory from "../../components/student/ProfileLectureHistory";
import MyLecturePreference from "../../components/student/MyLecturePreference";
import CareerRecommendation from "../../components/student/CareerRecommendation";
import SchduledLectures from "../../components/student/ScheduledLectures";

const ProfilePage: React.FC = () => {
  return (
    <Box className="p-6">
      <Flex justifyContent="space-between">
        <Box flex="1" mx="3">
          <Heading
            as="h1"
            mb="8"
            className="text-5xl font-bold text-center w-72"
          >
            내 강의실
          </Heading>
          <MyLecturePreference />
          <CareerRecommendation />
        </Box>
        <Box flex="3" className="rounded-lg shadow border-2 p-2">
          <Tabs position="relative" variant="unstyled">
            <TabList className="border-b-2 font-semibold">
              <Tab className="mx-2 text-3xl">예정된 강의</Tab>
              <Tab className="mx-2 text-3xl">강의 히스토리</Tab>
              <Tab className="mx-2 text-3xl">내정보</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              borderRadius="1px"
              className="bg-orange-300"
            />
            <TabPanels className="p-3">
              <TabPanel>
                <SchduledLectures />
              </TabPanel>
              <TabPanel>
                <ProfileLectureHistory />
              </TabPanel>
              <TabPanel>
                <p>내정보</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProfilePage;
