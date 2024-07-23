const LectureReport: React.FC = () => {
  // CREATE TABLE `lectures_students`
  // (
  //     `id`          INTEGER(11) NOT NULL AUTO_INCREMENT,     -- 수업-학생 관계 테이블 ID
  //     `student_id`  INTEGER(11) NOT NULL,                    -- 학생 고유 ID
  //     `lecture_id`  INTEGER(11) NOT NULL,                    -- 수업 고유 ID
  //     `focus_ratio` DECIMAL(5, 2) NULL,                      -- 수업 참여도
  //     `focus_time`  SMALLINT(6) NOT NULL,                    -- 수업에 집중한 시간(분)
  //     `quiz_answer_count` SMALLINT(6) NOT NULL DEFAULT 0,    -- 수업에서 맞힌 총 정답 개수
  //     `quiz_total_score` SMALLINT(6) NOT NULL DEFAULT 0,     -- 수업에서 맞힌 총 퀴즈 점수
  return (
    <div className="bg-Beige">
      <div className="p-6">
        <header className="my-2 text-5xl text-indigo-900">강의 리포트</header>
        <div className="flex">
          <div className="border-r-2 border-gray-300 h-full mr-2"></div>
          <div className="text-2xl">
            김호경의 C++ 교실(lectures.title) / 1강(lectures.lecture_order)
          </div>
        </div>
        <main>
          <h1 className="my-4 text-4xl font-bold">전체 통계</h1>
          <div>qq</div>
          <h1 className="my-4 text-4xl font-bold">개별 통계</h1>
          <div className="grid grid-cols-12">
            <div className="col-span-6 p-4">
              <p>학생 이름(student_id) 조시현</p>
              <p>수업참여도(focus_ratio) 90%</p>
              <p>퀴즈 점수(quiz_total_score) 950</p>
              <p>퀴즈 점수(quiz_answer_count) 9/10</p>
            </div>
            <div className="col-span-6 p-4">
              <p>학생 이름(student_id) 조시현</p>
              <p>수업참여도(focus_ratio) 90%</p>
              <p>퀴즈 점수(quiz_total_score) 950</p>
              <p>퀴즈 점수(quiz_answer_count) 9/10</p>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-6 p-4">
              <p>학생 이름(student_id) 조시현</p>
              <p>수업참여도(focus_ratio) 90%</p>
              <p>퀴즈 점수(quiz_total_score) 950</p>
              <p>퀴즈 점수(quiz_answer_count) 9/10</p>
            </div>
            <div className="col-span-6 p-4">
              <p>학생 이름(student_id) 조시현</p>
              <p>수업참여도(focus_ratio) 90%</p>
              <p>퀴즈 점수(quiz_total_score) 950</p>
              <p>퀴즈 점수(quiz_answer_count) 9/10</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LectureReport;
