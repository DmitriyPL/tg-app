import { useTelegram } from "../../hooks/useTelegram.js";

export const Header = () => {

    const {onClose, user} = useTelegram();

    return (
        <div className={'header'}>
            <button onClick={onClose}>Закрыть</button>
            <span className={ 'username' }>
                { user }
            </span>
        </div>
    )
}