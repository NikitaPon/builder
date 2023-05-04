import { KonvaEventObject } from 'konva/lib/Node';
import { useEffect } from 'react';

import { Card } from 'entities/Card';

import { getEndPoint, getStartPoint } from 'shared/libs/arrow';
import { generateCardId } from 'shared/mocks/cards';

import { useLinks, linkSelectors } from '../LinkList/model';

import { useCards, cardSelectors } from './model';

export const CardList = () => {
    const cards = useCards(cardSelectors.cards);
    const selectedCardId = useCards(cardSelectors.selectedCardId);
    const selectCard = useCards(cardSelectors.selectCard);
    const findCard = useCards(cardSelectors.findCard);
    const clearSelect = useCards(cardSelectors.clearSelect);
    const changeCard = useCards(cardSelectors.changeCard);
    const fetchCards = useCards(cardSelectors.fetchCards);
    const addLink = useLinks(linkSelectors.addLink);
    const changeCardPosition = useLinks(linkSelectors.changeCardPosition);

    useEffect(() => {
        fetchCards();
    }, [fetchCards]);

    const onCardClick = (e: KonvaEventObject<MouseEvent>) => {
        if (!selectedCardId) {
            selectCard(e.target.id());
        } else {
            const id = generateCardId();
            const firstCard = findCard(selectedCardId);
            const secondCard = findCard(e.target.id());
            if (firstCard && secondCard) {
                addLink({
                    id: `link-${id}`,
                    parentCardId: firstCard.id,
                    childCardId: secondCard.id,
                    ...getStartPoint(firstCard),
                    ...getEndPoint(secondCard),
                });
            }
            clearSelect();
        }
    };

    const onRectDragMove = (e: KonvaEventObject<MouseEvent>) => {
        const id = e.target.id();
        const { x, y } = e.target.position();
        const foundCard = findCard(id);

        if (foundCard) {
            changeCard(id, { ...foundCard, x, y });
            changeCardPosition({ ...foundCard, x, y });
        }
    };

    return (
        <>
            {cards.map((card) => (
                <Card key={card.id} onClick={onCardClick} onDragMove={onRectDragMove} {...card} />
            ))}
        </>
    );
};
