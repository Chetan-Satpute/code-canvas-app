import {useState} from 'react';
import {useMutation} from '@tanstack/react-query';
import {
  PostFunctionExecutionVariables,
  postFunctionExecution,
} from '../api/function';

function useExecuteFunction() {
  const [submitInProgress, setSubmitInProgress] = useState(false);

  const {mutate, isPending} = useMutation({
    mutationKey: ['function-execution'],
    mutationFn: postFunctionExecution,
    onSettled: () => setSubmitInProgress(false),
  });

  const executeFunction = (variables: PostFunctionExecutionVariables) => {
    setSubmitInProgress(true);
    mutate(variables);
  };

  return {executeFunction, isLoading: submitInProgress || isPending};
}

export default useExecuteFunction;
