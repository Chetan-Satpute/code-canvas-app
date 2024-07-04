import {API_URL} from '../constants/env';
import {Step} from '../lib/types';

export interface GetStepsResponseData {
  steps: Step[];
  nextPage?: number;
}

export async function getSteps(runId: string, pageNumber: number) {
  if (runId === '') return {steps: []};

  const response = await fetch(API_URL + `/steps/${runId}?page=${pageNumber}`);
  const responseData = await response.json();

  return responseData as GetStepsResponseData;
}
