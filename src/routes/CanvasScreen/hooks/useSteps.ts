import {useInfiniteQuery} from '@tanstack/react-query';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {getSteps} from '../../../api/step';
import {Step} from '../../../lib/types';
import {useEffect} from 'react';
import {setSteps, setStepsFetching} from '../../../redux/canvas/slice';

function useSteps() {
  const runId = useAppSelector(state => state.canvas.runId);
  const dispatch = useAppDispatch();

  const {data, hasNextPage, fetchNextPage, isFetching} = useInfiniteQuery({
    queryKey: ['steps', runId],
    queryFn: ({pageParam}: {pageParam: number}) => getSteps(runId, pageParam),
    initialPageParam: 0,
    getNextPageParam: lastPage => lastPage.nextPage,
  });

  useEffect(() => {
    if (isFetching) {
      dispatch(setStepsFetching(true));
    }

    if (!isFetching && hasNextPage) {
      fetchNextPage();
    } else if (!isFetching && !hasNextPage) {
      dispatch(setStepsFetching(false));
    }
  }, [isFetching, hasNextPage, fetchNextPage, dispatch]);

  useEffect(() => {
    const pages = data?.pages || [];

    const steps = pages.reduce((acc, obj) => {
      for (const step of obj.steps) acc.push(step);
      return acc;
    }, [] as Step[]);

    dispatch(setSteps(steps));
  }, [data, dispatch]);
}

export default useSteps;
