import { createEvent, createStore } from 'effector';

import { TCard } from 'shared/types';

const clickShowBtn = createEvent<TCard>();
const clickConnectBtn = createEvent<TCard>();
const addContext = createEvent<TCard>();
const clearContext = createEvent();

const $context = createStore<TCard | null>(null)
    .on(addContext, (_, val) => val)
    .reset(clearContext);

export const events = {
    clickShowBtn,
    clickConnectBtn,
    addContext,
    clearContext,
};

export const stores = {
    $context,
};
