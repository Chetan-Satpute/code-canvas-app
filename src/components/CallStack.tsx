import CodeBlock from './CodeBlock';

interface CallStackProps {
  signatures: string[];
}

function CallStack(props: CallStackProps) {
  const {signatures} = props;

  const code = signatures.join('\n');

  return <CodeBlock text={code} hlLines={[0]} />;
}

export default CallStack;
