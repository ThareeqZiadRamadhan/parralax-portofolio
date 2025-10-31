import { ParallaxHero } from './ParallaxHero';
import { AboutChapter } from './AboutChapter';
import { ProjectsChapter } from './ProjectsChapter';
import { SkillsChapter } from './SkillsChapter';
import { ContactChapter } from './ContactChapter';
import { FloatingNav } from './FloatingNav';
import { Footer } from './Footer';
import { ScrollProgress } from './ScrollProgress';
import { ThemeToggle } from './ThemeToggle';
import {MusicPlayer} from './Musicplayer'
export default function App() {
  return (
    <div className="relative bg-[#3e2723] dark:bg-[#1a1614]">

      {/* Komponen musik sudah terintegrasi */}
      <MusicPlayer />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Floating Navigation */}
      <FloatingNav />

      {/* Main Content Sections */}
      <main>
        <section id="hero">
          <ParallaxHero />
        </section>

        <section id="about">
          <AboutChapter />
        </section>

        <section id="projects">
          <ProjectsChapter />
        </section>

        <section id="skills">
          <SkillsChapter />
        </section>

        <section id="contact">
          <ContactChapter />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
