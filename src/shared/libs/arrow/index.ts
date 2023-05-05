import { TCard } from '../../types';

export const getStartPoint = (card: TCard) => ({ startX: card.x + card.width, startY: card.y + card.height * 0.9 });
export const getEndPoint = (card: TCard) => ({ endX: card.x, endY: card.y + card.height * 0.1 });
