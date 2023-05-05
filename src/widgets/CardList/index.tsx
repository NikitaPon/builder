import { useEffect } from 'react';

import { Card } from 'entities/Card';

import { cardListModel } from './model';

export const CardList = () => {
    const { events, selectors } = cardListModel;
    const cards = selectors.useCards();

    useEffect(() => {
        events.mounted();
    }, [events]);

    return (
        <>
            {cards.map((card) => (
                <Card key={card.id} card={card} />
            ))}
        </>
    );
};
