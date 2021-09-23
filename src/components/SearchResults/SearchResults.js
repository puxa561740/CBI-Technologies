import { useSelector } from "react-redux";

const SearchResults = () => {

  const dataSearchRes = useSelector(state=>state.searchFilmReduser)

  return(<>
    <div>You searched for: <span>{dataSearchRes.enterSearchWord}</span>, {dataSearchRes.searchFilm.totalResults} results found</div>
  </>)
}

export default SearchResults;