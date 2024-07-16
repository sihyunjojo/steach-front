import React from "react";

const ProfileLectureHistory: React.FC = () => {
  return (
    <>
      <table className="table-auto w-full text-center">
        <thead className="border-2">
          <tr>
            <th className="border-2">강의 제목</th>
            <th className="border-2">강의 진행 기간</th>
            <th className="border-2">강의 선생님</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="border-2">1961</td>
            <td className="border-2">Malcolm Lockyer</td>
          </tr>
          <tr>
            <td className="border-2">Witchy Woman</td>
            <td className="border-2">1972</td>
            <td className="border-2">The Eagles</td>
          </tr>
          <tr>
            <td className="border-2">Shining Star</td>
            <td className="border-2">1975</td>
            <td className="border-2">Earth, Wind, and Fire</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ProfileLectureHistory;
