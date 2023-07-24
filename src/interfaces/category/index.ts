import { NewsInterface } from 'interfaces/news';
import { UserPreferenceInterface } from 'interfaces/user-preference';
import { GetQueryInterface } from 'interfaces';

export interface CategoryInterface {
  id?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  news?: NewsInterface[];
  user_preference?: UserPreferenceInterface[];

  _count?: {
    news?: number;
    user_preference?: number;
  };
}

export interface CategoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
}
