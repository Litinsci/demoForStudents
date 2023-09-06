import React, { useEffect, useState } from 'react';
import { newGeneratorJoksViewModel } from './generator-joks.view-model';
import { JoksComponent } from './generator-joks.component';
import { Joke } from '../../App';
import { restService } from '../../service/rest-service';

export const JoksContainer = () => {
    const [joks, setJoks] = useState<Array<Joke>>([]);
    const [triger, setTriger] = useState<number>(0);

    const vm = newGeneratorJoksViewModel();
    const service = restService();

    useEffect(() => {
        service.getNewJoke(setJoks);
    }, [triger]);

    return React.createElement(JoksComponent, {
        setTriger: () => setTriger((x) => x + 1),
        joks: joks.map(vm.fotmatJoke),
    });
};
