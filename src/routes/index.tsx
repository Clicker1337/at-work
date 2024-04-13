import {Routes, Route} from 'react-router-dom';
import {ROUTE_HOME, ROUTE_NOT_FOUND, ROUTE_USER} from '../consts/routes';
import UserPage from './UserPage';
import Layout from '../shared/Layout/Layout';
import UserListPage from './UserListPage';

export default function Router() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route
                    index
                    element={<UserListPage />}
                />
                <Route
                    path={ROUTE_HOME}
                    element={<UserListPage />}
                />
                <Route
                    path={ROUTE_USER}
                    element={<UserPage />}
                />
            </Route>
        </Routes>
    );
}
