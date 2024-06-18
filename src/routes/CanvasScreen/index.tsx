import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';
import Header from './components/Header';
import Canvas from './components/Canvas';

function CanvasScreen() {
  return (
    <div className="flex h-screen w-screen flex-col bg-surface lg:flex-row">
      <div className="flex h-1/2 w-full flex-col lg:h-full lg:w-3/5">
        <Header />
        <Canvas />
      </div>
      <div className="h-1/2 w-full bg-blue-500 lg:h-full lg:w-2/5"></div>
    </div>
  );
}

export default CanvasScreen;
