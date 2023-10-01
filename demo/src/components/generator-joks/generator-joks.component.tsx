import { Property } from 'frp-ts/lib/property';
import { Button } from '../button/button.component';
import { FormatedJokes } from './generator-joks.view-model';

interface JoksComponentProps {
    setTriger: Function;
    jokes: FormatedJokes[];
}

export const JoksComponent = ({ setTriger, jokes }: JoksComponentProps) => {
    return (
        <>
            <Button onClick={setTriger}>generate joke</Button>
            <div className="wrap-joke">
                {jokes.map((j) => (
                    <span key={j.id}>{j.joke}</span>
                ))}
            </div>
        </>
    );
};
