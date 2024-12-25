export interface Response {
    help: string;
    success: boolean;
    result: any;
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
  display_name: string;
  id: string;
  name: string;
  state: string;
  vocabulary_id: any;
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

export interface Tag {
  display_name: string;
  id: string;
  name: string;
  state: string;
  vocabulary_id: any;
}