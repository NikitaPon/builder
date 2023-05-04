/* eslint-disable @typescript-eslint/ban-ts-comment */

import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { getUrl } from 'shared/api';
import { CardProps } from 'shared/types';

import { useLinks } from '../LinkList/model';

type UseCards = {
    selectedCardId: CardProps['id'] | null;
    cards: CardProps[];
    selectCard: (cardId: CardProps['id']) => void;
    addCard: (card: CardProps) => void;
    findCard: (cardId: CardProps['id']) => CardProps | undefined;
    changeCard: (cardId: CardProps['id'], card: CardProps) => void;
    clearSelect: () => void;
    fetchCards: () => void;
};

export const useCards = create(
    immer<UseCards>((set, get) => ({
        selectedCardId: null,
        cards: [],
        addCard: (card) =>
            set((state) => {
                state.cards.push(card);
            }),
        findCard: (cardId) => {
            const { cards } = get();
            return cards.find((card) => card.id === cardId);
        },
        changeCard: (cardId, card) => {
            const { cards } = get();
            const cardIndex = cards.findIndex((card) => card.id === cardId);

            if (cardIndex !== undefined) {
                set((state) => {
                    state.cards[cardIndex] = card;
                });
            }
        },
        selectCard: (cardId) => {
            const { cards } = get();
            const cardIndex = cards.findIndex((card) => card.id === cardId);

            if (cardIndex !== undefined) {
                set((state) => {
                    state.cards[cardIndex].selected = true;
                    state.selectedCardId = cardId;
                });
            }
        },
        clearSelect: () => {
            const { cards, selectedCardId } = get();
            const cardIndex = cards.findIndex((card) => card.id === selectedCardId);
            set((state) => {
                state.cards[cardIndex].selected = false;
                state.selectedCardId = null;
            });
        },
        fetchCards: async () => {
            const data = await getUrl('http://localhost:4000/');
            let x = 100;
            const y = 100;
            const offsetX = 50;
            // @ts-ignore
            const cards = data.scenarios.map((scenario) => {
                const res = {
                    id: scenario.name,
                    x,
                    y,
                    width: 200,
                    height: 300,
                    selected: false,
                    relateTo: scenario.relate_to,
                    intents: scenario.intents,
                    answer: scenario.answer,
                };
                x += offsetX;
                return res;
            });
            set((state) => {
                state.cards = cards;
            });
            // @ts-ignore
            const links = cards.reduce((acc, curr) => {
                // @ts-ignore
                const currLinks = curr.relateTo?.map((link) => {
                    // @ts-ignore
                    const childCard = cards.find((card) => card.id === link);
                    return {
                        id: `${curr.id}_${childCard.id}`,
                        parentCardId: curr.id,
                        childCardId: childCard.id,
                        startX: curr.x,
                        startY: curr.y,
                        endX: childCard.x,
                        endY: childCard.y,
                    };
                });

                return currLinks ? [...acc, ...currLinks] : acc;
            }, []);

            useLinks.setState((state) => {
                state.links = links;
            });
        },
    }))
);

export const cardSelectors = {
    selectedCardId: (state: UseCards) => state.selectedCardId,
    cards: (state: UseCards) => state.cards,
    selectCard: (state: UseCards) => state.selectCard,
    addCard: (state: UseCards) => state.addCard,
    findCard: (state: UseCards) => state.findCard,
    changeCard: (state: UseCards) => state.changeCard,
    clearSelect: (state: UseCards) => state.clearSelect,
    fetchCards: (state: UseCards) => state.fetchCards,
};
