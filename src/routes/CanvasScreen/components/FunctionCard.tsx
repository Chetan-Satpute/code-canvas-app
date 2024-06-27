import {useState} from 'react';
import {useOutletContext, useParams} from 'react-router-dom';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/icon/icon.js';
import NumberInput from '../../../components/NumberInput';
import NumberArrayInput from '../../../components/NumberArrayInput';
import {
  FunctionArgument,
  FunctionArgumentType,
  FunctionInfo,
} from '../../../lib/types';
import {CanvasScreenOutletContext} from '../types';

interface FunctionCardProps extends FunctionInfo {}

function FunctionCard(props: FunctionCardProps) {
  const {id: functionId, name, parameters, animated} = props;

  const params = useParams();
  const structureName = params.structureId!;

  const {executeFunction, isExecutionFunctionSubmitting} =
    useOutletContext() as CanvasScreenOutletContext;

  const [values, setValues] = useState(() => propsToValuesState(props));
  const [errors, setErrors] = useState(() => propsToErrorState(props));

  const handleValueChange = (label: string, value: FunctionArgument | null) => {
    setValues({...values, [label]: value});
  };

  const handleError = (label: string, hasError: boolean) => {
    setErrors({...errors, [label]: hasError});
  };

  const handleSubmit = () => {
    setErrors(() =>
      props.parameters.reduce(
        (acc, obj) => {
          acc[obj.label] = values[obj.label] === null;

          return acc;
        },
        {} as Record<string, boolean>
      )
    );

    const hasError = Object.values(values).some(v => v === null);
    const validatedValues = values as Record<string, FunctionArgument>;

    if (!hasError) {
      executeFunction({
        structureName,
        functionId,
        structureData: '[]',
        args: validatedValues,
      });
    }
  };

  const inputFields = parameters.map(param => {
    switch (param.argumentType) {
      case FunctionArgumentType.Number:
        return (
          <NumberInput
            key={param.label}
            error={errors[param.label]}
            label={param.label}
            placeholder={param.placeholder}
            supportingText={param.supportingText}
            onChange={handleValueChange}
          />
        );
      case FunctionArgumentType.NumberArray:
        return (
          <NumberArrayInput
            key={param.label}
            error={errors[param.label]}
            label={param.label}
            placeholder={param.placeholder}
            supportingText={param.supportingText}
            onChange={handleValueChange}
            onError={handleError}
          />
        );
      default:
        return null;
    }
  });

  return (
    <div className="mb-4 flex flex-col gap-2 px-4">
      <h4 className="font-salsa font-bold text-on-surface">{name}</h4>

      {inputFields}

      <div className="flex justify-end">
        {animated ? (
          <md-filled-tonal-button
            trailing-icon
            onClick={handleSubmit}
            disabled={isExecutionFunctionSubmitting || undefined}
          >
            Animate
            <md-icon slot="icon" class="icon-filled">
              play_circle
            </md-icon>
          </md-filled-tonal-button>
        ) : (
          <md-outlined-button
            trailing-icon
            onClick={handleSubmit}
            disabled={isExecutionFunctionSubmitting || undefined}
          >
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

function propsToValuesState(props: FunctionCardProps) {
  return props.parameters.reduce(
    (acc, obj) => {
      acc[obj.label] = null;
      return acc;
    },
    {} as Record<string, FunctionArgument | null>
  );
}

function propsToErrorState(props: FunctionCardProps) {
  return props.parameters.reduce(
    (acc, obj) => {
      acc[obj.label] = false;
      return acc;
    },
    {} as Record<string, boolean>
  );
}

export default FunctionCard;
