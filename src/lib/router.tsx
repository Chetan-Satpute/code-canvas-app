import {createBrowserRouter} from 'react-router-dom';
import HomeScreen from '../routes/HomeScreen';
import CanvasScreen from '../routes/CanvasScreen';
import AlgorithmPanel from '../routes/CanvasScreen/AlgorithmPanel';
import StructurePanel from '../routes/CanvasScreen/StructurePanel';
import ErrorScreen from '../routes/ErrorScreen';

const router = createBrowserRouter([
  {
    path: 'something-went-wrong',
    element: <ErrorScreen />,
  },
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
