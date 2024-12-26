
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_CKAN_API_BASE_URL;

interface Response {
  help: string;
  success: boolean;
  result: any;
}

interface PackageListParams {
    limit?: number;
    offset?: number;
}

/**
 * Get a list of packages with optional parameters
 * @param params - Optional parameters for package listing
 * @param params.limit - Maximum number of packages to return
 * @param params.offset - Number of packages to skip
 * @returns Promise with API response
 */
export async function getPackageList(params?: PackageListParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}package_list`, {
        params: {
            ...params
        }
    });
    return response.data;
}

/**
 * Get a list of packages with their resources
 * @param params - Optional parameters for package listing
 * @param params.limit - Maximum number of packages to return
 * @param params.offset - Number of packages to skip
 * @returns Promise with API response
 */
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

/**
 * Get a list of members for a group or organization
 * @param params - Parameters for member listing
 * @param params.id - ID of the group or organization
 * @param params.object_type - Type of object to return
 * @param params.capacity - Role/capacity of the member
 * @returns Promise with API response
 */
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

/**
 * Get a list of collaborators for a package
 * @param id - ID of the package
 * @param capacity - Optional role/capacity of the collaborator
 * @returns Promise with array of collaborator information
 */
export async function getPackageCollaboratorList(id: string, capacity?: string): Promise<CollaboratorListResponse[]> {
    const response = await axios.get(`${baseUrl}package_collaborator_list`, {
        params: {
            id,
            ...(capacity !== undefined && { capacity })
        }
    });
    return response.data;
}

/**
 * Get list of collaborators for a user
 * @param id - User identifier
 * @param capacity - Optional role/capacity of the collaborator
 * @returns Promise with array of collaborator information
 */
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

/**
 * Get a list of groups with optional filtering
 * @param params - Optional parameters for group listing
 * @param params.type - Type of groups to return
 * @param params.order_by - Field to sort by
 * @param params.sort - Sort direction
 * @param params.limit - Maximum number of groups to return
 * @param params.offset - Number of groups to skip
 * @param params.groups - List of group names
 * @param params.all_fields - Include all fields in response
 * @param params.include_dataset_count - Include count of datasets
 * @param params.include_extras - Include extra fields
 * @param params.include_tags - Include tags
 * @param params.include_groups - Include sub-groups
 * @param params.include_users - Include users
 * @returns Promise with API response
 */
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

/**
 * Get list of organizations with optional filtering
 * @param params - Optional parameters for organization listing
 * @param params.organizations - List of organization names
 * @param params.order_by - Field to sort by
 * @param params.sort - Sort direction
 * @param params.limit - Maximum number of organizations to return
 * @param params.offset - Number of organizations to skip
 * @param params.all_fields - Include all fields in response
 * @returns Promise with API response
 */
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

/**
 * Get organizations for current user
 * @param params - Optional parameters
 * @param params.id - User identifier
 * @param params.permission - Permission to filter by
 * @param params.include_dataset_count - Include dataset count in response
 * @returns Promise with API response
 */
export async function getOrganizationListForUser(params?: OrganizationListForUserParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}organization_list_for_user`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// License List function
/**
 * Get list of available licenses
 * @returns Promise with API response containing license list
 */
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

/**
 * Get list of tags
 * @param params - Optional parameters for tag listing
 * @param params.query - Search query string
 * @param params.vocabulary_id - Filter by vocabulary
 * @param params.all_fields - Include all fields in response
 * @returns Promise with API response
 */
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

/**
 * Get user information
 * @param params - Parameters for user show
 * @param params.id - User identifier
 * @param params.include_datasets - Include user's datasets
 * @param params.include_num_followers - Include number of followers
 * @param params.include_password_hash - Include password hash
 * @param params.include_plugin_extras - Include plugin extra data
 * @returns Promise with API response
 */
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

/**
 * Get list of package relationships
 * @param params - Parameters for relationship listing
 * @param params.id - Package identifier
 * @param params.id2 - Related package identifier
 * @param params.rel - Type of relationship
 * @returns Promise with API response
 */
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
    return response.data
}

// Organization Show functions
interface OrganizationShowParams extends GroupShowParams {}

/**
 * Get organization information with optional includes
 * @param params - Parameters for organization show
 * @param params.id - Organization identifier
 * @param params.include_datasets - Include datasets in response
 * @param params.include_dataset_count - Include dataset count
 * @param params.include_extras - Include extra fields
 * @param params.include_users - Include users
 * @param params.include_groups - Include sub-groups
 * @param params.include_tags - Include tags
 * @param params.include_followers - Include followers count
 * @returns Promise with API response
 */
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

/**
 * Get list of packages for a group
 * @param params - Parameters for group package listing
 * @param params.id - Group identifier
 * @param params.limit - Maximum number of packages to return
 * @returns Promise with API response
 */
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

/**
 * Get tag information
 * @param params - Parameters for tag show
 * @param params.id - Tag identifier
 * @param params.vocabulary_id - Optional vocabulary identifier
 * @param params.include_datasets - Include datasets with this tag
 * @returns Promise with API response
 */
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

/**
 * Get user information
 * @param params - Parameters for user show
 * @param params.id - User identifier
 * @param params.include_datasets - Include user's datasets
 * @param params.include_num_followers - Include number of followers
 * @param params.include_password_hash - Include password hash
 * @param params.include_plugin_extras - Include plugin extra data
 * @returns Promise with API response
 */
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

