import { apiGet } from './base';
import { ResourceSearchParams } from '@/types/ckan';

export async function searchResources(params: ResourceSearchParams) {
  return apiGet('/action/resource_search', params);
}

export async function getResourceShow(id: string) {
  return apiGet('/action/resource_show', { id });
}

export async function getResourceViewShow(id: string) {
  return apiGet('/action/resource_view_show', { id });
}

export async function getResourceViewList(id: string) {
  return apiGet('/action/resource_view_list', { id });
}