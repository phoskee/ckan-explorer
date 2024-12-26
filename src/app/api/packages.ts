import { apiGet } from './base';
import { PackageListParams, PackageSearchParams, PackageShowParams } from '@/types/ckan';


export async function searchPackages(query: string = "", page: number = 1) {
  const params: PackageSearchParams = {
    q: query,
    start: (page - 1) * 10,
    rows: 10
  };
  
  const response = await apiGet('/action/package_search', params);
  
  if (!response.success || !response.result) {
    return {
      packages: [],
      total: 0
    };
  }

  return {
    // packages: (response.result.results || []).map((pkg: any) => packageSchema.parse(pkg)),
    packages: response.result.results || [],
    total: response.result.count || 0,
  };
}

export async function getPackageList(params?: PackageListParams) {
  return apiGet('/action/package_list', params);
}

export async function getPackageShow(params: PackageShowParams) {
  return apiGet('/action/package_show', params);
}

export async function getCurrentPackageListWithResources(params?: PackageListParams) {
  return apiGet('/action/current_package_list_with_resources', params);
}