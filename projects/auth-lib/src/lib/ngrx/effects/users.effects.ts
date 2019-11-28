import { IUser } from '../../models';
import { UserAuthService, EventsHandlerService } from '../../services';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as fromActions from '../store/actions';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private userService: UserAuthService,
    private eventsHandlerService: EventsHandlerService
  ) {}

  LoadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.LoadUsers),
      mergeMap(() =>
        this.userService.getAll().pipe(
          map(users => fromActions.LoadUsersSuccess({ users })),
          catchError(err => of(fromActions.LoadUsersFail({ err })))
        )
      )
    )
  );

  AddUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.AddUser),
      mergeMap(({ user }) =>
        this.userService.register(user).pipe(
          map(() => fromActions.AddUserSuccess({ user })),
          catchError(err => of(fromActions.AddUserFail({ err })))
        )
      )
    )
  );

  removeUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.RemoveUser),
      mergeMap(({ user }) =>
        this.userService.removeItem(user).pipe(
          map(() => fromActions.RemoveUserSuccess({ user })),
          catchError(err => of(fromActions.RemoveUserFail({ err })))
        )
      )
    )
  );

  UpdateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.UpdateUser),
      mergeMap(({ user }) =>
        this.userService.modifyItem(user).pipe(
          map((res: IUser) => fromActions.UpdateUserSuccess({ user: res })),
          catchError(err => of(fromActions.UpdateUserFail({ err })))
        )
      )
    )
  );

  selectUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.SelectUserById),
      mergeMap(({ id }) =>
        this.userService.getById(id).pipe(map(res => fromActions.SelectUser({ user: res })))
      )
    )
  );

  error$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.AddUserFail, fromActions.UpdateUserFail, fromActions.RemoveUserFail),
      map(({ err }) => {
        const er = err.error.validationError;
        const errorResponseArray: string[] = [];

        Object.keys(er).map(item => {
          errorResponseArray.push(er[item].toString());
        });

        const errorResponse = errorResponseArray.join(' \n');

        this.eventsHandlerService.errorHappened.next(errorResponse);

        return fromActions.triggerEvent(fromActions.UserErrorEventTriggered);
      })
    )
  );

  success$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.AddUserSuccess, fromActions.UpdateUserSuccess),
      map(({ user }) => {
        this.eventsHandlerService.successHappened.next(`User saved successfully`);
        this.eventsHandlerService.goBackRequest.next(true);

        return fromActions.triggerEvent(fromActions.UserSuccessEventTriggered);
      })
    )
  );

  remove$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.RemoveUserSuccess),
      map(({ user }) => {
        this.eventsHandlerService.warningHappened.next(`User #${user.id} removed Successfully`);
        return fromActions.triggerEvent(fromActions.UserWarningEventTriggered);
      })
    )
  );
}
