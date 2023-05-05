import { contextModel } from './model';

export const ContextMenu = () => {
    const { events, selectors } = contextModel;
    const context = selectors.useContext();

    if (!context) return null;

    const { x, y } = context;

    const onShowBtnClick = () => {
        events.clickShowBtn(context);
    };

    const onConnectBtnClick = () => {
        events.clickConnectBtn(context);
    };

    const onCloseBtnClick = () => {
        events.clearContext();
    };

    return (
        <div
            id="dropdownDivider"
            style={{ top: y, left: x }}
            className={`z-10 absolute bg-white rounded-lg shadow w-44`}
        >
            <div className="py-2 text-sm text-gray-70">
                <p className="block px-4 py-2 hover:bg-gray-100" onClick={onShowBtnClick}>
                    Показать
                </p>
                <p className="block px-4 py-2 hover:bg-gray-100" onClick={onConnectBtnClick}>
                    Соединить с...
                </p>
                <p className="block px-4 py-2 hover:bg-gray-100" onClick={onCloseBtnClick}>
                    Закрыть
                </p>
            </div>
        </div>
    );
};
