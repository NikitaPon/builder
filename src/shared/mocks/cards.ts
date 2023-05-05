import { TCard } from '../types';

let countId = 0;

export const generateCardId = () => {
    countId += 1;
    return countId;
};

export const defaultCard: Omit<TCard, 'id'> = {
    x: 600,
    y: 100,
    width: 200,
    height: 300,
    selected: false,
    articles: [],
    intents: [],
    relateTo: [],
};
