import { CONSTANTS } from './constants';
import { Member } from './models';
import { memberAPI } from '../api/';


export const fetchMembersAction = () => (dispatch) => {

  memberAPI.fetchMembers()
    .then((members) => {
      dispatch(fetchMembersCompleted(members));
    });
};

const fetchMembersCompleted = (members: Member[]) => ({
  type: CONSTANTS.USER_LIST,
  payload: members,
});
