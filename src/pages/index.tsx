import Footer from 'components/organism/Footer';
import { About, Contact, Intro, Projects } from 'components/organism/sections';
import Layout, { LayoutProps } from 'components/templates/Layout';
import getPhoto from 'libs/helpers/getPhoto';
import getProjects from 'libs/helpers/getProjects';
import type { NextPage } from 'next';
import { Photo } from 'types/photo';
import type IProject from 'types/project';

const meta: LayoutProps = {
  title: 'Rendy Farhan Ramadhan',
  templateTitle: 'Student and Frontend Developer From Indonesia',
  description: `Hello there 👋, Im Rendy Farhan Ramadhan, I loves code, art and music.`,
  openGraph: {
    type: 'website',
    site_name: 'Rendy Farhan Ramadhan',
    url: 'https://www.rndyrmdhn.me/',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content:
        'rendyramadhan, Rendy Ramadhan, rndyrmdhn, rndyfarhan, Rendy Farhan Ramadhan, Rendy, Farhan, Ramadhan, Rendy Dev, Farhan, Rendy Farhan, Rendy Github, rendy github, rndy github, Rendy GitHub, Rndy github, Rndy Nextjs, Rendy Nextjs, Personal Website, Frontend, Frontend Dev, Frontend Developer, Developer, Indonesia, Rendy Ramadhan Developer, Rendy Farhan Dev, Rendy Dev, Rendy Farhan Ramadhan , rndyramadhan, developer from indonesia, personal website',
    },
    {
      name: 'author',
      content: 'Rendy Farhan Ramadhan',
    },
  ],
};

export const getStaticProps = async () => {
  try {
    const res = await Promise.all([getProjects(), getPhoto()]);

    const projects = res[0].slice() || [];
    const photo = res[1] || undefined;

    return {
      props: { projects, photo },
    };
  } catch (error) {
    return error;
  }
};

const Home: NextPage<{ projects: IProject[]; photo: Photo,  }> = ({
  projects,
  photo,
}) => {
  return (
    <Layout {...meta}>
      <Intro
        title={meta.title}
        subtitle={meta.templateTitle!}
        description={meta.description}
        photo={photo}
      />
      <About />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default Home;
