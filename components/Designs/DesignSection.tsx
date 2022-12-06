import { DesignCollection } from '../../types';
import { DesignCard } from '../DesignCard';

const DesignSection: React.FC<DesignCollection> = ({ designs }) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
      {designs.map((item) => (
        <DesignCard key={item.label} design={item} />
      ))}
    </div>
  );
};

export default DesignSection;
