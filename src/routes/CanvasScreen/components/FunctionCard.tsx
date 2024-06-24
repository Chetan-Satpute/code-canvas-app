import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/icon/icon.js';
import {FunctionInfo} from '../../../lib/types';

interface FunctionCardProps extends FunctionInfo {}

function FunctionCard(props: FunctionCardProps) {
  const {name, parameters, animated} = props;

  const inputFields = parameters.map(param => (
    <md-filled-text-field
      key={param.label}
      label={param.label}
      placeholder={param.placeholder}
      supporting-text={param.supportingText}
    />
  ));

  return (
    <div className="mb-4 flex flex-col gap-2 px-4">
      <h4 className="font-salsa font-bold text-on-surface">{name}</h4>

      {inputFields}

      <div className="flex justify-end">
        {animated ? (
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
