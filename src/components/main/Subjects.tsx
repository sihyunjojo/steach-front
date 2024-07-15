import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCalculator,
  faFlask,
  faLandmark,
  faMusic,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

export default function Subjects() {
  const subjects = [
    {
      name: "국어",
      icon: faBook,
    },
    { name: "수학", icon: faCalculator },
    { name: "사회", icon: faLandmark },
    { name: "과학", icon: faFlask },
    { name: "미술", icon: faPalette },
    { name: "음악", icon: faMusic },
  ];
  return (
    <section className="flex justify-center">
      <div>
        <div className="flex text-center">
          {subjects.map((subject) => (
            <a href="#" className="mx-6 my-12">
              <FontAwesomeIcon icon={subject.icon} className="w-16 h-16" />
              <div>{subject.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
