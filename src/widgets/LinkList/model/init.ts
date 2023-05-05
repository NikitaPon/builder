import { sample } from 'effector';

import { cardListModel } from 'widgets/CardList/model';

import { getEndPoint, getStartPoint } from 'shared/libs/arrow';
import { Link, TCard } from 'shared/types';

import { events } from './model';

sample({
    clock: cardListModel.stores.$cards,
    fn: (cards) => {
        return cards.reduce<Link[]>((acc, curr) => {
            const currLinks = curr.relateTo.map((link) => {
                const childCard = cards.find((card) => card.id === link) as TCard;

                return {
                    id: `${curr.id}_${childCard.id}`,
                    parentCardId: curr.id,
                    childCardId: childCard.id,
                    ...getStartPoint(curr),
                    ...getEndPoint(childCard),
                };
            });

            return currLinks ? [...acc, ...currLinks] : acc;
        }, []);
    },
    target: events.setLinks,
});
