import {useState} from 'react';
import {useMutation} from '@tanstack/react-query';
import {
  PostFunctionExecutionVariables,
  postFunctionExecution,
} from '../api/function';
import {useAppDispatch} from '../redux/hooks';
import {loadStructure} from '../redux/canvas/slice';

function useExecuteFunction() {
  const dispatch = useAppDispatch();
  const [submitInProgress, setSubmitInProgress] = useState(false);

  const {mutate, isPending} = useMutation({
    mutationKey: ['function-execution'],
    mutationFn: postFunctionExecution,
    onSuccess: data => {
      dispatch(loadStructure(data));
    },
    onSettled: () => setSubmitInProgress(false),
  });

  const executeFunction = (variables: PostFunctionExecutionVariables) => {
    setSubmitInProgress(true);
    mutate(variables);
  };

  return {executeFunction, isLoading: submitInProgress || isPending};
}

export default useExecuteFunction;
