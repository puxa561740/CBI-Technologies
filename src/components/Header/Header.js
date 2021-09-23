import { useState } from "react";
import { connect } from "react-redux";
import { startSearch, enterSearchWord } from '../../ReduxStore/searchFilmReduser/serchFilmReduser';


const Header = ({startSearch, enterSearchWord}) => {

  const [searhInputWord, setSearhInputWord] = useState('')
  
  const changeInput = (e) => {
    setSearhInputWord(e.target.value)
  } 

  const searchStart = (e) => {
    if(e.keyCode === 13) {
      enterSearchWord(searhInputWord)
      startSearch(searhInputWord)
    }
  }

  return (<>
    <header>
      <h1>Movie Catalog</h1>
      <div>
        <input type='text' value={searhInputWord} onChange={changeInput} onKeyDown={searchStart}/>
      </div>
      <div>
        <p>Alexander Borisenko</p>
      </div>
    </header>
  </>)
}

export default connect(null,{startSearch, enterSearchWord})(Header);