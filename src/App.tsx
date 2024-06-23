import {RouterProvider} from 'react-router-dom';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from './lib/queryClient';
import router from './lib/router';

import '@fontsource/salsa';
import '@fontsource/kalam';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
