import { TranslationInterface } from 'interfaces/translation';
import { UrlInterface } from 'interfaces/url';
import { CategoryInterface } from 'interfaces/category';
import { GetQueryInterface } from 'interfaces';

export interface NewsInterface {
  id?: string;
  title: string;
  summary: string;
  url_id: string;
  category_id: string;
  created_at?: any;
  updated_at?: any;
  translation?: TranslationInterface[];
  url?: UrlInterface;
  category?: CategoryInterface;
  _count?: {
    translation?: number;
  };
}

export interface NewsGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  summary?: string;
  url_id?: string;
  category_id?: string;
}
