import { useUnit } from 'effector-react';

import { stores } from './model';

export const useContext = () => useUnit(stores.$context);
