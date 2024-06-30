import CallStack from '../../components/CallStack';
import CodeBlock from '../../components/CodeBlock';
import AnimateController from './components/AnimateController';

const code = `function sum(a, b) {
  return a + b;
}`;

function AlgorithmPanel() {
  return (
    <div className="flex flex-1 flex-col overflow-auto p-2">
      <div className="p-3">
        <AnimateController />
      </div>
      <div className="flex-1 overflow-auto">
        <div className="flex h-3/4 flex-col">
          <CodeBlock text={code} hlLines={[1]} />
        </div>
        <div className="flex h-1/4 flex-col">
          <h4 className="p-3 font-salsa text-on-surface">Call stack</h4>
          <CallStack signatures={['sum(a=5, b=3)']} />
        </div>
      </div>
    </div>
  );
}

export default AlgorithmPanel;
