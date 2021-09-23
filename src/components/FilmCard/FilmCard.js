
const FilmCard = ({data}) => {

  return (<>
    <div>
      <div><img src={data.Poster} alt='film poster'/></div>
      <p>{data.Title}</p>
      <p>{data.Year}</p>
      <p>{data.imdbID}</p>
      <p>{data.Type}</p>
    </div>
    <div></div>
  </>)
}

export default FilmCard