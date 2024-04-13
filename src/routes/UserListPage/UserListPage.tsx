import classNames from 'classnames';
import UserCardView from './views/UserCardView';
import './UserListPage.scss';
import {useAppSelector} from '../../hooks/useAppSelector';

export default function UserListPage() {
    const {users} = useAppSelector(state => state.userReducer);
    return (
        <div className={classNames('UserListPage')}>
            <div className={classNames('UserListPage__wrapper')}>
                <div className={classNames('UserListPage__category')}>
                    Активные
                </div>
                {users && users.map((user, index) => (
                    user.isArchived === false && !user.isHidden
                        ? (
                            <UserCardView
                                user={user}
                                key={index}
                            />
                        )
                        : ''
                ))}
                <div className={classNames('UserListPage__category')}>
                    Архив
                </div>
                {users && users.map((user, index) => (
                    user.isArchived && !user.isHidden
                        ? (
                            <UserCardView
                                user={user}
                                key={index}
                            />
                        )
                        : ''
                ))}
            </div>
        </div>
    );
}
