import { Link } from 'entities/Link';

import { LinkModel } from './model';

export const LinkList = () => {
    const links = LinkModel.selectors.useLinks();

    return (
        <>
            {links.map(({ id, startX, endX, startY, endY }) => (
                <Link key={id} id={id} startX={startX} endX={endX} startY={startY} endY={endY} />
            ))}
        </>
    );
};
