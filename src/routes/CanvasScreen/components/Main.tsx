import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Canvas from './Canvas';
import {useStructure} from '../hooks/useStructure';
import {loadStructure} from '../../../redux/canvas/slice';
import {useAppDispatch} from '../../../redux/hooks';
import CanvasScreenLoading from '../Loading';
import CanvasScreenError from '../Error';

function Main() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const structureId = params.structureId!;

  const {structureData, isLoading, isError} = useStructure(structureId);

  useEffect(() => {
    if (structureData) dispatch(loadStructure(structureData));
  }, [structureData, dispatch]);

  if (isLoading) return <CanvasScreenLoading />;
  if (!structureData || isError) return <CanvasScreenError />;

  return <Canvas />;
}

export default Main;
