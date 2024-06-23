import {Outlet} from 'react-router-dom';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';
import Header from './components/Header';
import Canvas from './components/Canvas';
import {useStructure} from './hooks/useStructure';

function CanvasScreen() {
  const {structureData, isLoading} = useStructure('array');

  if (isLoading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  if (!structureData) {
    return <p>Fetch error...</p>;
  }

  const frames = [structureData.frame];

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
