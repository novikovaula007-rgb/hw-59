import {useEffect, useState} from 'react';
import type {Joke} from "../../types";

const URL = 'https://api.chucknorris.io/jokes/random';

const Jokes = () => {
    const [jokeText, setJokeText] = useState<string>('')

    const getJoke = async () => {
        try {
            const response = await fetch(URL);
            if (response.ok) {
                const joke: Joke = await response.json();
                setJokeText(joke.value);
            }
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                if (response.ok) {
                    const joke: Joke = await response.json();
                    setJokeText(joke.value);
                }
            } catch (e) {
                console.error(e);
            }
        };
        void fetchData();
    }, []);

    return (
        <div className="container-lg">
            <div>
                {jokeText}
            </div>
            <button
                onClick={() => void getJoke()}
                className="btn btn-primary mt-3"
            >Get joke
            </button>
        </div>

    );
};

export default Jokes;