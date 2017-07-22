import {
  Reducer,
  combineReducers
} from 'redux';

export interface AppState {
  users: string;
  threads: string;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  // users
  // threads
});

export default rootReducer;
