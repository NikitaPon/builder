import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { getEndPoint, getStartPoint } from 'shared/libs/arrow';
import { CardProps, Link } from 'shared/types';

type UseLinks = {
    links: Link[];
    addLink: (link: Link) => void;
    findLink: (linkId: Link['id']) => Link | undefined;
    findLinks: (cardId: CardProps['id']) => Link[];
    changeLink: (linkId: Link['id'], link: Link) => void;
    changeCardPosition: (card: CardProps) => void;
};

export const useLinks = create(
    immer<UseLinks>((set, get) => ({
        links: [],
        addLink: (link) =>
            set((state) => {
                state.links.push(link);
            }),
        findLink: (linkId) => {
            const { links } = get();
            return links.find((link) => link.id === linkId);
        },
        findLinks: (cardId) => {
            const { links } = get();
            return links.filter((link) => link.parentCardId === cardId || link.childCardId === cardId);
        },
        changeLink: (linkId, link) => {
            const { links } = get();
            const linkIndex = links.findIndex((link) => link.id === linkId);

            if (linkIndex !== undefined) {
                set((state) => {
                    state.links[linkIndex] = link;
                });
            }
        },
        changeCardPosition: (card) => {
            const { links } = get();
            const parentCardLinks = links
                .filter((link) => link.parentCardId === card.id)
                .map((link) => ({ ...link, ...getStartPoint(card) }));
            const childCardLinks = links
                .filter((link) => link.childCardId === card.id)
                .map((link) => ({ ...link, ...getEndPoint(card) }));

            const newLinks = links.map((link) => {
                const parentCardLink = parentCardLinks.find((parentLink) => parentLink.id === link.id);
                const childCardLink = childCardLinks.find((childLink) => childLink.id === link.id);
                return parentCardLink || childCardLink || link;
            });
            set((state) => {
                state.links = newLinks;
            });
        },
    }))
);

export const linkSelectors = {
    links: (state: UseLinks) => state.links,
    addLink: (state: UseLinks) => state.addLink,
    findLink: (state: UseLinks) => state.findLink,
    findLinks: (state: UseLinks) => state.findLinks,
    changeLink: (state: UseLinks) => state.changeLink,
    changeCardPosition: (state: UseLinks) => state.changeCardPosition,
};
