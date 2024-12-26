import { CKANResponse } from '@/types/ckan';
import axios from 'axios';


const baseUrl = process.env.NEXT_PUBLIC_CKAN_API_BASE_URL || 'https://dati.gov.it/opendata/api/3';

export async function apiGet<T = any>(
  endpoint: string,
  params?: Record<string, any>
): Promise<CKANResponse & { result: T }> {
  try {
    console.debug(`${baseUrl}${endpoint}`, params);
    const response = await axios.get(`${baseUrl}${endpoint}`, { 
      params,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    
    if (!response.data.success) {
      console.error(`API Error (${endpoint}):`, response.data);
      return {
        help: response.data.help || '',
        success: false,
        result: Array.isArray(params) ? [] : null
      } as CKANResponse & { result: T };
    }
    
    return response.data;
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    return {
      help: '',
      success: false,
      result: Array.isArray(params) ? [] : null
    } as CKANResponse & { result: T };
  }
}