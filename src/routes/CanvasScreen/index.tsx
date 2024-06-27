import {Outlet, useParams} from 'react-router-dom';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';
import Header from './components/Header';
import Canvas from './components/Canvas';
import {useStructure} from './hooks/useStructure';
import CanvasScreenLoading from './Loading';
import CanvasScreenError from './Error';
import useExecuteFunction from '../../hooks/useExecuteFunction';

function CanvasScreen() {
  const params = useParams();
  const structureId = params.structureId!;

  const {structureData, isLoading, isError} = useStructure(structureId);
  const {executeFunction, isLoading: isExecutionFunctionSubmitting} =
    useExecuteFunction();

  if (isLoading) return <CanvasScreenLoading />;
  if (!structureData || isError) return <CanvasScreenError />;

  const frames = [structureData.frame];

  return (
    <div className="flex h-screen w-screen flex-col bg-surface lg:flex-row">
      <div className="flex h-1/2 w-full flex-col lg:h-full lg:w-3/5">
        <Header />
        <Canvas frames={frames} />
      </div>
      <div className="flex h-1/2 w-full lg:h-full lg:w-2/5">
        <Outlet context={{executeFunction, isExecutionFunctionSubmitting}} />
      </div>
    </div>
  );
}

export default CanvasScreen;
