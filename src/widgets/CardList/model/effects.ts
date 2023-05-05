import { createEffect } from 'effector';

import { getUrl } from 'shared/api';
import { Scenarios } from 'shared/types';

export const getScenarioFx = createEffect(async () => {
    const data: { scenarios: Scenarios } = await getUrl('http://localhost:4000/');

    return data.scenarios;
});
