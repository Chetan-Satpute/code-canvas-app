import {useState} from 'react';
import {FunctionArgument} from '../lib/types';

interface NumberInputProps {
  label: string;
  placeholder: string;
  supportingText: string;
  error: boolean;
  onChange: (label: string, value: FunctionArgument | null) => void;
}

function NumberInput(props: NumberInputProps) {
  const {error, label, placeholder, supportingText, onChange} = props;

  const [validationError, setValidationError] = useState(false);

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = event => {
    const valueString = event.target.value;
    const value = Number(valueString);

    if (valueString.length === 0) {
      onChange(label, null);
      setValidationError(false);
    } else if (Number.isNaN(value)) {
      onChange(label, null);
      setValidationError(true);
    } else {
      onChange(label, value);
      setValidationError(false);
    }
  };

  return (
    <md-filled-text-field
      error={validationError || error || undefined}
      label={label}
      placeholder={placeholder}
      supporting-text={supportingText}
      onInput={handleInput}
    />
  );
}

export default NumberInput;
