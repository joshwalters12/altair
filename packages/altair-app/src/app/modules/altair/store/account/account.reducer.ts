import { AccountState } from 'altair-graphql-core/build/types/state/account.interfaces';

import * as account from '../../store/account/account.action';
import { AllActions } from '../action';

export const getInitialState = (): AccountState => {
  return {
    loggedIn: false,
    accessToken: '',
    email: '',
    firstName: '',
    lastName: '',
    teams: [],
    picture: '',
  };
};

export function accountReducer(
  state = getInitialState(),
  action: AllActions
): AccountState {
  switch (action.type) {
    case account.ACCOUNT_IS_LOGGED_IN: {
      const payload = action.payload;
      return {
        ...state,
        loggedIn: true,
        ...payload,
      };
    }
    case account.ACCOUNT_LOGGED_OUT:
      return getInitialState();
    case account.SET_TEAMS:
      return {
        ...state,
        teams: action.payload.teams,
      };
    default:
      return state;
  }
}
