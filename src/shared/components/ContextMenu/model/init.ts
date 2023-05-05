import { sample } from 'effector';

import { events } from './model';

sample({
    clock: [events.clickShowBtn, events.clickConnectBtn],
    target: events.clearContext,
});
