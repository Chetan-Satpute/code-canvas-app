import {createBrowserRouter} from 'react-router-dom';
import HomeScreen from '../routes/HomeScreen';
import CanvasScreen from '../routes/CanvasScreen';
import AlgorithmPanel from '../routes/CanvasScreen/AlgorithmPanel';
import StructurePanel from '../routes/CanvasScreen/StructurePanel';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
  },
  {
    path: '/:structureId',
    element: <CanvasScreen />,
    children: [
      {
        path: '',
        element: <StructurePanel />,
      },
      {
        path: ':algorithmId',
        element: <AlgorithmPanel />,
      },
    ],
  },
]);

export default router;
