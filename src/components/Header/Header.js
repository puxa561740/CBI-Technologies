import { useState } from "react";
import { connect } from "react-redux";
import { startSearch } from '../../ReduxStore/searchFilmReduser/serchFilmReduser';


const Header = ({startSearch}) => {

  const [searhInputWord, setSearhInputWord] = useState('')

  const changeInput = (e) => {
    setSearhInputWord(e.target.value)
  } 


  const searchStart = (e) => {
    if(e.keyCode === 13) {
      startSearch(searhInputWord)
    }
  }

  return (<>
    <section>
      <h1>Movie Catalog</h1>
      <div>
        <input type='text' value={searhInputWord} onChange={changeInput} onKeyDown={searchStart}/>
      </div>
      <div>
        <p>Alexander Borisenko</p>
      </div>
    </section>
  </>)
}

export default connect(null,{startSearch})(Header);