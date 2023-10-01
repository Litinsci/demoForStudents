import React from 'react';
import { newGeneratorJoksViewModel } from './generator-joks.view-model';
import { JoksComponent } from './generator-joks.component';
import { restService } from '../../service/rest-service';
import { useValueWithEffect } from '../../utils/view-model.utils';
import { newDefaultScheduler } from '@most/scheduler';
import { useProperty } from '@frp-ts/react';

export const JoksContainer = () => {
    const service = restService();
    const vm = useValueWithEffect(newDefaultScheduler())(
        () => newGeneratorJoksViewModel(service),
        []
    );

    return React.createElement(JoksComponent, {
        setTriger: vm.triger,
        jokes: useProperty(vm.jokes),
    });
};
