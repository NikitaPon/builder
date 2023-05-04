/* eslint-disable @typescript-eslint/ban-ts-comment */
import { KonvaEventObject } from 'konva/lib/Node';
import { FC } from 'react';
import { Rect, Group, Text } from 'react-konva';

import { useContext, contextSelectors } from 'shared/components/ContextMenu/model';
import { CardProps, OnEvents } from 'shared/types';

//@ts-ignore
export const Card: FC<CardProps & OnEvents> = ({ id, x, y, width, height, selected, intents, onClick, onDragMove }) => {
    const addContext = useContext(contextSelectors.addContext);
    const baseBorderColor = 'rgb(103, 232, 249)';
    const activeBorderColor = 'rgb(255 126 125)';
    const hoverBorderColor = 'rgb(220 104 255)';
    const stroke = selected ? activeBorderColor : baseBorderColor;

    const onMouseEnter = (e: KonvaEventObject<MouseEvent>) => {
        if (!selected) {
            e.target.setAttr('stroke', hoverBorderColor);
        }
    };

    const onMouseLeave = (e: KonvaEventObject<MouseEvent>) => {
        if (!selected) {
            e.target.setAttr('stroke', baseBorderColor);
        }
    };

    const onCardClick = (e: KonvaEventObject<MouseEvent>) => {
        if (e.evt.button === 0) {
            console.log('onCardClick', e);
        }
    };

    const onContextMenu = (e: KonvaEventObject<PointerEvent>) => {
        e.evt.preventDefault();
        addContext({ id, x: e.evt.clientX, y: e.evt.clientY });
    };

    return (
        <Group>
            <Rect
                id={id}
                x={x}
                y={y}
                width={width}
                height={height}
                fill="white"
                shadowColor="black"
                shadowBlur={20}
                shadowOpacity={0.2}
                cornerRadius={10}
                onClick={onCardClick}
                stroke={stroke}
                strokeWidth={1}
                draggable
                onDragMove={onDragMove}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onContextMenu={onContextMenu}
            />
            <Text x={x + 10} y={y + 10} text="name:" />
            <Text x={x + 50} y={y + 10} text={id} />
            <Text x={x + 10} y={y + 30} text="[intents]:" />
            <Text x={x + 60} y={y + 30} width={130} text={intents} />
        </Group>
    );
};
