import React, { useState } from "react";
import { Modal, TimePicker } from "antd";
import { Button } from "@chakra-ui/react";
import dayjs from "dayjs";

const TeacherMyLectureListModal: React.FC = () => {
  const format = "HH:mm";

  // 기존 강의의 정보를 가져오기

  // 모달 여닫는 상태
  const [isModalOpen, setIsModalOpen] = useState(false);

  // timepicker 상태
  const [timePicker, setTimePicker] = useState("");

  // 강의 제목 상태
  const [lectureTitle, setLectureTitle] = useState("");

  // 강의 제목 입력 핸들러
  const handleInputLectureTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLectureTitle(e.target.value);
  };

  // 모달 보여지는 여부
  const showModal = () => {
    setIsModalOpen(true);
  };

  // 수정하기
  const handleOk = () => {
    setIsModalOpen(false);
  };

  // 취소하기
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>강의 관리</Button>
      <Modal
        title={<h2 style={{ fontSize: "24px" }}>강의 정보 관리</h2>}
        okText={"수정하기"}
        cancelText={"취소"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <div>
            <h2 className="mt-4 text-xl">강의 제목</h2>
            <input
              type="text"
              className="my-2 p-2 border-2 rounded-md w-2/3"
              value={lectureTitle}
              onChange={handleInputLectureTitle}
            />
          </div>
          <div>
            <h2 className="mt-4 text-xl">강의 시간</h2>
            <TimePicker defaultValue={dayjs("12:08", format)} format={format} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TeacherMyLectureListModal;
