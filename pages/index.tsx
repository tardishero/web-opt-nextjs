import { DesignSection, TechStackSection } from '../components/Home';
import { IntroSection } from '../components/Intro';
import { Layout } from '../components/Layout';
import { getFetchAllServerSideProps } from '../components/serverSideProps';
import { DesignCollection } from '../types';

export const getServerSideProps = getFetchAllServerSideProps;

const Home: React.FC<DesignCollection> = ({ designs }) => {
  return (
    <Layout currentPage="Home">
      <IntroSection>
        {`Hey, Let's go to `}
        <span className="text-fun-pink">Next.js</span> world
      </IntroSection>
      <div className="space-y-32">
        <DesignSection designs={designs} />
        <TechStackSection />
      </div>
    </Layout>
  );
};

export default Home;
