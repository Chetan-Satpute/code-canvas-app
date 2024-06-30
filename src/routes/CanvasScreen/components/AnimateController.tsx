import '@material/web/button/filled-tonal-button.js';

function AnimateController() {
  return (
    <div className="flex">
      <md-filled-tonal-button class="flex-1 rounded-r-none">
        Previous
        <md-icon slot="icon" class="icon-filled">
          skip_previous
        </md-icon>
      </md-filled-tonal-button>
      <md-filled-tonal-button class="flex-1 rounded-none">
        Stop
      </md-filled-tonal-button>
      <md-filled-tonal-button trailing-icon class="flex-1 rounded-l-none">
        Next
        <md-icon slot="icon" class="icon-filled">
          skip_next
        </md-icon>
      </md-filled-tonal-button>
    </div>
  );
}

export default AnimateController;
