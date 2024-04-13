import classNames from 'classnames';
import {useNavigate} from 'react-router-dom';
import {IUser} from '../../../../models/IUser';
import ATWORKIMAGE from '../../../../icons/ATWORKIMAGE.png';
import './UserCardView.scss';
import {useAppDispatch} from '../../../../hooks/useAppDispatch';
import {setUserArchived, setUserHidden} from '../../../../reducers/users';
import ActionMenu from '../../../../ui/ActionMenu/ActionMenu';

export interface UserCardViewProps {
    user: IUser,
}

const EDIT = 'Редактировать';
const ARCHIVE = 'Архивировать';
const HIDE = 'Скрыть';
const ACTIVATE = 'Активировать';
const MENU_SETTINGS = [EDIT, ARCHIVE, HIDE];
const ARCHIVED_MENU_SETTING = [ACTIVATE];

export default function UserCardView({user}: UserCardViewProps) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSettingClick = (action: string) => {
        switch (action) {
            case EDIT:
                navigate(`user/${user.id}`);
                break;
            case ARCHIVE:
                dispatch(setUserArchived(user.id));
                break;
            case ACTIVATE:
                dispatch(setUserArchived(user.id));
                break;
            case HIDE:
                dispatch(setUserHidden(user.id));
                break;

            default: break;
        }
    };

    return (
        <button
            className={classNames('UserCardView')}
        >
            <img
                src={ATWORKIMAGE}
                alt=''
                className={classNames(user.isArchived ? 'Archived__image' : 'UserCardView__image')}
            />
            <div className={classNames('UserCardView__info')}>
                <span className={classNames(user.isArchived ? 'Archived__name' : 'UserCardView__name')}>
                    <p>{user.name}</p>
                    {user.isArchived ? (
                        <ActionMenu
                            actions={ARCHIVED_MENU_SETTING}
                            onActionClick={onSettingClick}
                        />
                    ) : (
                        <ActionMenu
                            actions={MENU_SETTINGS}
                            onActionClick={onSettingClick}
                        />
                    )}
                </span>
                <span className={classNames('UserCardView__company')}>
                    {user.company.name}
                </span>
                <span className={classNames('UserCardView__city')}>
                    {user.address.city}
                </span>
            </div>
        </button>
    );
}
