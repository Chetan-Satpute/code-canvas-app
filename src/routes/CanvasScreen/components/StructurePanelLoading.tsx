function StructurePanelLoading() {
  return (
    <div className="flex-1 animate-pulse overflow-auto p-2">
      <div className="m-auto mb-2 h-10 max-w-40 rounded-lg bg-neutral-700" />

      <div className="mb-2 h-8 max-w-40 rounded-lg bg-neutral-700" />
      <div className="m-auto mb-2 h-10 rounded-lg bg-neutral-700" />
      <div className="flex justify-end">
        <div className="mb-2 h-10 w-full max-w-32 rounded-lg bg-neutral-700" />
      </div>

      <div className="mb-2 h-8 max-w-40 rounded-lg bg-neutral-700" />
      <div className="m-auto mb-2 h-10 rounded-lg bg-neutral-700" />
      <div className="flex justify-end">
        <div className="mb-2 h-10 w-full max-w-32 rounded-lg bg-neutral-700" />
      </div>
    </div>
  );
}

export default StructurePanelLoading;
