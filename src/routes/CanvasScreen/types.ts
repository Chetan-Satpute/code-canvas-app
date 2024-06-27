import {PostFunctionExecutionVariables} from '../../api/function';

export interface CanvasScreenOutletContext {
  executeFunction: (variables: PostFunctionExecutionVariables) => void;
  isExecutionFunctionSubmitting: boolean;
}
