import { Action } from 'redux';

import { User } from './user.model';
import * as UserActions from './user.actions';

import { createSelector } from 'reselect';

export interface UsersState {
  currentUser: User;
};

const initialState: UsersState = {
  currentUser: null
};

export const UserReducer =
  function (state: UsersState = initialState, action: Action): UsersState {
    switch (action.type) {
      case UserActions.SET_CURRENT_USER:
        const user: User = (<UserActions.SetCurrentUserAction>action).user;
        return {
          currentUser: user
        };
      default:
        return state;
    }
  }

export const getUserState = (state): UsersState => state.users;

export const getCurrentUser = createSelector(
  getUserState,
  (state: UsersState) => state.currentUser);

