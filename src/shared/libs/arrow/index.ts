import { CardProps } from '../../types';

export const getStartPoint = (card: CardProps) => ({ startX: card.x + card.width, startY: card.y + card.height * 0.9 });
export const getEndPoint = (card: CardProps) => ({ endX: card.x, endY: card.y + card.height * 0.1 });
