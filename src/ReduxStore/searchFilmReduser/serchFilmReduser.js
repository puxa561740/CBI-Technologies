import { apiFilm } from "../../api/api"
import { SERCH, IS_SEARCH, CHANGE_WORD } from "./constans"
import { search, isSearch, changeEnterWorld } from "./action"

const defaultState = {
  searchFilm: [],
  pageSize: 8,
  curentPage: 1,
  isSearch: false,
  enterSearchWord:''
}

const searchFilmReduser = (state = defaultState, action) => {
  switch (action.type){
    case SERCH:
      return {
        ...state,
        searchFilm: action.resultSearach
      }
    case IS_SEARCH:
      return {
        ...state,
        isSearch: action.isS
    }
    case CHANGE_WORD:
      return {
        ...state,
        enterSearchWord: action.word
      }
    default: 
      return state
  }
}

export const startSearch = (serchWord, page = 1) => {
  return async (dispatch) => {
    dispatch(isSearch(true))
    let filmsSerchRes = await apiFilm.searchFilm(serchWord, page)
    dispatch(search(filmsSerchRes.data))
    dispatch(changeEnterWorld(serchWord))
    dispatch(isSearch(false))
  }
}

export default searchFilmReduser