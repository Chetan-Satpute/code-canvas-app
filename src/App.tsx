import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router-dom';
import {QueryClientProvider} from '@tanstack/react-query';
import ErrorBoundary from './components/ErrorBoundry';
import queryClient from './lib/queryClient';
import router from './lib/router';
import store from './redux/store';

import '@fontsource/salsa';
import '@fontsource/kalam';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
