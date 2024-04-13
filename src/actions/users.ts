/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import {AppDispatch} from '../store/store';
import {userSlice} from '../reducers/users';
import {IUser} from '../models/IUser';

export const initUsers = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users/', {
            params: {
                _limit: 6,
            },
        });
        const data = (response.data as IUser[]).map(user => ({
            ...user,
            isHidden: false,
            isArchived: false,
        }));
        dispatch(userSlice.actions.initUsers(data));
    } catch (error) {
        console.log(error);
    }
};
