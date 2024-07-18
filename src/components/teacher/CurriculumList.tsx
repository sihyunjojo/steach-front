import React from "react";

const CurriculumList: React.FC = () => {
  const tableBorder: string = "border-2 border-gray-400 px-4 py-2";

  return (
    <>
      <h1>커리큘럼</h1>
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className={tableBorder}>Song</th>
            <th className={tableBorder}>Artist</th>
            <th className={tableBorder}>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={tableBorder}>
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className={tableBorder}>Malcolm Lockyer</td>
            <td className={tableBorder}>1961</td>
          </tr>
          <tr>
            <td className={tableBorder}>Witchy Woman</td>
            <td className={tableBorder}>The Eagles</td>
            <td className={tableBorder}>1972</td>
          </tr>
          <tr>
            <td className={tableBorder}>Shining Star</td>
            <td className={tableBorder}>Earth, Wind, and Fire</td>
            <td className={tableBorder}>1975</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CurriculumList;
