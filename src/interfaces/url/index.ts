import { NewsInterface } from 'interfaces/news';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface UrlInterface {
  id?: string;
  url: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  news?: NewsInterface[];
  organization?: OrganizationInterface;
  _count?: {
    news?: number;
  };
}

export interface UrlGetQueryInterface extends GetQueryInterface {
  id?: string;
  url?: string;
  organization_id?: string;
}
