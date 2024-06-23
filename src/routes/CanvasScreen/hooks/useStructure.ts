import {useQuery} from '@tanstack/react-query';
import {getStructure} from '../../../api/structure';

export function useStructure(structureName: string) {
  const {data, isLoading} = useQuery({
    queryKey: ['random-structure', structureName],
    queryFn: () => getStructure(structureName),
  });

  return {structureData: data, isLoading};
}
