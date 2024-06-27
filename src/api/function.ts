import {API_URL} from '../constants/env';
import {Frame, FunctionArgument, FunctionSection} from '../lib/types';

export interface GetFunctionSectionsResponseData {
  functionSections: FunctionSection[];
}

export async function getFunctionSections(structureName: string) {
  const response = await fetch(API_URL + '/function/' + structureName);
  const responseData = await response.json();

  return responseData as GetFunctionSectionsResponseData;
}

export interface PostFunctionExecutionResponseData {
  frame: Frame;
  data: string;
}

export interface PostFunctionExecutionVariables {
  structureName: string;
  functionId: string;
  structureData: string;
  args: Record<string, FunctionArgument>;
}

export async function postFunctionExecution(
  variables: PostFunctionExecutionVariables
) {
  const {structureName, functionId, structureData, args} = variables;

  const response = await fetch(
    `${API_URL}/function/${structureName}/${functionId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        structureData: structureData,
        arguments: args,
      }),
    }
  );

  const responseData = await response.json();
  return responseData as PostFunctionExecutionResponseData;
}
