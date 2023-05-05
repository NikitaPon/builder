import './init';
import * as effects from './effects';
import { events, stores } from './model';
import * as selectors from './selectors';

export const cardListModel = {
    effects,
    events,
    stores,
    selectors,
};
