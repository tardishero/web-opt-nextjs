import {
  DesignSection,
  IntroSection,
  TechStackSection,
} from '../components/Home';
import { Layout } from '../components/Layout';

export default function Home() {
  return (
    <Layout currentPage="Home">
      <IntroSection />
      <div className="space-y-32">
        <DesignSection />
        <TechStackSection />
      </div>
    </Layout>
  );
}
