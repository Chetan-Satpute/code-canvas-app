import {Navigate, useParams} from 'react-router-dom';
import CallStack from '../../components/CallStack';
import CodeBlock from '../../components/CodeBlock';
import {useAppSelector} from '../../redux/hooks';
import AnimateController from './components/AnimateController';

function AlgorithmPanel() {
  const params = useParams();
  const structureId = params.structureId!;
  const isRunning = params.algorithmId;

  const code = useAppSelector(state => state.canvas.code);
  const steps = useAppSelector(state => state.canvas.steps);
  const currentStepIndex = useAppSelector(
    state => state.canvas.currentStepIndex
  );

  const currentStep = steps[currentStepIndex];
  if (!isRunning) {
    return <Navigate to={`/${structureId}`} />;
  }

  const hlLines = currentStep?.hlLines || [];
  const callStack = currentStep?.callStack || [];

  return (
    <div className="flex flex-1 flex-col overflow-auto p-2">
      <div className="p-3">
        <AnimateController />
      </div>
      <div className="flex-1 overflow-auto">
        <div className="flex h-3/4 flex-col">
          <CodeBlock text={code} hlLines={hlLines} />
        </div>
        <div className="flex h-1/4 flex-col">
          <h4 className="p-3 font-salsa text-on-surface">Call stack</h4>
          <CallStack signatures={callStack} />
        </div>
      </div>
    </div>
  );
}

export default AlgorithmPanel;
