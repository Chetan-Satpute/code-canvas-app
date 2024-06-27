import '@material/web/button/outlined-button.js';

interface OutlinedButtonProps {
  title: string;
  endIcon: string;
  loading: boolean;
  disabled: boolean;
  onClick: () => void;
}

function OutlinedButton(props: OutlinedButtonProps) {
  const {title, endIcon, disabled, loading, onClick} = props;
  return (
    <md-outlined-button
      trailing-icon={endIcon || undefined}
      disabled={disabled || undefined}
      onClick={onClick}
    >
      {title}
      {loading ? (
        <md-circular-progress slot="icon" indeterminate></md-circular-progress>
      ) : (
        <md-icon slot="icon" class="icon-filled">
          {endIcon}
        </md-icon>
      )}
    </md-outlined-button>
  );
}

export default OutlinedButton;
