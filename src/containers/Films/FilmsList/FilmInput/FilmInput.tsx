import React, {useState} from 'react';
import type {Film, FilmInterface} from "../../../../types";

interface Props {
    film: FilmInterface;
    delFilm: (film: FilmInterface) => void;
}

const FilmInput: React.FC<Props> = React.memo(({film, delFilm}) => {
    const [filmInput, setFilmInput] = useState<Film>({name: film.name})

    const changeFilmInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilmInput(prev => ({...prev, name: e.target.value}))
    }
    console.log('Render:', film.name)
    return (
        <>
            <input
                name="name"
                onChange={changeFilmInput}
                type="text"
                value={filmInput.name}
                className="w-50 mt-3"
            />
            <button type="button" className="btn-close" onClick={() => delFilm(film)}></button>
        </>
    );
}, (prevProps, nextProps) => {
    return prevProps === nextProps
})

export default FilmInput;