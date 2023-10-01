/* eslint-disable react-hooks/rules-of-hooks */

import { mergeArray, multicast } from '@most/core';
import { Stream, Time, Disposable, Scheduler } from '@most/types';
import { constVoid, pipe } from 'fp-ts/lib/function';
import { useLayoutEffect, useMemo, useRef } from 'react';

const newValueWithEffect = <A>(
    value: A,
    ...effects: Stream<unknown>[]
): ValueWithEffect<A> => ({
    value,
    effects: pipe(effects, mergeArray, multicast),
});

export interface ValueWithEffect<A> {
    value: A;
    effects: Stream<unknown>;
}

export const valueWithEffect = {
    new: newValueWithEffect,
};

export interface UseValueWithEffect {
    <A>(fa: () => ValueWithEffect<A>, dependencies: unknown[]): A;
}

export const voidSink = {
    event: constVoid,
    end: constVoid,
    error: (time: Time, error: Error): never => {
        throw error;
    },
};
export const useValueWithEffect =
    (scheduler: Scheduler): UseValueWithEffect =>
    (factory, dependencies) => {
        // do not include factory in dependencies
        // because we don't want it to be rerun when it's used as lambda
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const fa = useMemo(factory, dependencies);

        const disposableRef = useRef<Disposable>();
        useMemo(() => {
            disposableRef.current?.dispose();
            disposableRef.current = fa.effects.run(voidSink, scheduler);
        }, [fa]);

        useLayoutEffect(() => () => disposableRef.current?.dispose(), []);
        return fa.value;
    };
