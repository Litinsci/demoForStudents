import { Stream } from '@most/types';
import { Joke } from '../App';
import { fromPromise } from '@most/core';

export interface RestService {
    getNewJoke: () => Stream<Joke>;
}

export type NewRestService = () => RestService;

export const restService: NewRestService = () => ({
    getNewJoke: () =>
        fromPromise(
            fetch('https://official-joke-api.appspot.com/random_joke').then(
                (res) => res.json()
            )
        ),
});
