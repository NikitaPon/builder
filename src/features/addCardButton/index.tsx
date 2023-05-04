import { useCards, cardSelectors } from 'widgets/CardList/model';

import { defaultCard, generateCardId } from 'shared/mocks/cards';

export const AddCardButton = () => {
    const addCard = useCards(cardSelectors.addCard);

    const addCardClick = () => {
        const id = generateCardId();
        addCard({ ...defaultCard, id: `rect-${id}` });
    };

    return (
        <button className="w-full p-3 border border-cyan-300" onClick={addCardClick}>
            Add card
        </button>
    );
};
