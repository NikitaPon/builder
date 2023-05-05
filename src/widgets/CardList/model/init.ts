import { sample } from 'effector';

import { cardModel } from 'entities/Card/model';
import { addCardButtonModel } from 'features/addCardButton/model';

import { contextModel } from 'shared/components/ContextMenu/model';
import { defaultCard, generateCardId } from 'shared/mocks/cards';
import { TCard } from 'shared/types';

import { getScenarioFx } from './effects';
import { events, stores } from './model';

sample({
    clock: events.mounted,
    target: getScenarioFx,
});

sample({
    clock: getScenarioFx.doneData,
    fn: (scenarios) => {
        return scenarios.map((scenario) => ({
            id: scenario.name,
            x: 100,
            y: 100,
            width: 200,
            height: 300,
            selected: false,
            relateTo: scenario.relate_to || [],
            intents: scenario.intents || [],
            answer: scenario.answer,
            articles: scenario.articles,
        }));
    },
    target: events.setCards,
});

sample({
    clock: addCardButtonModel.events.addCard,
    fn: () => ({ ...defaultCard, id: `rect-${generateCardId()}` }),
    target: events.addCard,
});

sample({
    clock: cardModel.events.moveCard,
    target: events.changeCard,
});

sample({
    clock: contextModel.events.clickShowBtn,
    target: events.selectCard,
});

sample({
    clock: contextModel.events.clickConnectBtn,
    target: events.selectLinkingCard,
});

sample({
    clock: cardModel.events.clickCard,
    source: stores.$linkingCard,
    filter: (data: TCard | null): data is TCard => Boolean(data),
    fn: (data, card) => ({
        ...data,
        relateTo: [...data.relateTo, card.id],
    }),
    target: events.changeCard,
});
