import { DesignSection, IntroSection } from '../components/Designs';
import { Layout } from '../components/Layout';

export default function Designs() {
  return (
    <Layout currentPage="Designs">
      <IntroSection />
      <DesignSection />
    </Layout>
  );
}
