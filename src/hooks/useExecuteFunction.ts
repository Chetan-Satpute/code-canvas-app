import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useMutation} from '@tanstack/react-query';
import {
  PostFunctionExecutionVariables,
  postFunctionExecution,
} from '../api/function';
import {useAppDispatch} from '../redux/hooks';
import {loadStructure} from '../redux/canvas/slice';

function useExecuteFunction(structureId: string, functionId: string) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [submitInProgress, setSubmitInProgress] = useState(false);

  const {mutate, isPending} = useMutation({
    mutationKey: ['function-execution'],
    mutationFn: postFunctionExecution,
    onSuccess: data => {
      dispatch(loadStructure(data));
      navigate(`/${structureId}/${functionId}`);
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
