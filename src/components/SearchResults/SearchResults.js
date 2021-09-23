import { useSelector } from "react-redux";

const SearchResults = () => {

  const dataSearchRes = useSelector(state=>state.searchFilmReduser)

  return(<>
    <div className='searchBlock'>
      You searched for: <span>{dataSearchRes.enterSearchWord},</span> <span>{dataSearchRes.searchFilm.totalResults} results found</span>
    </div>
  </>)
}

export default SearchResults;