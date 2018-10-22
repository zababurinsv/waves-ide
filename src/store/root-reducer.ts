import {combineReducers} from 'redux';
import {StateType} from 'typesafe-actions';
import {codingReducer} from './coding';
import {accountsReducer} from './accounts';
import {settingsReducer} from './settings';
import {notificationsReducer} from './notifications'

const rootReducer = combineReducers({
    coding: codingReducer,
    accounts: accountsReducer,
    settings: settingsReducer,
    snackMessage: notificationsReducer
});

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;