import { KonvaEventObject } from 'konva/lib/Node';
import { RectConfig } from 'konva/lib/shapes/Rect';

export type OnEvents = {
    onClick: (evt: KonvaEventObject<MouseEvent>) => void;
    onDragMove: (evt: KonvaEventObject<MouseEvent>) => void;
};

export type Link = LinkProps & { parentCardId: CardProps['id']; childCardId: CardProps['id'] };

export type CardProps = Required<Pick<RectConfig, 'id' | 'x' | 'y' | 'width' | 'height'>> & { selected: boolean };

export type LinkProps = {
    id: string;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
};

export type Point = {
    x: number;
    y: number;
};

export enum MESSAGE_TYPES {
    USER,
    BOT,
}

export type UserMessage = {
    type: MESSAGE_TYPES.USER;
    text: string;
};

export type BotMessage = {
    type: MESSAGE_TYPES.BOT;
    answer: Answer;
};

export type Messages = Array<UserMessage | BotMessage>;

export type BotMessageProps = {
    answer: Answer;
    onClick: (text: string) => void;
};

export enum ComponentTypes {
    PARAGRAPH = 'paragraph',
    TITLE = 'title',
    SUBTITLE = 'subtitle',
    LINK = 'link',
    BUTTON = 'button',
    LIST = 'list',
    TEXT = 'text',
}

export type TitleComponent = {
    type: 'title';
    text: string;
};

export type SubtitleComponent = {
    type: 'subtitle';
    text: string;
};

export type ParagraphComponent = {
    type: 'paragraph';
    text: string;
};

export type ListComponent = {
    type: 'list';
    elements: Array<TextComponent>;
};

export type TextComponent = {
    type: 'text';
    text: string;
};

export type ButtonComponent = {
    type: 'button';
    text: string;
};

export type LinkComponent = {
    type: 'link';
    text: string;
    url: string;
};

export type Component =
    | TitleComponent
    | ParagraphComponent
    | ListComponent
    | TextComponent
    | ButtonComponent
    | SubtitleComponent
    | LinkComponent;

export type Answer = Array<Component>;
