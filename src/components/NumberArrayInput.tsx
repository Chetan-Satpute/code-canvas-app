import {FunctionArgument} from '../lib/types';

interface NumberArrayInputProps {
  label: string;
  placeholder: string;
  supportingText: string;
  error: boolean;
  onChange: (label: string, value: FunctionArgument | null) => void;
  onError: (label: string, value: boolean) => void;
}

function NumberArrayInput(props: NumberArrayInputProps) {
  const {error, label, placeholder, supportingText, onChange, onError} = props;

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = event => {
    const valueString = event.target.value;

    const value = valueString.split(',').map(text => Number(text.trim()));
    const hasValidationError = value.some(v => Number.isNaN(v));

    if (valueString.length === 0) {
      onChange(label, null);
      onError(label, false);
    } else if (hasValidationError) {
      onChange(label, null);
      onError(label, true);
    } else {
      onChange(label, value);
      onError(label, false);
    }
  };

  return (
    <md-filled-text-field
      error={error || undefined}
      label={label}
      placeholder={placeholder}
      supporting-text={supportingText}
      onInput={handleInput}
    />
  );
}

export default NumberArrayInput;
