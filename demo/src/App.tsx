import './App.css';
import { JoksContainer } from './components/generator-joks/generator-joks.container';

export interface Joke {
    id: number;
    punchline: string;
    setup: string;
    type: string;
}

function App() {
    return (
        <div className="App">
            <span className="title">our data</span>
            <JoksContainer />
        </div>
    );
}

export default App;
