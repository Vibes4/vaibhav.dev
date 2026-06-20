import { Nav } from '@/components/nav';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Impact } from '@/components/sections/impact';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { GitHub } from '@/components/sections/github';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Impact />
        <Experience />
        <Projects />
        <Skills />
        {/* Server component: fetches live GitHub data */}
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
