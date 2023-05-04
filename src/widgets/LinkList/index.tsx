import { Link } from 'entities/Link';

import { useLinks, linkSelectors } from './model';

export const LinkList = () => {
    const links = useLinks(linkSelectors.links);

    return (
        <>
            {links.map(({ id, startX, endX, startY, endY }) => (
                <Link key={id} id={id} startX={startX} endX={endX} startY={startY} endY={endY} />
            ))}
        </>
    );
};
