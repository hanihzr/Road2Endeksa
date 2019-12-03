import { IUser } from '../../../models';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

const LOAD_USERS = '[Users] Load Users';
const LOAD_USERS_SUCCESS = '[Users] Load Users Success';
const LOAD_USERS_FAIL = '[Users] Load Users Fail';
const ADD_USER = '[Users] Add User';
const ADD_USER_SUCCESS = '[Users] Add User Success';
const ADD_USER_FAIL = '[Users] Add User Fail';
const REMOVE_USER = '[Users] Remove User';
const REMOVE_USER_SUCCESS = '[Users] Remove User Success';
const REMOVE_USER_FAIL = '[Users] Remove User Fail';
const UPDATE_USER = '[Users] Update User';
const UPDATE_USER_SUCCESS = '[Users] Update User Success';
const UPDATE_USER_FAIL = '[Users] Update User Fail';

const SELECT_USER = '[Users] Select User';
const SELECT_USER_BY_ID = '[Users] Select User By Id';

const USER_ERROR_EVENT_TRIGGERED = '[Users] User [error] event triggered';
const USER_SUCCESS_EVENT_TRIGGERED =
  '[Users] User [success] event triggered';
const USER_WARNING_EVENT_TRIGGERED =
  '[Users] User [warning] event triggered';
const USER_INFO_EVENT_TRIGGERED = '[Users] User [info] event triggered';

export const LoadUsers = createAction(LOAD_USERS);
export const LoadUsersSuccess = createAction(
  LOAD_USERS_SUCCESS,
  props<{ users: IUser[] }>()
);
export const LoadUsersFail = createAction(
  LOAD_USERS_FAIL,
  props<{ err?: any }>()
);

export const AddUser = createAction(
  ADD_USER,
  props<{ user: IUser }>()
);
export const AddUserSuccess = createAction(
  ADD_USER_SUCCESS,
  props<{ user: IUser }>()
);
export const AddUserFail = createAction(
  ADD_USER_FAIL,
  props<{ err?: any }>()
);

export const UpdateUser = createAction(
  UPDATE_USER,
  props<{ user: IUser }>()
);
export const UpdateUserSuccess = createAction(
  UPDATE_USER_SUCCESS,
  props<{ user: Update<IUser> | IUser }>()
);
export const UpdateUserFail = createAction(
  UPDATE_USER_FAIL,
  props<{ err: any }>()
);

export const RemoveUser = createAction(
  REMOVE_USER,
  props<{ user: IUser }>()
);
export const RemoveUserSuccess = createAction(
  REMOVE_USER_SUCCESS,
  props<{ user: IUser }>()
);
export const RemoveUserFail = createAction(
  REMOVE_USER_FAIL,
  props<{ err: any }>()
);

export const SelectUser = createAction(
  SELECT_USER,
  props<{ user: IUser }>()
);

export const SelectUserById = createAction(
  SELECT_USER_BY_ID,
  props<{ id: string }>()
);

export const UserErrorEventTriggered = createAction(
  USER_ERROR_EVENT_TRIGGERED
);
export const UserSuccessEventTriggered = createAction(
  USER_SUCCESS_EVENT_TRIGGERED
);
export const UserWarningEventTriggered = createAction(
  USER_WARNING_EVENT_TRIGGERED
);
export const UserInfoEventTriggered = createAction(
  USER_INFO_EVENT_TRIGGERED
);
