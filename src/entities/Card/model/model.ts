import { createEvent } from 'effector';

import { TCard } from 'shared/types';

const moveCard = createEvent<TCard>();
const clickCard = createEvent<TCard>();
const contextClickCard = createEvent<TCard>();

export const events = {
    moveCard,
    clickCard,
    contextClickCard,
};
