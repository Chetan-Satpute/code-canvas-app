import {useState} from 'react';
import {useParams} from 'react-router-dom';
import '@material/web/progress/circular-progress.js';
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
import FilledTonalButton from '../../../components/FilledTonalButton';
import OutlinedButton from '../../../components/OutlinedButton';
import useExecuteFunction from '../../../hooks/useExecuteFunction';
import {useAppSelector} from '../../../redux/hooks';

interface FunctionCardProps extends FunctionInfo {}

function FunctionCard(props: FunctionCardProps) {
  const {id: functionId, name, parameters, animated} = props;

  const structureData = useAppSelector(state => state.canvas.structureData);
  const isExecuteFunctionSubmitting = useAppSelector(
    state => state.canvas.isExecuteFunctionSubmitting
  );

  const params = useParams();
  const structureName = params.structureId!;

  const {executeFunction, isPending} = useExecuteFunction(
    structureName,
    functionId
  );

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
        structureData: structureData,
        args: validatedValues,
        animated: animated,
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
            onError={handleError}
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
          <FilledTonalButton
            title="Animate"
            endIcon="play_circle"
            loading={isPending}
            disabled={isExecuteFunctionSubmitting}
            onClick={handleSubmit}
          />
        ) : (
          <OutlinedButton
            title="Run"
            endIcon="skip_next"
            loading={isPending}
            disabled={isExecuteFunctionSubmitting}
            onClick={handleSubmit}
          />
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
