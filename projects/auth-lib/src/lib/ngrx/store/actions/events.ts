import { Action } from '@ngrx/store';

export function triggerEvent(action: Action) {
  return { type: action.type };
}
