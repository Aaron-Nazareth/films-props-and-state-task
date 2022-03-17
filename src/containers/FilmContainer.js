import {useState} from "react"
import Film from "../components/Film"

const FilmContainer = () => {

    // useState sets initial state of films array and allows us to track it
    const [films, setFilms] = useState(
        [
        {
            "title": "Alien",
            "duration": 117,
            "rating": "18",
            "cast": [
                {
                    "name": "Sigourney Weaver"
                }
            ],
            "director": {
                "name": "Ridley Scott"
            }
        },
        {
            "title": "The Imitation Game",
            "duration": 114,
            "rating": "12A",
            "cast": [
                {
                    "name": "Benedict Cumberbatch"
                }
            ],
            "director": {
                "name": "Morten Tyldum"
            }
        },
        {
            "title": "Iron Man",
            "duration": 126,
            "rating": "12A",
            "cast": [
                {
                    "name": "Robert Downey Jr"
                },
                {
                    "name": "Gwyneth Paltrow"
                }
            ],
            "director": {
                "name": "Jon Favreau"
            }
        },
        {
            "title": "The Martian",
            "duration": 144,
            "rating": "12A",
            "cast": [
                {
                    "name": "Matt Damon"
                },
                {
                    "name": "Sean Bean"
                }
            ],
            "director": {
                "name": "Ridley Scott"
            }
        }
    ]
      );

    // Sets state of current film index - this will allow us to change which movie is being rendered and displayed.
    const [currentFilmIndex, setCurrentFilmIndex] = useState(0);

    // Creates a function to handle a user selecting the next button - uses the set state action to increment the current film index by 1.
    const handleNextButtonClick = () => {
        if (currentFilmIndex < films.length - 1){   // Prevents next button exceeding final film
            setCurrentFilmIndex(currentFilmIndex + 1)  
        }
    }

    // Creates a function to handle a user selecting the previous button - uses the set state action to decrement the current film index by 1.
    const handlePreviousButtonClick = () => {
        if (currentFilmIndex > 0){  // Prevents previous button exceeding first film
            setCurrentFilmIndex(currentFilmIndex - 1) 
        }
    }

    return (
        <>
        <Film film={films[currentFilmIndex]} />
        <button onClick={handlePreviousButtonClick}>Previous Film</button>
        <button onClick={handleNextButtonClick}>Next Film</button>
        </>
    )

}

export default FilmContainer;
