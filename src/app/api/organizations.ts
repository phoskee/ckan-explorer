import { apiGet } from './base';
import { OrganizationListParams, OrganizationShowParams } from '@/types/ckan';


export async function listOrganizations(params?: OrganizationListParams) {
  const response = await apiGet('/action/organization_list', { 
    ...params,
    all_fields: true 
  });
  console.log(response)
  return response;
}

export async function getOrganizationShow(params: OrganizationShowParams) {
  return apiGet('/action/organization_show', params);
}

export async function getOrganizationFollowerCount(id: string) {
  return apiGet('/action/organization_follower_count', { id });
}

export async function getOrganizationFollowerList(id: string) {
  return apiGet('/action/organization_follower_list', { id });
}