import {useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import './Layout.scss';
import Header from '../Header/Header';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {initUsers} from '../../actions/users';

export default function Layout() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initUsers());
    }, []);

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
