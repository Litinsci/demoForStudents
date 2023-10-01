import { Joke } from '../App';

export const restService = () => ({
    getNewJoke: (setJoks: React.Dispatch<React.SetStateAction<Array<Joke>>>) =>
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then((res) => res.json())
            .then((data) => setJoks((x) => [data, ...x])),
});
