import { CONSTANTS } from './constants';
import { MemberState} from './models';

export interface State {
  members: MemberState[]
};

export const membersReducer = (state: MemberState[] = [], action) => {
  switch (action.type) {
    case CONSTANTS.USER_LIST:
      return fetchMembersCompleted(state, action.payload);
  }
  return state;
};

const fetchMembersCompleted = (state: MemberState[], payload: MemberState[]) => {
  return payload;
};
