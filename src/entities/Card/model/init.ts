import { sample } from 'effector';

import { contextModel } from 'shared/components/ContextMenu/model';

import { events } from './model';

sample({
    clock: events.contextClickCard,
    target: contextModel.events.addContext,
});
