import {useParams} from 'react-router-dom';
import FunctionCard from './components/FunctionCard';
import useFunctionSections from './hooks/useFunctionSections';

function StructurePanel() {
  const params = useParams();
  const structureId = params.structureId!;

  const {functionSections, isLoading, isError} =
    useFunctionSections(structureId);

  if (isLoading) return <span className="text-on-surface">Loading...</span>;
  if (!functionSections || isError)
    return <span className="text-on-surface">Fetch error...</span>;

  const sections = functionSections.map(section => {
    const cards = section.functions.map(funcInfo => (
      <FunctionCard
        key={funcInfo.id}
        id={funcInfo.id}
        name={funcInfo.name}
        animated={funcInfo.animated}
        parameters={funcInfo.parameters}
      />
    ));

    return (
      <div key={section.title}>
        <h2 className="text-center font-salsa text-xl text-on-surface">
          {section.title}
        </h2>
        {cards}
      </div>
    );
  });

  return <div className="flex-1 overflow-auto p-2">{sections}</div>;
}

export default StructurePanel;
