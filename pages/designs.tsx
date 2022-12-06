import { DesignSection } from '../components/Designs';
import { IntroSection } from '../components/Intro';
import { Layout } from '../components/Layout';
import { getFetchAllServerSideProps } from '../components/serverSideProps';
import { DesignCollection } from '../types';

export const getServerSideProps = getFetchAllServerSideProps;

const Designs: React.FC<DesignCollection> = ({ designs }) => {
  return (
    <Layout currentPage="Designs">
      <IntroSection>Designs</IntroSection>
      <DesignSection designs={designs} />
    </Layout>
  );
};

export default Designs;
