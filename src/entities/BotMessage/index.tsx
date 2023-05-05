/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC } from 'react';

import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { cardListModel } from 'widgets/CardList/model';

import { BotMessageProps, Component, ComponentTypes } from 'shared/types';

const mapComponents = (component: Component, onClick: BotMessageProps['onClick']) => {
    switch (component.type) {
        case ComponentTypes.TITLE:
            return <h4 className="font-bold">{component.text}</h4>;
        case ComponentTypes.BUTTON:
            return (
                <button
                    onClick={() => onClick(component.text)}
                    className="py-2 px-4 my-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-600"
                >
                    {component.text}
                </button>
            );
        case ComponentTypes.SUBTITLE:
            return <h5>{component.text}</h5>;
        case ComponentTypes.LINK:
            return (
                <a href={component.url} className="text-blue-300 hover:underline">
                    {component.text}
                </a>
            );
        case ComponentTypes.PARAGRAPH:
            return <p>{component.text}</p>;
        case ComponentTypes.LIST:
            return (
                <ul className="px-5">
                    {component.elements.map((item) => (
                        <li className="list-disc">{item.text}</li>
                    ))}
                </ul>
            );
        default:
            return null;
    }
};

const parseAnswer = (answer: BotMessageProps['answer'], onClick: BotMessageProps['onClick']) => {
    return answer.map((item) => mapComponents(item, onClick));
};

export const BotMessage: FC<BotMessageProps> = ({ onClick }) => {
    const { selectors } = cardListModel;
    const selectedCard = selectors.useSelectedCard();

    if (!selectedCard) return null;

    return (
        <div className="flex justify-start">
            <div className="flex max-w-[250px] gap-1">
                <div className="flex flex-col justify-end">
                    <div className="w-8 h-8 bg-white flex justify-center items-center rounded-t-3xl rounded-bl-3xl">
                        <FontAwesomeIcon icon={faRobot} />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="py-2 px-4 bg-blue-700 text-white rounded-t-3xl rounded-br-3xl">
                        {/* @ts-ignore */}
                        {parseAnswer(selectedCard.answer, onClick)}
                    </div>
                </div>
            </div>
        </div>
    );
};
