import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/icon/icon.js';

function FunctionCard() {
  const isAnimate = false;

  return (
    <div className="mb-4 flex flex-col gap-2 px-4">
      <h4 className="font-salsa font-bold text-on-surface">Set array</h4>

      <md-filled-text-field
        label="values"
        placeholder="0,1,2,3,4,5"
        supporting-text="comma seperated values of array"
      />

      <div className="flex justify-end">
        {isAnimate ? (
          <md-filled-tonal-button trailing-icon>
            Animate
            <md-icon slot="icon" class="icon-filled">
              play_circle
            </md-icon>
          </md-filled-tonal-button>
        ) : (
          <md-outlined-button trailing-icon>
            Run
            <md-icon slot="icon" class="icon-filled">
              skip_next
            </md-icon>
          </md-outlined-button>
        )}
      </div>
    </div>
  );
}

export default FunctionCard;
