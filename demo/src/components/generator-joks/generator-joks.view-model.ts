import { Joke } from '../../App';

export const newGeneratorJoksViewModel = () => {
    const fotmatJoke = (j: Joke) => ({
        id: j.id,
        joke: `${j.setup} ${j.punchline}`,
    });
    return {
        fotmatJoke,
    };
};
