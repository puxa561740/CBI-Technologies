import { SERCH, IS_SEARCH, CHANGE_WORD } from "./constans";


export const search = (resultSearach) => ({type: SERCH, resultSearach})
export const isSearch = (isS) => ({type: IS_SEARCH, isS})
export const  changeEnterWorld = (word) => ({type: CHANGE_WORD, word})