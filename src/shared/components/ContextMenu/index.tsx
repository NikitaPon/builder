import { useCards, cardSelectors } from 'widgets/CardList/model';

import { contextSelectors, useContext } from './model';

export const ContextMenu = () => {
    const selectCard = useCards(cardSelectors.selectCard);
    const context = useContext(contextSelectors.context);
    const clearContext = useContext(contextSelectors.clearContext);

    const onShowClick = () => {
        clearContext();
        if (context) {
            selectCard(context.id);
        }
    };

    return (
        <div
            style={{ top: context?.y, left: context?.x }}
            id="dropdownDivider"
            className={`z-10 absolute ${!context && 'hidden'} bg-white rounded-lg shadow w-44`}
        >
            <div className="py-2 text-sm text-gray-70">
                <p className="block px-4 py-2 hover:bg-gray-100" onClick={onShowClick}>
                    Показать
                </p>
                <p className="block px-4 py-2 hover:bg-gray-100">Соединить с...</p>
            </div>
        </div>
    );
};
