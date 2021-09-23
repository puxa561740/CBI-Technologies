import { useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { requestFilm } from '../../ReduxStore/filmReduser/filmReduser'
import FilmCard from '../FilmCard/FilmCard'


const SerchFilmResult = ({requestFilm}) => {

  const stateFilmSearchRes = useSelector(state=>state.searchFilmReduser.searchFilm.Search)

  useEffect(()=>{
    requestFilm()
  },[])

  return (<>
    <div>
      {stateFilmSearchRes ? 
      stateFilmSearchRes.map((a, i)=>{
        return <FilmCard key={i} data={a}/>
      }) : null
    }
    </div>
  </>)
}


export default connect(null, {requestFilm})(SerchFilmResult)