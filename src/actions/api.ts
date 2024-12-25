import axios from "axios";
const baseUrl = process.env.CKAN_API_BASE_URL;

interface Response {
  help: string;
  success: boolean;
  result: any;
}

interface PackageListParams {
    limit?: number;
    offset?: number;
}

export async function getPackageList(params?: PackageListParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}package_list`, {
        params: {
            ...params
        }
    });
    return response.data;
}

export async function getCurrentPackageListWithResources(params?: PackageListParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}current_package_list_with_resources`, {
        params: {
            ...params
        }
    });
    return response.data;
}

interface MemberListParams {
    id: string;
    object_type?: string;
    capacity?: string;
}

export async function getMemberList(params: MemberListParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}member_list`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// Package Collaborator functions
interface CollaboratorListResponse {
    package_id: string;
    user_id: string;
    capacity: string;
    modified: string;
}

export async function getPackageCollaboratorList(id: string, capacity?: string): Promise<CollaboratorListResponse[]> {
    const response = await axios.get(`${baseUrl}package_collaborator_list`, {
        params: {
            id,
            ...(capacity !== undefined && { capacity })
        }
    });
    return response.data;
}

export async function getPackageCollaboratorListForUser(id: string, capacity?: string): Promise<CollaboratorListResponse[]> {
    const response = await axios.get(`${baseUrl}package_collaborator_list_for_user`, {
        params: {
            id,
            ...(capacity !== undefined && { capacity })
        }
    });
    return response.data;
}

// Group List functions
interface GroupListParams {
    type?: string;
    order_by?: string;
    sort?: string;
    limit?: number;
    offset?: number;
    groups?: string[];
    all_fields?: boolean;
    include_dataset_count?: boolean;
    include_extras?: boolean;
    include_tags?: boolean;
    include_groups?: boolean;
    include_users?: boolean;
}

export async function getGroupList(params?: GroupListParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}group_list`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// Organization List functions
interface OrganizationListParams extends GroupListParams {
    organizations?: string[];
}

export async function getOrganizationList(params?: OrganizationListParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}organization_list`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// Group List Authz function
interface GroupListAuthzParams {
    available_only?: boolean;
    am_member?: boolean;
}

export async function getGroupListAuthz(params?: GroupListAuthzParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}group_list_authz`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// Organization List for User function
interface OrganizationListForUserParams {
    id?: string;
    permission?: string;
    include_dataset_count?: boolean;
}

export async function getOrganizationListForUser(params?: OrganizationListForUserParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}organization_list_for_user`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// License List function
export async function getLicenseList(): Promise<Response> {
    const response = await axios.get(`${baseUrl}license_list`);
    return response.data;
}

// Tag List functions
interface TagListParams {
    query?: string;
    vocabulary_id?: string;
    all_fields?: boolean;
}

export async function getTagList(params?: TagListParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}tag_list`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// User List functions
interface UserListParams {
    q?: string;
    email?: string;
    order_by?: string;
    all_fields?: boolean;
    include_site_user?: boolean;
}

export async function getUserList(params?: UserListParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}user_list`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// Package Relationships List functions
interface PackageRelationshipsParams {
    id: string;
    id2?: string;
    rel?: string;
}

export async function getPackageRelationshipsList(params: PackageRelationshipsParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}package_relationships_list`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// Package Show functions
interface PackageShowParams {
    id: string;
    use_default_schema?: boolean;
    include_plugin_data?: boolean;
}

export async function getPackageShow(params: PackageShowParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}package_show`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// Resource functions
export async function getResourceShow(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}resource_show`, {
        params: { id }
    });
    return response.data;
}

export async function getResourceViewShow(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}resource_view_show`, {
        params: { id }
    });
    return response.data;
}

export async function getResourceViewList(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}resource_view_list`, {
        params: { id }
    });
    return response.data;
}

// Group Show functions
interface GroupShowParams {
    id: string;
    include_datasets?: boolean;
    include_dataset_count?: boolean;
    include_extras?: boolean;
    include_users?: boolean;
    include_groups?: boolean;
    include_tags?: boolean;
    include_followers?: boolean;
}

export async function getGroupShow(params: GroupShowParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}group_show`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// Organization Show functions
interface OrganizationShowParams extends GroupShowParams {}

export async function getOrganizationShow(params: OrganizationShowParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}organization_show`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// Group Package Show functions
interface GroupPackageShowParams {
    id: string;
    limit?: number;
}

export async function getGroupPackageShow(params: GroupPackageShowParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}group_package_show`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// Tag Show functions
interface TagShowParams {
    id: string;
    vocabulary_id?: string;
    include_datasets?: boolean;
}

export async function getTagShow(params: TagShowParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}tag_show`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// User Show functions
interface UserShowParams {
    id: string;
    include_datasets?: boolean;
    include_num_followers?: boolean;
    include_password_hash?: boolean;
    include_plugin_extras?: boolean;
}

export async function getUserShow(params: UserShowParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}user_show`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// Autocomplete functions
interface AutocompleteParams {
    q: string;
    limit?: number;
}

export async function getPackageAutocomplete(params: AutocompleteParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}package_autocomplete`, {
        params: {
            ...params
        }
    });
    return response.data;
}

export async function getFormatAutocomplete(params: AutocompleteParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}format_autocomplete`, {
        params: {
            ...params
        }
    });
    return response.data;
}

export async function getUserAutocomplete(params: AutocompleteParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}user_autocomplete`, {
        params: {
            ...params
        }
    });
    return response.data;
}

