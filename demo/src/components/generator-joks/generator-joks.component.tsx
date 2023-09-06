import { Button } from '../button/button.component';

interface JoksComponentProps {
    setTriger: Function;
    joks: Array<{
        id: number;
        joke: string;
    }>;
}

export const JoksComponent = ({ setTriger, joks }: JoksComponentProps) => {
    return (
        <>
            <Button onClick={setTriger}>generate joke</Button>
            <div className="wrap-joke">
                {joks.map((j) => (
                    <span key={j.id}>{j.joke}</span>
                ))}
            </div>
        </>
    );
};
