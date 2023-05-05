import { createEvent, createStore } from 'effector';

import { TCard } from 'shared/types';

const mounted = createEvent();

const setCards = createEvent<TCard[]>();
const addCard = createEvent<TCard>();
const changeCard = createEvent<TCard>();

const selectCard = createEvent<TCard>();

const selectLinkingCard = createEvent<TCard>();

const $cards = createStore<TCard[]>([])
    .on(setCards, (_, val) => val)
    .on(addCard, (state, val) => [...state, val])
    .on(changeCard, (state, val) => {
        const index = state.findIndex((card) => card.id === val.id);
        return [...state.slice(0, index), ...state.slice(index + 1, state.length), val];
    });

const $selectedCard = createStore<TCard | null>(null).on(selectCard, (_, val) => val);
const $linkingCard = createStore<TCard | null>(null).on(selectLinkingCard, (_, val) => val);

export const events = {
    mounted,
    setCards,
    selectCard,
    addCard,
    changeCard,
    selectLinkingCard,
};

export const stores = {
    $cards,
    $selectedCard,
    $linkingCard,
};
