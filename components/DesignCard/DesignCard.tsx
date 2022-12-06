import Image from 'next/image';
import Link from 'next/link';

import { SingleDesign } from '../../types';

const DesignCard: React.FC<SingleDesign> = ({ design }) => {
  return (
    <div className="w-full mx-auto flex flex-col md:justify-center">
      <Link href={`/designs/${design.key}`}>
        <div className="w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink">
          <Image
            className="w-full h-auto rounded-md hover:opacity-75 transition-opacity object-cover"
            src={design.img}
            alt={design.label}
            width={200}
            height={200}
            loading="lazy"
          />
        </div>

        <div className="w-full mt-5">
          <div className="flex justify-between items-center px-5">
            <h3 className="text-lg font-bold">{design.label}</h3>
            <div className="space-x-2">
              <Image
                src="/static/icons/external-link.svg"
                width={16}
                height={16}
                alt="Link Icon"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DesignCard;
