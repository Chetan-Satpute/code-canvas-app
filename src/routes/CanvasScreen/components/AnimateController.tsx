import '@material/web/button/filled-tonal-button.js';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {changeStep, stopAnimate} from '../../../redux/canvas/slice';
import FilledTonalButton from '../../../components/FilledTonalButton';

function AnimateController() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const stepsFetching = useAppSelector(state => state.canvas.stepsFetching);

  const totalSteps = useAppSelector(state => state.canvas.steps.length);
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

  const isFirstStep = currentStepIndex === 0;
  const isLastStep = totalSteps === 0 || totalSteps === currentStepIndex + 1;

  return (
    <div className="flex">
      <FilledTonalButton
        className="flex-1 rounded-r-none"
        title="Previous"
        endIcon="skip_previous"
        loading={false}
        disabled={isFirstStep}
        onClick={handlePrevious}
      />
      <md-filled-tonal-button
        trailing-icon
        class="flex-1 rounded-none"
        onClick={handleStop}
      >
        Stop
        <md-icon slot="icon" class="icon-filled">
          stop
        </md-icon>
      </md-filled-tonal-button>
      <FilledTonalButton
        className="flex-1 rounded-l-none"
        title="Next"
        endIcon="skip_next"
        loading={isLastStep && stepsFetching}
        disabled={isLastStep}
        onClick={handleNext}
      />
    </div>
  );
}

export default AnimateController;
