import { EntityState } from '@ngrx/entity';

export interface IUser {
  id?: string;
  username?: string;
  first_name: string;
  last_name: string;
  password: string;
  photo?: string;
  email?: string;
}

export interface UserState extends EntityState<IUser> {
  entities: { [id: string]: IUser };
  loaded: boolean;
  loading: boolean;
  currentUser: IUser;
  currentUserId: string;
}
