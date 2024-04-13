import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import _get from 'lodash-es/get';
import {IUser} from '../models/IUser';

interface UserState {
    users: IUser[],
}

const initialState: UserState = {
    users: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        initUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        },
        setUserArchived: (state, action: PayloadAction<number>) => {
            state.users = state.users.map(user => {
                if (user.id !== action.payload) {
                    return user;
                }

                return {
                    ...user,
                    isArchived: !user.isArchived,
                };
            });
        },
        setUserHidden: (state, action: PayloadAction<number>) => {
            state.users = state.users.map(user => {
                if (user.id !== action.payload) {
                    return user;
                }

                return {
                    ...user,
                    isHidden: !user.isHidden,
                };
            });
        },
    },
});

export const {setUserArchived, setUserHidden, initUsers} = userSlice.actions;

export const getUsers: (state: any) => IUser[] = (state) => _get(state, 'userReducer.users') || null;

export default userSlice.reducer;
