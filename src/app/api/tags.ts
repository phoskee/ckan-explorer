import { apiGet } from './base';
import { TagSearchParams, TagShowParams } from '@/types/ckan';

export async function searchTags(params: TagSearchParams) {
  return apiGet('/action/tag_search', params);
}

export async function getTagShow(params: TagShowParams) {
  return apiGet('/action/tag_show', params);
}

export async function getTagList() {
  return apiGet('/action/tag_list');
}