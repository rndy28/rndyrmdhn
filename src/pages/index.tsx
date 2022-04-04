import Button from 'components/atoms/Button';
import Figure from 'components/molecules/Figure';
import ProjectCard from 'components/molecules/ProjectCard';
import Footer from 'components/organism/Footer';
import Layout, { LayoutProps } from 'components/templates/Layout';
import { AnimatePresence, motion } from 'framer-motion';
import variants from 'libs/animation/variants';
import getProjects from 'libs/helpers/getProjects';
import type { NextPage } from 'next';
import { ProjectProps } from 'types/project';

const meta:LayoutProps = {
  title: 'Rendy Farhan Ramadhan',
  templateTitle: 'Student and Frontend Developer From Indonesia',
  description: `Hello there 👋, Im Rendy Farhan Ramadhan, I (happen to) loves code, minimalist surreal art and music.`,
  openGraph: {
    type: 'website',
    site_name: 'Rendy Farhan Ramadhan',
    url: 'https://www.rndyrmdhn.me/'
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content:
        'rendyramadhan, Rendy Ramadhan, rndyrmdhn, rndyfarhan, Rendy Farhan Ramadhan, Rendy, Farhan, Ramadhan, Rendy Dev, Farhan, Rendy Farhan, Rendy Github, rendy github, rndy github, Rendy GitHub, Rndy github, Rndy Nextjs, Rendy Nextjs, Personal Website, Frontend, Frontend Dev, Frontend Developer, Developer, Indonesia, Rendy Ramadhan Developer, Rendy Farhan Dev, Rendy Dev, Rendy Farhan Ramadhan , rndyramadhan, developer from indonesia, personal website'
    },
    {
      name: 'author',
      content: 'Rendy Farhan Ramadhan'
    }
  ]
};

export const getStaticProps = async () => {
  const res = await getProjects();

  const projects = res.slice() || [];

  return {
    props: { projects }
  };
};

const Home: NextPage<ProjectProps> = ({ projects }) => {

  return (
    <Layout {...meta}>
      <AnimatePresence>
        <motion.section
          id='home'
          key='home'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={variants.common}
          className="section section--intro"
        >
          <div className="section__wrapper">
            <div className='section__inner'>
              <h1 className='section__name section__name--mb-1'>Rendy Ramadhan.</h1>
              <h3 className='section__sub-title'>Student &amp; Frontend Developer.</h3>
            </div>
            <p className='section__description section__description--mb-2'>{meta.description}</p>
            <Button onClick={() => console.log('clicked')} background='#4C566A' color='#ECEFF4' text='Resume' className='section__btn' />
          </div>
          <Figure />
        </motion.section>

        <motion.section
          id='about'
          key='about'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-600px 0px 0px 0px" }}
          variants={variants.common}
          className='section section--about'>
          <h1 className='section__title'>About Me</h1>
          <p className='section__description section__description--mt-1'>
            Hello There 👋, My name is Rendy Farhan Ramadhan and  I&apos;m a student from Jakarta, Indonesia. I&apos;m a passionate web developer who loves to create things.
            Although in the first semester of my high school life i was not so interested in programming, because when i go into that high school its just because its free of charge.
            <br />
            <br />
            Then after my first semester is done, I think about my future more seriously and i started to learn programming. Although at first i struggled with it, but after a while i started to understand it.
            Fast forward to today i&apos;m still learning new things and I&apos;m still trying to learn more about programming.
            <br />
            <br />
            Here are some of programming languages(and frameworks) that i&apos;ve been working with recently:
          </p>
          <ul className='section__grid section__grid--tech'>
            <li>Javascript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </motion.section>

        <motion.section
          id='projects'
          key='projects'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-600px 0px 0px 0px' }}
          variants={variants.common}
          className='section section--projects'
        >
          <h1 className='section__title'>Featured Projects</h1>
          <div className="section__grid section__grid--projects">
            {
              projects.map((props, index) => (
                <ProjectCard key={index}  {...props} />
              ))
            }
          </div>
        </motion.section>

        <motion.section
          id='contact'
          key='contact'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={variants.common}
          className='section section--contact'>
          <h1 className='section__title'>Contact Me</h1>
          <p className='section__description section__description--mt-1'>
            If you want to get in touch, you can find me on <a href=''>GitHub</a> , <a href=''>LinkedIn</a>.Just clicking in one of these icon below an you&apos;re good to go. Or you can email me if you preferred to
          </p>
        </motion.section>
      </AnimatePresence>

      <Footer />
    </Layout>
  );
};

export default Home;
