import {API_URL} from '../constants/env';
import {Frame, FunctionSection} from '../lib/types';

export interface GetStructureResponseData {
  frame: Frame;
  data: string;
}

export async function getStructure(structureName: string) {
  const response = await fetch(API_URL + '/structure/' + structureName);
  const responseData = await response.json();

  return responseData as GetStructureResponseData;
}

export interface GetFunctionSectionsResponseData {
  functionSections: FunctionSection[];
}

export async function getFunctionSections(structureName: string) {
  const response = await fetch(API_URL + '/function/' + structureName);
  const responseData = await response.json();

  return responseData as GetFunctionSectionsResponseData;
}
