import Footer from 'components/organism/Footer';
import { About, Contact, Intro, Projects } from 'components/organism/sections';
import Layout, { LayoutProps } from 'components/templates/Layout';
import { AnimatePresence } from 'framer-motion';
import getProjects from 'libs/helpers/getProjects';
import type { NextPage } from 'next';
import type IProject from 'types/project';

const meta: LayoutProps = {
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

const Home: NextPage<{ projects: IProject[]; }> = ({ projects }) => {

  return (
    <Layout {...meta}>
      <AnimatePresence>
        <Intro title='Rendy Ramadhan.' subtitle='Student &amp; Frontend Developer.' description={meta.description} />
        <About />
        <Projects projects={projects} />
        <Contact />
      </AnimatePresence>
      <Footer />
    </Layout>
  );
};

export default Home;
