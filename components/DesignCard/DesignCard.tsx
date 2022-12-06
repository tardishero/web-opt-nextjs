import Image from 'next/image';

import { Design } from '../../data/designs';

interface DesignCardProps {
  design: Design;
}

const DesignCard: React.FC<DesignCardProps> = ({ design }) => {
  return (
    <div className="w-full mx-auto flex flex-col md:justify-center">
      <a
        href={design.link}
        target="_blank"
        className="w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink"
        rel="noreferrer"
      >
        <Image
          className="w-full h-auto rounded-md hover:opacity-75 transition-opacity object-cover"
          src={design.img}
          alt={design.label}
          width={200}
          height={200}
          loading="lazy"
        />
      </a>

      <div className="w-full mt-5">
        <div className="flex justify-between">
          <a href={design.link} target="_blank" rel="noreferrer">
            <h3 className="text-lg font-bold">{design.label}</h3>
          </a>
          <div className="space-x-2">
            {design.link && (
              <a href={design.link} target="_blank" rel="noreferrer">
                <Image
                  src="/static/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
