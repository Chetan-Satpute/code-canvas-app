import {useQuery} from '@tanstack/react-query';
import {getFunctionSections} from '../../../api/function';

function useFunctionSections(structureName: string) {
  const {data, isLoading, isError, isRefetching} = useQuery({
    queryKey: ['function-sections', structureName],
    queryFn: () => getFunctionSections(structureName),
  });

  return {
    functionSections: data?.functionSections || [],
    isLoading: isLoading || isRefetching,
    isError,
  };
}

export default useFunctionSections;
