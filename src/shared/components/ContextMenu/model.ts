import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { CardProps } from 'shared/types';

type Context = {
    id: CardProps['id'];
    x: number;
    y: number;
};

type UseContext = {
    context: Context | null;
    addContext: (ctx: Context) => void;
    clearContext: () => void;
};

export const useContext = create(
    immer<UseContext>((set, get) => ({
        context: null,
        addContext: (ctx) =>
            set((state) => {
                state.context = ctx;
            }),
        clearContext: () =>
            set((state) => {
                state.context = null;
            }),
    }))
);

export const contextSelectors = {
    context: (state: UseContext) => state.context,
    addContext: (state: UseContext) => state.addContext,
    clearContext: (state: UseContext) => state.clearContext,
};
