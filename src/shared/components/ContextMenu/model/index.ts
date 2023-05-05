import './init';
import { events, stores } from './model';
import * as selectors from './selectors';

export const contextModel = {
    events,
    selectors,
    stores,
};
