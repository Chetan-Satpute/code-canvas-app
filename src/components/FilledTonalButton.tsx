import '@material/web/button/filled-tonal-button.js';

interface FilledTonalButtonProps {
  className?: string;
  title: string;
  endIcon: string;
  loading: boolean;
  disabled: boolean;
  onClick: () => void;
}

function FilledTonalButton(props: FilledTonalButtonProps) {
  const {className = '', title, endIcon, disabled, loading, onClick} = props;
  return (
    <md-filled-tonal-button
      class={className}
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
    </md-filled-tonal-button>
  );
}

export default FilledTonalButton;
