import {useParams} from 'react-router-dom';
import FunctionCard from './components/FunctionCard';
import StructurePanelLoading from './components/StructurePanelLoading';
import useFunctionSections from './hooks/useFunctionSections';
import FetchError from '../../components/FetchError';

function StructurePanel() {
  const params = useParams();
  const structureId = params.structureId!;

  const {functionSections, isLoading, isError, refetch} =
    useFunctionSections(structureId);

  if (isLoading) return <StructurePanelLoading />;
  if (!functionSections || isError) return <FetchError retry={refetch} />;

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