export async function getGroupAutocomplete(params: AutocompleteParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}group_autocomplete`, {
        params: {
            ...params
        }
    });
    return response.data;
}

export async function getOrganizationAutocomplete(params: AutocompleteParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}organization_autocomplete`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// Package Search functions
interface PackageSearchParams {
    q?: string;
    fq?: string;
    fq_list?: string[];
    sort?: string;
    rows?: number;
    start?: number;
    facet?: boolean;
    'facet.mincount'?: number;
    'facet.limit'?: number;
    'facet.field'?: string[];
    include_drafts?: boolean;
    include_deleted?: boolean;
    include_private?: boolean;
    use_default_schema?: boolean;
}

export async function getPackageSearch(params?: PackageSearchParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}package_search`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// Resource Search functions
interface ResourceSearchParams {
    query: string | string[];
    order_by?: string;
    offset?: number;
    limit?: number;
}

export async function getResourceSearch(params: ResourceSearchParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}resource_search`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// Tag Search functions
interface TagSearchParams {
    query: string | string[];
    vocabulary_id?: string;
    limit?: number;
    offset?: number;
}

export async function getTagSearch(params: TagSearchParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}tag_search`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// Task Status functions
interface TaskStatusParams {
    id?: string;
    entity_id?: string;
    task_type?: string;
    key?: string;
}

export async function getTaskStatusShow(params: TaskStatusParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}task_status_show`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// Term Translation functions
interface TermTranslationParams {
    terms: string[];
    lang_codes?: string[];
}

export async function getTermTranslationShow(params: TermTranslationParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}term_translation_show`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// Site User function
interface GetSiteUserParams {
    defer_commit?: boolean;
}

export async function getSiteUser(params?: GetSiteUserParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}get_site_user`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// Status Show function
export async function getStatusShow(): Promise<Response> {
    const response = await axios.get(`${baseUrl}status_show`);
    return response.data;
}

// Vocabulary functions
export async function getVocabularyList(): Promise<Response> {
    const response = await axios.get(`${baseUrl}vocabulary_list`);
    return response.data;
}

export async function getVocabularyShow(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}vocabulary_show`, {
        params: { id }
    });
    return response.data;
}

// Follower Count functions
export async function getUserFollowerCount(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}user_follower_count`, {
        params: { id }
    });
    return response.data;
}

export async function getDatasetFollowerCount(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}dataset_follower_count`, {
        params: { id }
    });
    return response.data;
}

export async function getGroupFollowerCount(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}group_follower_count`, {
        params: { id }
    });
    return response.data;
}

export async function getOrganizationFollowerCount(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}organization_follower_count`, {
        params: { id }
    });
    return response.data;
}

// Follower List functions
export async function getUserFollowerList(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}user_follower_list`, {
        params: { id }
    });
    return response.data;
}

export async function getDatasetFollowerList(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}dataset_follower_list`, {
        params: { id }
    });
    return response.data;
}

export async function getGroupFollowerList(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}group_follower_list`, {
        params: { id }
    });
    return response.data;
}

export async function getOrganizationFollowerList(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}organization_follower_list`, {
        params: { id }
    });
    return response.data;
}

// Am Following functions
export async function getAmFollowingUser(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}am_following_user`, {
        params: { id }
    });
    return response.data;
}

export async function getAmFollowingDataset(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}am_following_dataset`, {
        params: { id }
    });
    return response.data;
}

export async function getAmFollowingGroup(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}am_following_group`, {
        params: { id }
    });
    return response.data;
}

// Followee Count functions
export async function getFolloweeCount(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}followee_count`, {
        params: { id }
    });
    return response.data;
}

export async function getUserFolloweeCount(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}user_followee_count`, {
        params: { id }
    });
    return response.data;
}

export async function getDatasetFolloweeCount(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}dataset_followee_count`, {
        params: { id }
    });
    return response.data;
}

export async function getGroupFolloweeCount(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}group_followee_count`, {
        params: { id }
    });
    return response.data;
}

export async function getOrganizationFolloweeCount(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}organization_followee_count`, {
        params: { id }
    });
    return response.data;
}

// Followee List functions
interface FolloweeListParams {
    id: string;
    q?: string;
}

export async function getFolloweeList(params: FolloweeListParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}followee_list`, {
        params: {
            ...params
        }
    });
    return response.data;
}

export async function getUserFolloweeList(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}user_followee_list`, {
        params: { id }
    });
    return response.data;
}

export async function getDatasetFolloweeList(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}dataset_followee_list`, {
        params: { id }
    });
    return response.data;
}

export async function getGroupFolloweeList(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}group_followee_list`, {
        params: { id }
    });
    return response.data;
}

export async function getOrganizationFolloweeList(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}organization_followee_list`, {
        params: { id }
    });
    return response.data;
}

// Member Roles List function
interface MemberRolesListParams {
    group_type?: 'group' | 'organization';
}

export async function getMemberRolesList(params?: MemberRolesListParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}member_roles_list`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// Help Show function
export async function getHelpShow(name: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}help_show`, {
        params: { name }
    });
    return response.data;
}

// Config Option functions
export async function getConfigOptionShow(key: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}config_option_show`, {
        params: { key }
    });
    return response.data;
}

export async function getConfigOptionList(): Promise<Response> {
    const response = await axios.get(`${baseUrl}config_option_list`);
    return response.data;
}

// Job functions
interface JobListParams {
    queues?: string[];
}

export async function getJobList(params?: JobListParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}job_list`, {
        params: {
            ...params
        }
    });
    return response.data;
}

export async function getJobShow(id: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}job_show`, {
        params: { id }
    });
    return response.data;
}

// API Token List function
export async function getApiTokenList(userId: string): Promise<Response> {
    const response = await axios.get(`${baseUrl}api_token_list`, {
        params: { user_id: userId }
    });
    return response.data;
}
