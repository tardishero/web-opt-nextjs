import { DesignSection } from '../components/Designs';
import { IntroSection } from '../components/Intro';
import { Layout } from '../components/Layout';

export default function Designs() {
  return (
    <Layout currentPage="Designs">
      <IntroSection>Designs</IntroSection>
      <DesignSection />
    </Layout>
  );
}
