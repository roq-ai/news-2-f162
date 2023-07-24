interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Owner', 'Editor', 'Translator'],
  tenantName: 'Organization',
  applicationName: 'News 2',
  addOns: ['notifications', 'chat'],
};
