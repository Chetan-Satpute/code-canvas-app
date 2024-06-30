import {useEffect} from 'react';
import {Outlet, useParams} from 'react-router-dom';
import Header from './components/Header';
import Canvas from './components/Canvas';
import {useStructure} from './hooks/useStructure';
import CanvasScreenLoading from './Loading';
import CanvasScreenError from './Error';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {loadStructure} from '../../redux/canvas/slice';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';

function CanvasScreen() {
  const params = useParams();
  const dispatch = useAppDispatch();

  const steps = useAppSelector(state => state.canvas.steps);
  const currentStepIndex = useAppSelector(
    state => state.canvas.currentStepIndex
  );

  const structureFrame = useAppSelector(state => state.canvas.structureFrame);
  const structureId = params.structureId!;

  const {structureData, isLoading, isError} = useStructure(structureId);

  useEffect(() => {
    if (structureData) dispatch(loadStructure(structureData));
  }, [structureData, dispatch]);

  if (isLoading) return <CanvasScreenLoading />;
  if (!structureData || isError) return <CanvasScreenError />;

  const currentStep = steps[currentStepIndex];
  const frames = currentStep ? currentStep.frames : [structureFrame];

  return (
    <div className="flex h-screen w-screen flex-col bg-surface lg:flex-row">
      <div className="flex h-1/2 w-full flex-col lg:h-full lg:w-3/5">
        <Header />
        <Canvas frames={frames} />
      </div>
      <div className="flex h-1/2 w-full lg:h-full lg:w-2/5">
        <Outlet />
      </div>
    </div>
  );
}

export default CanvasScreen;
