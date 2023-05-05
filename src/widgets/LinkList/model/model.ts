import { createEvent, createStore } from 'effector';

import { Link } from 'shared/types';

const setLinks = createEvent<Link[]>();

const $links = createStore<Link[]>([]).on(setLinks, (_, val) => val);

export const events = {
    setLinks,
};

export const stores = {
    $links,
};
