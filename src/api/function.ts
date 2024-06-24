import {API_URL} from '../constants/env';
import {FunctionSection} from '../lib/types';

export interface GetFunctionSectionsResponseData {
  functionSections: FunctionSection[];
}

export async function getFunctionSections(structureName: string) {
  const response = await fetch(API_URL + '/function/' + structureName);
  const responseData = await response.json();

  return responseData as GetFunctionSectionsResponseData;
}
