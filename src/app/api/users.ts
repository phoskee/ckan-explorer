import { apiGet } from './base';
import { UserListParams, UserShowParams } from '@/types/ckan';

export async function listUsers(params?: UserListParams) {
  return apiGet('/action/user_list', params);
}

export async function getUserShow(params: UserShowParams) {
  return apiGet('/action/user_show', params);
}

export async function getUserFollowerCount(id: string) {
  return apiGet('/action/user_follower_count', { id });
}

export async function getUserFollowerList(id: string) {
  return apiGet('/action/user_follower_list', { id });
}