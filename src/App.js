import { motion } from 'framer-motion';
import Header from './component/others/Header';
import Hero from './component/hero/Hero';
import About from './component/about/About';
import Experience from './component/experience/Experience';
import Skill from './component/skill/Skill';
import Project from './component/project/Project';
import Contact from './component/contact/Contact';
import ToolBar from './component/others/ToolBar';
import { useEffect, useState } from 'react';
import { fetData } from './api/Api';

export default function App() {
  // fetch data
  const [data, setData] = useState([]);
  const getLinks = async () => {
    const data = await fetData();
    setData(data ? data[0] : {});
  };
  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Header links={data?.links} />
      <section id="hero" className="snap-center">
        <Hero
          avatar={data?.avatar}
          role={data?.role}
          loopSentences={data?.loopSentences}
        />
      </section>
      <section id="about" className="snap-center">
        <About avatar={data?.avatar} introductions={data?.introductions} />
      </section>
      <section id="experience" className="snap-center">
        <Experience experiences={data?.experiences} />
      </section>
      <section id="skill" className="snap-center">
        <Skill skills={data?.skills} />
      </section>
      <section id="project" className="snap-center">
        <Project projects={data?.projects} />
      </section>
      <section id="contact" className="snap-center">
        <Contact
          address={data?.address}
          avatar={data?.avatar}
          email={data?.email}
          fullname={data?.fullname}
          phoneNumber={data?.phoneNumber}
        />
      </section>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute bottom-0 mx-auto w-full"
      >
        <ToolBar />
      </motion.div>
    </div>
  );
}
