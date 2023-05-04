/* eslint-disable @typescript-eslint/no-empty-function */
import { Layer, Stage } from 'react-konva';

import { faArrowRightLong, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BotMessage } from 'entities/BotMessage';
import { AddCardButton } from 'features/addCardButton';
import { CardList } from 'widgets/CardList';
import { LinkList } from 'widgets/LinkList';

import { ContextMenu } from 'shared/components/ContextMenu';

const LEFT_SIDE_WIDTH = 200;
const RIGHT_SIDE_WIDTH = 400;

export const App = () => {
    return (
        <div className="flex">
            <div className={`w-[200px] h-screen p-4`}>
                <AddCardButton />
            </div>
            <div>
                <Stage
                    width={window.innerWidth - LEFT_SIDE_WIDTH - RIGHT_SIDE_WIDTH}
                    height={window.innerHeight}
                    className="bg-slate-300"
                >
                    <Layer>
                        <CardList />
                        <LinkList />
                    </Layer>
                </Stage>
            </div>
            <div className={`w-[400px] h-screen p-4`}>
                <div className="flex flex-col w-80 mx-auto my-0 rounded-lg shadow-[0_0_5px_1px] shadow-gray-300">
                    <div className="flex h-12 bg-blue-700 text-white p-2 justify-between rounded-t-lg z-10 shadow-[0_1px_2px_0] shadow-blue-700">
                        <h2>ПочтаБот</h2>
                        <button className="w-6 h-6 rounded-full hover:bg-blue-600">
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                    <div className="flex flex-col gap-2 h-[400px] overflow-y-scroll p-2 bg-blue-100 scrollbar-hide">
                        <BotMessage answer={[]} onClick={() => {}} />
                    </div>
                    <div className="flex bg-white justify-between p-2 rounded-b-lg border-t border-gray-300">
                        <input type="text" className="w-full focus:outline-0" placeholder="Введите сообщение" />
                        <button className="w-6 h-6 rounded-full hover:bg-gray-200">
                            <FontAwesomeIcon icon={faArrowRightLong} />
                        </button>
                    </div>
                </div>
            </div>
            <ContextMenu />
        </div>
    );
};
