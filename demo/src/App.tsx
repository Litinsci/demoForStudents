import { useEffect, useState } from 'react';
import './App.css';
import { spawn } from 'child_process';

interface Joke {
    id: number;
    punchline: string;
    setup: string;
    type: string;
}

function App() {
    const [joks, setJoks] = useState<Array<Joke>>([]);
    const [triger, setTriger] = useState<number>(0);

    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then((res) => res.json())
            .then((data) => setJoks((x) => [...x, data]));
    }, [triger]);

    const fotmatJoke = (j: Joke) => ({
        id: j.id,
        joke: `${j.setup} ${j.punchline}`,
    });
    return (
        <div className="App">
            <span className="title">our data</span>
            <button className="button" onClick={() => setTriger((i) => i + 1)}>
                generate joke
            </button>
            <div className="wrap-joke">
                {joks.map(fotmatJoke).map((j) => (
                    <span key={j.id}>{j.joke}</span>
                ))}
            </div>
        </div>
    );
}

export default App;
