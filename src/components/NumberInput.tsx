import {FunctionArgument} from '../lib/types';

interface NumberInputProps {
  label: string;
  placeholder: string;
  supportingText: string;
  error: boolean;
  onChange: (label: string, value: FunctionArgument | null) => void;
  onError: (label: string, value: boolean) => void;
}

function NumberInput(props: NumberInputProps) {
  const {error, label, placeholder, supportingText, onChange, onError} = props;

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = event => {
    const valueString = event.target.value;
    const value = Number(valueString);

    if (valueString.length === 0) {
      onChange(label, null);
      onError(label, false);
    } else if (Number.isNaN(value)) {
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

export default NumberInput;
