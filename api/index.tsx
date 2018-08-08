import { Member } from '../redux-store/models';
import { members } from './userData';
let mockMembers = members;

const fetchMembers = (): Promise<Member[]> => {
  
  return Promise.resolve(mockMembers);
};


export const memberAPI = {
  fetchMembers
};