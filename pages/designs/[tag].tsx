import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Image from 'next/image';

import { IntroSection } from '../../components/Intro';
import { Layout } from '../../components/Layout';
import { Design, designs } from '../../data/designs';

interface DesignDetailPageProps {
  design: Design;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPaths = designs.map((item) => ({
    params: {
      tag: item.key,
    },
  }));

  return {
    paths: allPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<DesignDetailPageProps> = async (
  context: GetStaticPropsContext
) => {
  const tag = context.params?.tag;
  const designItem = designs.find((item) => item.key === tag) ?? designs[0];

  return {
    props: {
      design: designItem,
    },
  };
};

const DesignDetailPage: React.FC<DesignDetailPageProps> = ({ design }) => {
  return (
    <Layout currentPage="DesignDetails">
      <IntroSection>Design Detail</IntroSection>
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
        <div className="flex justify-between items-center">
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
    </Layout>
  );
};

export default DesignDetailPage;
