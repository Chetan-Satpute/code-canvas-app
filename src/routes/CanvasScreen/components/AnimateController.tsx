import '@material/web/button/filled-tonal-button.js';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {changeStep, stopAnimate} from '../../../redux/canvas/slice';

function AnimateController() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const currentStepIndex = useAppSelector(
    state => state.canvas.currentStepIndex
  );

  const handleNext = () => {
    dispatch(changeStep(currentStepIndex + 1));
  };

  const handlePrevious = () => {
    dispatch(changeStep(currentStepIndex - 1));
  };

  const handleStop = () => {
    dispatch(stopAnimate());
    navigate(-1);
  };

  return (
    <div className="flex">
      <md-filled-tonal-button
        class="flex-1 rounded-r-none"
        onClick={handlePrevious}
      >
        Previous
        <md-icon slot="icon" class="icon-filled">
          skip_previous
        </md-icon>
      </md-filled-tonal-button>
      <md-filled-tonal-button class="flex-1 rounded-none" onClick={handleStop}>
        Stop
      </md-filled-tonal-button>
      <md-filled-tonal-button
        trailing-icon
        class="flex-1 rounded-l-none"
        onClick={handleNext}
      >
        Next
        <md-icon slot="icon" class="icon-filled">
          skip_next
        </md-icon>
      </md-filled-tonal-button>
    </div>
  );
}

export default AnimateController;
