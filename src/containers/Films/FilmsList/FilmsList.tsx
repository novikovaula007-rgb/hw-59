import React from 'react';
import type {FilmInterface} from "../../../types";
import FilmInput from "./FilmInput/FilmInput.tsx";

interface Props {
    films: FilmInterface[]
    delFilm: (film: FilmInterface) => void
}

const FilmsList: React.FC<Props> = ({films, delFilm}) => {
    return (
        <div>
            {films.map(film => {
                return <FilmInput key={film.id}
                                  film={film}
                                  delFilm={delFilm}
                />
            })}
        </div>
    );
};

export default FilmsList;