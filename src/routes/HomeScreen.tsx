import '@material/web/button/filled-tonal-button';

function HomeScreen() {
  return (
    <div className="flex h-screen w-screen bg-surface">
      <div className="flex flex-1 flex-col items-center justify-center p-2 lg:items-start lg:pl-8">
        <h1 className="mb-4 font-salsa text-4xl text-on-surface">
          Code canvas
        </h1>
        <p className="mb-4 text-center font-kalam text-xl text-on-surface lg:text-left">
          Interactive Exploration of Algorithms & Data Structures
        </p>
        <md-filled-tonal-button class="font-salsa">
          Get started
        </md-filled-tonal-button>
      </div>
      <div className="hidden flex-1 lg:block"></div>
    </div>
  );
}

export default HomeScreen;
