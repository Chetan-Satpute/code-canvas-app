import {useNavigate} from 'react-router-dom';
import '@material/web/button/filled-tonal-button.js';
import FullscreenButton from '../components/FullscreenButton';

function HomeScreen() {
  const navigate = useNavigate();

  const structureNavigationHandler = (structureId: string) => {
    return () => navigate(`/${structureId}`);
  };

  return (
    <div className="flex h-screen w-screen flex-col bg-surface lg:flex-row">
      <div className="flex flex-1 flex-col items-center justify-center p-2 lg:items-start lg:pl-8">
        <h1 className="mb-4 font-salsa text-4xl text-on-surface">
          Code canvas
        </h1>
        <p className="mb-4 text-center font-kalam text-xl text-on-surface lg:text-left">
          Interactive Exploration of Algorithms & Data Structures
        </p>
        <FullscreenButton variant="long" />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-4 p-4">
        <md-filled-tonal-button
          class="text-base"
          onClick={structureNavigationHandler('array')}
        >
          Array
        </md-filled-tonal-button>
        <md-filled-tonal-button
          class="text-base"
          onClick={structureNavigationHandler('binary-search-tree')}
        >
          Binary search tree
        </md-filled-tonal-button>
        <md-filled-tonal-button
          class="text-base"
          onClick={structureNavigationHandler('linked-list')}
        >
          Linked list
        </md-filled-tonal-button>
        <md-filled-tonal-button
          class="text-base"
          onClick={structureNavigationHandler('max-heap')}
        >
          Max heap
        </md-filled-tonal-button>
      </div>
    </div>
  );
}

export default HomeScreen;
