import {createBrowserRouter} from 'react-router-dom';
import HomeScreen from '../routes/HomeScreen';
import CanvasScreen from '../routes/CanvasScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
  },
  {
    path: '/canvas',
    element: <CanvasScreen />,
  },
]);

export default router;
