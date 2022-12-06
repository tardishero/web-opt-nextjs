import Link from 'next/link';

import { designs } from '../../data/designs';
import { DesignCard } from '../DesignCard';
import { SectionTitle } from '.';

const DesignSection: React.FC = () => {
  return (
    <div className="flex flex-col text-left justify-between relative">
      <div id="designs">
        <SectionTitle title="Here are some of designs." />
      </div>
      <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
        {designs.slice(0, 3).map((item) => {
          return <DesignCard key={item.label} design={item} />;
        })}
      </div>
      <div className="relative w-full mt-2">
        <Link href="/designs">
          <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
            View All
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DesignSection;