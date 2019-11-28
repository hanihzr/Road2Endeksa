import { IUser, UserState } from '../../../models';

import {
  createReducer,
  on,
  Action,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
import * as UsersActions from '../actions';
import { createEntityAdapter, Update } from '@ngrx/entity';

export const userAdapter = createEntityAdapter<IUser>();

const initialState: UserState = userAdapter.getInitialState({
  ids: [],
  entities: null,
  loaded: false,
  loading: false,
  currentUser: null,
  currentUserId: null
});

const usersReducer = createReducer(
  initialState,
  on(UsersActions.LoadUsers, LoadUsersState => {
    return {
      ...LoadUsersState,
      loading: true
    };
  }),
  on(
    UsersActions.LoadUsersSuccess,
    (LoadUsersSuccessState, { users }) => {
      return userAdapter.addAll(users, {
        ...LoadUsersSuccessState,
        loaded: true,
        loading: false
      });
    }
  ),
  on(UsersActions.LoadUsersFail, (LoadUsersFailState, { err }) => {
    return {
      ...LoadUsersFailState,
      loading: false,
      loaded: false,
      err
    };
  }),
  on(UsersActions.UpdateUserFail, (LoadUsersFailState, { err }) => {
    return {
      ...LoadUsersFailState,
      err
    };
  }),
  on(
    UsersActions.AddUserSuccess,
    (AddUserSuccessState, { user }) => {
      return userAdapter.addOne(user, {
        ...AddUserSuccessState
      });
    }
  ),
  on(
    UsersActions.RemoveUserSuccess,
    (RemoveUserSuccessState, { user }) => {
      return userAdapter.removeOne(user.id, {
        ...RemoveUserSuccessState
      });
    }
  ),
  on(
    UsersActions.UpdateUserSuccess,
    (UpdateUserState, { user }) => {
      return userAdapter.updateOne(user as Update<IUser>, {
        ...UpdateUserState
      });
    }
  ),
  on(UsersActions.SelectUser, (SelectUserState, { user }) => {
    return {
      ...SelectUserState,
      currentUser: user,
      currentUserId: user.id
    };
  }),
  on(UsersActions.SelectUserById, (SelectUserByIdState, { id }) => {
    return {
      ...SelectUserByIdState,
      currentUserId: id
    };
  })
);

const getSelectedUser = (getSelectedUserIdState: UserState) =>
  getSelectedUserIdState.currentUser;

export function UsersReducer(
  UsersReducerState: UserState,
  action: Action
) {
  return usersReducer(UsersReducerState, action);
}

const selectUserState = createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(
  selectUserState,
  userAdapter.getSelectors().selectAll
);

export const selectUserIds = createSelector(
  selectUserState,
  userAdapter.getSelectors().selectIds
);

export const selectUserEntities = createSelector(
  selectUserState,
  userAdapter.getSelectors().selectEntities
);

export const selectUserTotal = createSelector(
  selectUserState,
  userAdapter.getSelectors().selectTotal
);

export const selectedUser = createSelector(
  selectUserState,
  getSelectedUser
);
