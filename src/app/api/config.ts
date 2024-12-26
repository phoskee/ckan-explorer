import { apiGet } from './base';

export async function getConfigOptionShow(key: string) {
  return apiGet('/action/config_option_show', { key });
}

export async function getConfigOptionList() {
  return apiGet('/action/config_option_list');
}

export async function getStatusShow() {
  return apiGet('/action/status_show');
}