import { useUnit } from 'effector-react';

import { stores } from './model';

export const useCards = () => useUnit(stores.$cards);
export const useSelectedCard = () => useUnit(stores.$selectedCard);
