import FilmsForm from "./FilmsForm/FilmsForm.tsx";
import type {FilmInterface} from "../../types";
import {useState} from "react";

const Films = () => {
    const [films, setFilms] = useState<FilmInterface[] | []>([])

    const addFilm = (film: FilmInterface) => {
        setFilms(prevState => [...prevState, film])
    }

    return (
        <div className="container-lg mt-3">
            <FilmsForm addFilm={addFilm}/>
        </div>
    );
};

export default Films;