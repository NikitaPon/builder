import { addCardButtonModel } from './model';

export const AddCardButton = () => {
    const { events } = addCardButtonModel;

    const onClick = () => {
        events.addCard();
    };

    return (
        <button className="w-full p-3 border border-cyan-300" onClick={onClick}>
            Add card
        </button>
    );
};
