import {createBrowserRouter} from 'react-router-dom';
import HomeScreen from '../routes/HomeScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
  },
]);

export default router;
