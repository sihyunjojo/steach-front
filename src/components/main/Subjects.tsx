import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faBook,
  faCalculator,
  faFlask,
  faLandmark,
  faMusic,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

// 김헌규 - 자바스크립트 코드를 타입스크립트 코드로 변경(컴포넌트 함수 및 interface와 Subject 타입으로 작성)
// 김헌규 - 화면 크기에 따른 아이콘 크기 설정(점점 작아지도록)
const Subjects: React.FC = () => {
  // 김헌규
  interface Subject {
    name: string;
    icon: IconDefinition;
  }

  // 배열의 타입을 Subject 배열로 정의
  // 김헌규
  const subjects: Subject[] = [
    {
      name: "#국어",
      icon: faBook,
    },
    { name: "#수학", icon: faCalculator },
    { name: "#사회", icon: faLandmark },
    { name: "#과학", icon: faFlask },
    { name: "#예체능", icon: faPalette },
    { name: "#외국어", icon: faMusic },
    { name: "#공학", icon: faMusic },
  ];

  return (
    <section className="flex justify-center">
      <div>
        <div className="flex text-center">
          {subjects.map((subject, index) => (
            <a href="#" className="mx-6 my-12" key={index}>
              <FontAwesomeIcon
                icon={subject.icon}
                className="sm:size-8 md:size-12 lg:size-16 text-indigo-950"
              />
              <div className="text-lightNavy">{subject.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subjects;
