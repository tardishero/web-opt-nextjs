import { DesignSection, TechStackSection } from '../components/Home';
import { IntroSection } from '../components/Intro';
import { Layout } from '../components/Layout';

export default function Home() {
  return (
    <Layout currentPage="Home">
      <IntroSection>
        {`Hey, Let's go to `}
        <span className="text-fun-pink">Next.js</span> world
      </IntroSection>
      <div className="space-y-32">
        <DesignSection />
        <TechStackSection />
      </div>
    </Layout>
  );
}
