import { Accounts } from '../roles/types';

export type following = {
  _id: string;
  avatar: string;
  firstName: string;
  lastName: string;
  role: Accounts;
  following: boolean;
};

export type followingList = Array<following>;
