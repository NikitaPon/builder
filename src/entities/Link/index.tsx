import { FC } from 'react';
import { Arrow } from 'react-konva';

import { LinkProps } from 'shared/types';

export const Link: FC<LinkProps> = ({ id, startX, startY, endX, endY }) => {
    return (
        <Arrow
            id={id}
            points={[startX, startY, endX, endY]}
            lineJoin="round"
            pointerLength={5}
            pointerWidth={5}
            fill="#047dc5"
            stroke="#047dc5"
            strokeWidth={1}
            tension={0.4}
        />
    );
};
