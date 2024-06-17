function HomeScreen() {
  return (
    <div className="flex h-screen w-screen bg-background">
      <div className="flex flex-1 flex-col items-center justify-center bg-blue-200 p-2 lg:items-start lg:pl-8">
        <h1 className="mb-4 font-salsa text-4xl">Code canvas</h1>
        <p className="text-center font-kalam text-xl lg:text-left">
          Interactive Exploration of Algorithms & Data Structures
        </p>
      </div>
      <div className="hidden flex-1 bg-blue-500 lg:block"></div>
    </div>
  );
}

export default HomeScreen;
