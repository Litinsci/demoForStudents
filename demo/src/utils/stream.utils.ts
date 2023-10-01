import { Observable, Stream } from 'most';
import { useState, useEffect } from 'react';

export const useObservable = <T>(
    fa: Observable<T> | Stream<T>,
    initial?: T
): T | undefined => {
    const [value, setValue] = useState(initial);
    useEffect(() => {
        const subscription = fa.subscribe({
            next: setValue,
            error: () => {},
            complete: () => {},
        });
        return () => subscription.unsubscribe();
    }, [fa, setValue]);

    return value;
};
