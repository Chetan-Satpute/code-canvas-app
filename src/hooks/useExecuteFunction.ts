import {useNavigate} from 'react-router-dom';
import {useMutation} from '@tanstack/react-query';
import {
  PostFunctionExecutionVariables,
  postFunctionExecution,
} from '../api/function';
import {useAppDispatch} from '../redux/hooks';
import {executeFunctionSubmitting, loadStructure} from '../redux/canvas/slice';

function useExecuteFunction(structureId: string, functionId: string) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {mutate, isPending} = useMutation({
    mutationKey: ['function-execution'],
    mutationFn: postFunctionExecution,
    onSuccess: (data, variables) => {
      const {animated} = variables;
      dispatch(loadStructure(data));

      if (animated) navigate(`/${structureId}/${functionId}`);
    },
    onSettled: () => dispatch(executeFunctionSubmitting(false)),
  });

  const executeFunction = (variables: PostFunctionExecutionVariables) => {
    dispatch(executeFunctionSubmitting(true));
    mutate(variables);
  };

  return {executeFunction, isPending};
}

export default useExecuteFunction;
