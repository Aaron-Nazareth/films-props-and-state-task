const Film = ({film}) => {

    // Return the structure we want for each rendered film - note that the cast had to be mapped first as it was an array within the film object
    return(
        <>
        <h2>Title: {film.title}</h2>

        <h3>Duration: {film.duration}</h3>

        <h3>Rating: {film.rating}</h3>

        <ul key={film.cast}>{film.cast.map(actor => {
            return <li key={actor.name}>{actor.name}</li>
        })}
        </ul>

        <h3>Director: {film.director.name}</h3>
        </>
    )

}

export default Film;