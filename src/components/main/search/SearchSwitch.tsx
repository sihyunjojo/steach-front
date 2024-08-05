import React from "react";
import { Switch } from "antd";

interface SearchSwitchProps {
  handleSearch: (e: React.FormEvent | null) => void;
  handleOptionChange: (e: { target: { name: string; value: boolean } }) => void;
}

const SearchSwitch: React.FC<SearchSwitchProps> = ({
  handleOptionChange,
  handleSearch,
}) => {
  const onChange = (checked: boolean) => {
    handleOptionChange({
      target: {
        name: "only_avaliable",
        value: checked,
      },
    });
    // 만약 체크가 변할때마다 그 값에 맞는 강의 검색하기
    handleSearch(null);
  };
  return (
    <div className="flex items-center">
      <label htmlFor="Switch" className="mx-2">
        수강 가능 여부
      </label>
      <Switch onChange={onChange} />
    </div>
  );
};

export default SearchSwitch;
