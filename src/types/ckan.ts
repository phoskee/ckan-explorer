// Common response type for CKAN API
export interface CKANResponse {
  help: string;
  success: boolean;
  result: any;
}

// Base interfaces
export interface PaginationParams {
  limit?: number;
  offset?: number;
}

export interface SearchParams extends PaginationParams {
  q?: string;
}

// Package related types
export interface PackageListParams extends PaginationParams {
}

export interface PackageSearchParams extends SearchParams {
  fq?: string;
  fq_list?: string[];
  sort?: string;
  rows?: number;
  start?: number;
  facet?: boolean;
  "facet.mincount"?: number;
  "facet.limit"?: number;
  "facet.field"?: string[];
  include_drafts?: boolean;
  include_deleted?: boolean;
  include_private?: boolean;
  use_default_schema?: boolean;
}

export interface PackageShowParams {
  id: string;
  use_default_schema?: boolean;
  include_plugin_data?: boolean;
}

// Organization related types
export interface OrganizationListParams extends SearchParams {
  organizations?: string[];
  order_by?: string;
  sort?: string;
  all_fields?: boolean;
  include_dataset_count?: boolean;
  include_extras?: boolean;
  include_tags?: boolean;
  include_groups?: boolean;
  include_users?: boolean;
}

export interface OrganizationShowParams {
  id: string;
  include_datasets?: boolean;
  include_dataset_count?: boolean;
  include_extras?: boolean;
  include_users?: boolean;
  include_groups?: boolean;
  include_tags?: boolean;
  include_followers?: boolean;
}

// Group related types
export interface GroupListParams extends SearchParams {
  type?: string;
  order_by?: string;
  sort?: string;
  groups?: string[];
  all_fields?: boolean;
  include_dataset_count?: boolean;
  include_extras?: boolean;
  include_tags?: boolean;
  include_groups?: boolean;
  include_users?: boolean;
}

export interface GroupShowParams extends OrganizationShowParams {}

// Resource related types
export interface ResourceSearchParams extends SearchParams {
  order_by?: string;
}

// Tag related types
export interface TagSearchParams extends SearchParams {
  vocabulary_id?: string;
}

export interface TagShowParams {
  id: string;
  vocabulary_id?: string;
  include_datasets?: boolean;
}

// User related types
export interface UserListParams extends SearchParams {
  email?: string;
  order_by?: string;
  all_fields?: boolean;
  include_site_user?: boolean;
}

export interface UserShowParams {
  id: string;
  include_datasets?: boolean;
  include_num_followers?: boolean;
  include_password_hash?: boolean;
  include_plugin_extras?: boolean;
}

export interface Package {
  author: string;
  author_email: string;
  creator_user_id: string;
  id: string;
  isopen: boolean;
  license_id: string;
  license_title: string;
  license_url: string;
  maintainer: string;
  maintainer_email: string;
  metadata_created: string;
  metadata_modified: string;
  name: string;
  notes: string;
  num_resources: number;
  num_tags: number;
  organization: any;
  owner_org: any;
  private: boolean;
  state: string;
  title: string;
  type: string;
  url: string;
  version: string;
  resources: Resource[];
  tags: Tag[];
  extras: any[];
  groups: any[];
  relationships_as_subject: any[];
  relationships_as_object: any[];
}

export interface Resource {
  cache_last_updated: any;
  cache_url: any;
  created: string;
  datastore_active: boolean;
  description: string;
  format: string;
  hash: string;
  id: string;
  last_modified?: string;
  metadata_modified: string;
  mimetype?: string;
  mimetype_inner: any;
  name: string;
  package_id: string;
  position: number;
  resource_type: any;
  size?: number;
  state: string;
  url: string;
  url_type?: string;
}

export interface Tag {
  id: string;
  name: string;
  display_name: string;
  state?: string;
  packages?: Package[];
  vocabulary_id?: string | null;
}

export interface GroupInfo {
  approval_status: string;
  created: string;
  description: string;
  display_name: string;
  id: string;
  image_display_url: string;
  image_url: string;
  is_organization: boolean;
  name: string;
  num_followers: number;
  package_count: number;
  state: string;
  title: string;
  type: string;
  packages: Package[];
  extras: any[];
  tags: any[];
  groups: any[];
}

export interface PackageInfo {
  access_rights: string;
  alternate_identifier: string;
  author: any;
  author_email: any;
  conforms_to: string;
  creator: string;
  creator_user_id: string;
  frequency: string;
  holder_identifier: string;
  holder_name: string;
  id: string;
  identifier: string;
  isopen: boolean;
  issued: string;
  language: string;
  license_id: string;
  license_title: string;
  maintainer: any;
  maintainer_email: any;
  metadata_created: string;
  metadata_modified: string;
  modified: string;
  name: string;
  notes: string;
  num_resources: number;
  num_tags: number;
  organization: Organization;
  owner_org: string;
  private: boolean;
  publisher_identifier: string;
  publisher_name: string;
  state: string;
  themes_aggregate: string;
  title: string;
  type: string;
  url: string;
  version: any;
  extras: Extra[];
  groups: Group[];
  resources: Resource[];
  tags: Tag[];
  relationships_as_subject: any[];
  relationships_as_object: any[];
  dataset_is_local: boolean;
}

export interface ResourcePackage {
  access_url: string;
  cache_last_updated: any;
  cache_url: any;
  created: string;
  description: string;
  distribution_format: string;
  distribution_ref: string;
  format: string;
  hash: string;
  id: string;
  last_modified: any;
  license: string;
  license_id: string;
  license_type: string;
  metadata_modified: string;
  mimetype: string;
  mimetype_inner: any;
  name: string;
  package_id: string;
  position: number;
  resource_type: any;
  rights: string;
  size: any;
  state: string;
  uri: string;
  url: string;
  url_type: any;
}

export interface Organization {
  id: string;
  name: string;
  title: string;
  type: string;
  description: string;
  image_url: string;
  created: string;
  is_organization: boolean;
  approval_status: string;
  state: string;
}

export interface Extra {
  key: string;
  value: string;
}

export interface Group {
  description: string;
  display_name: string;
  id: string;
  image_display_url: string;
  name: string;
  title: string;
}
