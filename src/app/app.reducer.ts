import {
  Reducer,
  combineReducers
} from 'redux';

import {
  UsersState,
  UserReducer
} from './user/user.reducer';

export * from './user/user.reducer';

import {
  ThreadsState,
  ThreadsReducer
} from './thread/thread.reducer';

export * from './thread/thread.reducer';

export interface AppState {
  users: UsersState;
  threads: ThreadsState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  users: UserReducer,
  threads: ThreadsReducer
});

export default rootReducer;