/**
 * Get autocomplete suggestions for packages
 * @param params - Autocomplete parameters
 * @param params.q - Search query string
 * @param params.limit - Maximum number of suggestions
 * @returns Promise with API response containing suggestions
 */
export async function getPackageAutocomplete(params: AutocompleteParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}package_autocomplete`, {
        params: {
            ...params
        }
    });
    return response.data;
}

/**
 * Get autocomplete suggestions for formats
 * @param params - Autocomplete parameters
 * @param params.q - Search query string
 * @param params.limit - Maximum number of suggestions
 * @returns Promise with API response containing suggestions
 */
export async function getFormatAutocomplete(params: AutocompleteParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}format_autocomplete`, {
        params: {
            ...params
        }
    });
    return response.data;
}

/**
 * Get autocomplete suggestions for users
 * @param params - Autocomplete parameters
 * @param params.q - Search query string
 * @param params.limit - Maximum number of suggestions
 * @returns Promise with API response containing suggestions
 */
export async function getUserAutocomplete(params: AutocompleteParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}user_autocomplete`, {
        params: {
            ...params
        }
    });
    return response.data;
}

/**
 * Get autocomplete suggestions for groups
 * @param params - Autocomplete parameters
 * @param params.q - Search query string
 * @param params.limit - Maximum number of suggestions
 * @returns Promise with API response containing suggestions
 */
export async function getGroupAutocomplete(params: AutocompleteParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}group_autocomplete`, {
        params: {
            ...params
        }
    });
    return response.data;
}

/**
 * Get autocomplete suggestions for organizations
 * @param params - Autocomplete parameters
 * @param params.q - Search query string
 * @param params.limit - Maximum number of suggestions
 * @returns Promise with API response containing suggestions
 */
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

/**
 * Search for packages with various filters
 * @param params - Optional search parameters
 * @param params.q - Search query string
 * @param params.fq - Filter query string
 * @param params.fq_list - List of filter queries
 * @param params.sort - Sort field and direction
 * @param params.rows - Number of results to return
 * @param params.start - Starting index
 * @param params.facet - Enable faceted results
 * @param params.facet.mincount - Minimum count for facets
 * @param params.facet.limit - Maximum number of facets
 * @param params.facet.field - Fields to facet on
 * @param params.include_drafts - Include draft packages
 * @param params.include_deleted - Include deleted packages
 * @param params.include_private - Include private packages
 * @param params.use_default_schema - Use default schema
 * @returns Promise with API response
 */
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

/**
 * Get task status information
 * @param params - Task status parameters
 * @param params.id - Task identifier
 * @param params.entity_id - Entity identifier
 * @param params.task_type - Type of task
 * @param params.key - Task key
 * @returns Promise with API response
 */
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

/**
 * Get term translations
 * @param params - Translation parameters
 * @param params.terms - Array of terms to translate
 * @param params.lang_codes - Array of language codes
 * @returns Promise with API response containing translations
 */
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

/**
 * Get site user information
 * @param params - Optional parameters
 * @param params.defer_commit - Whether to defer commit
 * @returns Promise with API response containing site user information
 */
export async function getSiteUser(params?: GetSiteUserParams): Promise<Response> {
    const response = await axios.get(`${baseUrl}get_site_user`, {
        params: {
            ...params
        }
    });
    return response.data;
}

// Status Show function
/**
 * Get site status information
 * @returns Promise with API response containing site status
 */
export async function getStatusShow(): Promise<Response> {
    const response = await axios.get(`${baseUrl}status_show`);
    return response.data;
}

// Vocabulary functions
/**
 * Get list of vocabularies
 * @returns Promise with API response containing vocabulary list
 */
export async function getVocabularyList(): Promise<Response> {
    const response = await axios.get(`${baseUrl}vocabulary_list`);
    return response.data;
}

/**
 * Get vocabulary information
 * @param id - Vocabulary identifier
 * @returns Promise with API response
 */
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


    
// Help functions
interface HelpParams {
    url: string;
}

/**
 * Fetch data from a specific URL
 * @param params - Request parameters
 * @param params.url - The URL to fetch from
 * @returns Promise with API response
 */
export async function getHelp(params: HelpParams): Promise<Response> {
    const response = await axios.get(params.url);
    return response.data;
}

interface CountResult {
    organizations: {count: number, name: string};
    groups: {count: number, name: string};
    packages: {count: number, name: string};
    tags: {count: number, name: string};
}

export async function getCount(): Promise<CountResult> {
    const result = {
        organizations: {count: 0, name: 'Organizations'},
        groups: {count: 0, name: 'Groups'},
        packages: {count: 0, name: 'Packages'},
        tags: {count: 0, name: 'Tags'},
    };
    
    const response = await axios.get(`${baseUrl}package_list`);
    result.packages.count = response.data.result.length;
    const response2 = await axios.get(`${baseUrl}organization_list`);
    result.organizations.count = response2.data.result.length;
    const response3 = await axios.get(`${baseUrl}group_list`);
    result.groups.count = response3.data.result.length;
    const response4 = await axios.get(`${baseUrl}tag_list`);
    result.tags.count = response4.data.result.length;

    return result;
}
