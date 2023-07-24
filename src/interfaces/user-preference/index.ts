import { UserInterface } from 'interfaces/user';
import { CategoryInterface } from 'interfaces/category';
import { GetQueryInterface } from 'interfaces';

export interface UserPreferenceInterface {
  id?: string;
  user_id: string;
  category_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  category?: CategoryInterface;
  _count?: {};
}

export interface UserPreferenceGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  category_id?: string;
}
