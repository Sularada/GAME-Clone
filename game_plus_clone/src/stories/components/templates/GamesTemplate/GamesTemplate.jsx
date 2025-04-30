import FilterOffcanvas from "../../organisms/FilterOffcanvas/FilterOffcanvas";
import GamesContainer from "../../organisms/GamesContainer/GamesContainer";

const GamesTemplate = ({ games }) => {
  return (
    <div className="d-flex mt-4">
      <FilterOffcanvas />
      <GamesContainer games={games} />
    </div>
  );
};

export default GamesTemplate;
