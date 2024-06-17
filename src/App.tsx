import {RouterProvider} from 'react-router-dom';
import router from './lib/router';

import '@fontsource/salsa';
import '@fontsource/kalam';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
