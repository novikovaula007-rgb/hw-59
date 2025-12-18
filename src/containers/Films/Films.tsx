import FilmsForm from "./FilmsForm/FilmsForm.tsx";
import type {FilmInterface} from "../../types";
import {useState} from "react";
import FilmsList from "./FilmsList/FilmsList.tsx";

const Films = () => {
    const [films, setFilms] = useState<FilmInterface[] | []>([])

    const addFilm = (film: FilmInterface) => {
        setFilms(prevState => [...prevState, film])
    }

    const deleteFilm = (filmDel: FilmInterface) => {
        setFilms(films.filter((film) => film.id !== filmDel.id))
    }

    return (
        <div className="container-lg mt-3">
            <FilmsForm addFilm={addFilm}/>
            <FilmsList films={films} delFilm={deleteFilm}/>
        </div>
    );
};

export default Films;