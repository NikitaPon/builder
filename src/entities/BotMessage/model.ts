import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { Answer } from 'shared/types';

type UseBotMessages = {
    answer: Answer;
    addAnswer: (answer: Answer) => void;
};

export const useBotMessages = create(
    immer<UseBotMessages>((set) => ({
        answer: [],
        addAnswer: (answer) => {
            set((state) => {
                state.answer = answer;
            });
        },
    }))
);
