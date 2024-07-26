const TeacherMyInfo: React.FC = () => {
  return (
    <div className="w-9/12 bg-moreBeige rounded-xl shadow-md p-6 my-12 mx-auto">
      <form>
        <h1 className="my-2 p-2 text-center text-4xl text-lightNavy">내정보</h1>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">이름</label>
          <p>선생님 이름</p>
        </div>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">이메일</label>
          <p>선생님 이메일</p>
        </div>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">
            간단한 소개 문구
          </label>
          <p>소개 문구</p>
        </div>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">학력</label>
          <p>학력</p>
        </div>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">전공분야</label>
          <p>전공분야</p>
        </div>
        <div className="my-4 p-2">
          <label className="my-2 text-2xl text-lightNavy">봉사 시간</label>
          <p>10시간</p>
        </div>
      </form>
    </div>
  );
};

export default TeacherMyInfo;
