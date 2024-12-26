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

export async function getDatasetCount() {
  return apiGet('/action/package_search', { rows: 0 });
}

export async function getGroupCount() {
  return apiGet('/action/group_list', { all_fields: false });
}

export async function getOrganizationCount() {
  return apiGet('/action/organization_list', { all_fields: false });
}

export async function getSiteStats() {
  return apiGet('/action/site_read');
}

export async function getGroupsDetails() {
  return apiGet('/action/group_list', { 
    all_fields: true,
    include_dataset_count: true,
    include_extras: true,
    include_tags: true,
    include_groups: true,
    include_users: true
  });
}