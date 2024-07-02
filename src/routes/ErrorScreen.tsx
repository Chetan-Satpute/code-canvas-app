function ErrorScreen() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-surface">
      <p className="rounded-lg bg-error p-3 font-salsa text-xl text-on-error">
        Woops! Something unexpected happened.
      </p>
    </div>
  );
}

export default ErrorScreen;
