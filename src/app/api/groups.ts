import { apiGet } from './base';


import { GroupListParams, GroupShowParams} from '@/types/ckan';

export async function listGroups(params?: GroupListParams) {
  return apiGet('/action/group_list', params);
}

export async function getGroupShow(params: GroupShowParams) {
  return apiGet('/action/group_show', params);
}

export async function getGroupFollowerCount(id: string) {
  return apiGet('/action/group_follower_count', { id });
}

export async function getGroupFollowerList(id: string) {
  return apiGet('/action/group_follower_list', { id });
}