import '@material/web/button/filled-tonal-button';

interface FetchErrorProps {
  retry: () => void;
}

function FetchError(props: FetchErrorProps) {
  const {retry} = props;

  return (
    <div className="flex flex-1 items-center justify-center overflow-auto bg-surface">
      <div className="max-w-lg">
        <div className="rounded-lg bg-error p-4">
          <p className="font-salsa text-on-error">
            Looks like we lost connection
          </p>
          <p className="font-salsa text-on-error">
            Please try again in a moment, or click retry below.
          </p>
        </div>
        <md-filled-tonal-button class="my-3 w-full" onClick={retry}>
          Retry
        </md-filled-tonal-button>
      </div>
    </div>
  );
}

export default FetchError;
