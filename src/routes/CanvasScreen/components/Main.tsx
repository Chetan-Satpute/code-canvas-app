import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Canvas from './Canvas';
import {useStructure} from '../hooks/useStructure';
import {loadStructure} from '../../../redux/canvas/slice';
import {useAppDispatch} from '../../../redux/hooks';
import CanvasLoading from './CanvasLoading';
import FetchError from '../../../components/FetchError';

function Main() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const structureId = params.structureId!;

  const {structureData, isLoading, isError, refetch} =
    useStructure(structureId);

  useEffect(() => {
    if (structureData) dispatch(loadStructure(structureData));
  }, [structureData, dispatch]);

  if (isLoading) return <CanvasLoading />;
  if (!structureData || isError) return <FetchError retry={refetch} />;

  return <Canvas />;
}

export default Main;
