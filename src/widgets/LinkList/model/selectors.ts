import { useUnit } from 'effector-react';

import { stores } from './model';

export const useLinks = () => useUnit(stores.$links);
