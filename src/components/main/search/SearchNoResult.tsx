import noSearch from "../../../assets/noSearch.png";

const SearchNoResult: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-5">
      <img src={noSearch} alt="no-image" className="w-full min-h-screen" />
    </div>
  );
};

export default SearchNoResult;
