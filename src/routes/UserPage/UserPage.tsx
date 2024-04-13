import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import classNames from 'classnames';
import _pick from 'lodash-es/pick';
import _get from 'lodash-es/get';
import {createPortal} from 'react-dom';
import {IUser} from '../../models/IUser';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getUsers} from '../../reducers/users';
import ATWORKIMAGE from '../../icons/ATWORKIMAGE.png';
import './UserPage.scss';
import Arrow from '../../icons/Solid_Interface_Backarrow.svg?react';
import Input from '../../ui/form/Input/Input';
import CompleteModal from '../../modals/CompleteModal';
import Success from '../../icons/Solid_Status_Checked-box.svg?react';

enum RequiredUserField {
    name = 'Имя',
    username = 'Логин',
    email = 'Email',
    'address.city' = 'Адрес',
    phone = 'Телефон',
    'company.name' = 'Компания',
}

const MENU_ITEMS = [
    'Данные пользователя',
    'Рабочее пространство',
    'Приватность',
    'Безопасность',
];

export default function UserPage() {
    const {id} = useParams();
    const {user} = useAppSelector(state => ({
        user: getUsers(state).find(userObj => userObj.id === Number(id)),
    }));
    const navigate = useNavigate();
    const [userData, setUserData] = useState<Partial<IUser> | null>(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (!user) {
            return;
        }

        const userFields = Object.entries(RequiredUserField).reduce((acc, [currentKey, currentFieldLabel]) => {
            const currentAcc = {...acc};

            currentAcc[currentFieldLabel] = _get(user, currentKey);

            return currentAcc;
        }, {} as IUser);

        setUserData(userFields);
    }, [user]);

    const handleChange = (value: string, valueField: string) => {
        setUserData(prevState => ({
            ...prevState,
            [valueField]: value,
        }));
    };

    const formButtonHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setShowModal(true);
        const interval = setInterval(() => setShowModal(false), 4000);
        return () => clearInterval(interval);
    };

    if (!user) {
        return null;
    }

    return (
        <div className={classNames('UserPage')}>
            <div className={classNames('UserPage__wrapper')}>
                <button
                    className={classNames('UserPage__nav')}
                    onClick={() => navigate('/')}
                >
                    <Arrow />
                    Назад
                </button>
                {showModal && createPortal(
                    <CompleteModal
                        onChange={() => setShowModal(false)}
                        title='Изменения сохранены'
                        icon={Success}
                    />,
                    document.body,
                )}
                <div className={classNames('Profile')}>
                    <div className={classNames('Profile__wrapper')}>
                        <img
                            src={ATWORKIMAGE}
                            alt=''
                            className={classNames('Profile__image')}
                        />
                        <div>
                            {MENU_ITEMS.map((menuItem, menuItemIndex) => (
                                <div
                                    key={menuItemIndex}
                                    className={classNames('Profile__settings')}
                                >
                                    {menuItem}
                                </div>
                            ))}
                        </div>
                    </div>
                    <form
                        className={classNames('Profile__data')}
                    >
                        <p className={classNames('Profile__label')}>Данные профиля</p>
                        {Object.entries(userData || {}).map(([field, value]) => (
                            <Input
                                key={field}
                                label={field}
                                value={value as string}
                                onChange={(newValue, valueField) => handleChange(newValue, valueField)}
                            />
                        ))}
                        <button
                            className={classNames('Profile__button')}
                            onClick={(e) => formButtonHandler(e)}
                        >
                            Сохранить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
