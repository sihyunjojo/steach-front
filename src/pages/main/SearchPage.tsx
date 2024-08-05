import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchSendCurricula } from "../../interface/search/SearchInterface";
import { searchCurricula } from "../../store/SearchSlice";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import SearchCategoryMenu from "../../components/main/search/SearchCategoryMenu";
import SearchOrderMenu from "../../components/main/search/SearchOrderMenu";
import SearchSwitch from "../../components/main/search/SearchSwitch";
import SearchCard from "../../components/main/search/SearchCard";

const SearchPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const curriculas = useSelector((state: RootState) => state.search.curricula);

  // 검색 조건값 상태
  const [searchOption, setSearchOption] = useState<SearchSendCurricula>({
    curriculum_category: "",
    order: "",
    only_available: false,
    search: "",
    pageSize: null,
    currentPageNumber: null,
  });

  // 검색 조건 값 양방향 바인딩
  const handleOptionChange = (e: {
    target: { name: string; value: string | boolean };
  }) => {
    const { name, value } = e.target;
    setSearchOption((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // 검색 핸들러 함수
  const handleSearch = (e: React.FormEvent | null) => {
    if (e) {
      e.preventDefault();
      console.log("Search triggered", searchOption);
      dispatch(searchCurricula(searchOption));
    }
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1"></div>
      <main className="col-span-10">
        <form className="my-4" onSubmit={(e) => handleSearch(e)}>
          <div className="flex justify-center">
            <SearchCategoryMenu handleOptionChange={handleOptionChange} />
          </div>
          <div className="flex justify-evenly items-center">
            <SearchOrderMenu handleOptionChange={handleOptionChange} />
            <input
              type="text"
              name="search"
              className="ml-3 p-3 w-2/3 border-2 rounded-md"
              value={searchOption.search}
              onChange={(e) => handleOptionChange(e)}
            />
            <button
              type="submit"
              className="mr-2 p-3 rounded-md bg-red-200 text-white hover:bg-red-300"
            >
              검색하기
            </button>
            <SearchSwitch
              handleOptionChange={handleOptionChange}
              handleSearch={handleSearch}
            />
          </div>
        </form>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {curriculas.map((curriculum) => (
            <SearchCard
              key={curriculum.curriculum_id}
              curriculum={curriculum}
            />
          ))}
        </div>
      </main>
      <div className="col-span-1"></div>
    </div>
  );
};

export default SearchPage;
