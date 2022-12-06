import Image from 'next/image';

import { IntroSection } from '../../components/Intro';
import { Layout } from '../../components/Layout';
import { getFetchItemServerSideProps } from '../../components/serverSideProps';
import { SingleDesign } from '../../types';

export const getServerSideProps = getFetchItemServerSideProps;

const DesignDetailPage: React.FC<SingleDesign> = ({ design }) => {
  return (
    <Layout currentPage="Designs">
      <IntroSection>Design Detail</IntroSection>
      {design && (
        <>
          <div className="w-full relative rounded-xl border-fun-gray border p-2 transition hover:border-fun-pink">
            <Image
              className="w-full h-auto rounded-md transition-opacity object-cover"
              src={design.img}
              alt={design.label}
              width={200}
              height={200}
              loading="lazy"
            />
          </div>
          <div className="w-full my-10">
            <div className="flex justify-between items-center px-5">
              <h3 className="text-lg font-bold">{design.label}</h3>
              <div className="space-x-2">
                <a href={design.link} target="_blank" rel="noreferrer">
                  <Image
                    src="/static/icons/external-link.svg"
                    width={16}
                    height={16}
                    alt="Link Icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default DesignDetailPage;
