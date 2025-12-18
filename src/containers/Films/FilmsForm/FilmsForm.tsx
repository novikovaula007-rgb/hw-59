import React, {useState} from 'react';
import type {Film, FilmInterface} from "../../../types";

interface Props {
    addFilm: (film: FilmInterface) => void;
}

const FilmsForm: React.FC<Props> = ({addFilm}) => {
    const [film, setFilm] = useState<Film>({name: ''})

    const changeFilmForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilm(prev => ({...prev, name: e.target.value}))
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!film.name.trim().length) {
            alert('Please fill in the field')
        } else {
            addFilm({
                id: Math.random().toString(),
                ...film})
            setFilm({name: ''})
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="d-flex gap-2">
                <input
                    type="text"
                    name="name"
                    id="filmName"
                    value={film.name}
                    className="w-50"
                    onChange={changeFilmForm}
                />
                <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </form>
    );
};

export default FilmsForm;