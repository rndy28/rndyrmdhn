import { About, Contact, Intro, Projects } from "components/organism/sections";
import Layout, { LayoutProps } from "components/templates/Layout";
import getPhoto from "libs/helpers/getPhoto";
import getProjects from "libs/helpers/getProjects";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Photo } from "types/photo";
import type IProject from "types/project";

const Header = dynamic(() => import("components/organism/Header"), {
  ssr: false
});
const Footer = dynamic(() => import("components/organism/Footer"), {
  ssr: false,
});

const meta: LayoutProps = {
  title: "Rendy Farhan Ramadhan",
  templateTitle: "Frontend Developer From Indonesia",
  description: `Hello there 👋, Iam Rendy Farhan Ramadhan, A Frontend Developer from Indonesia`,
  openGraph: {
    type: "website",
    site_name: "Rendy Farhan Ramadhan",
    url: "https://www.rndyrmdhn.me/",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "rendyramadhan, Rendy Ramadhan, rndyrmdhn, rndyfarhan, Rendy Farhan Ramadhan, Rendy, Farhan, Ramadhan, Rendy Dev, Farhan, Rendy Farhan, Rendy Github, rendy github, rndy github, Rendy GitHub, Rndy github, Rndy Nextjs, Rendy Nextjs, Personal Website, Frontend, Frontend Dev, Frontend Developer, Developer, Indonesia, Rendy Ramadhan Developer, Rendy Farhan Dev, Rendy Dev, Rendy Farhan Ramadhan , rndyramadhan, developer from indonesia, personal website",
    },
    {
      name: "author",
      content: "Rendy Farhan Ramadhan",
    },
  ],
};

export const getStaticProps = async () => {
  try {
    const res = await Promise.all([getProjects("projects"), getPhoto()]);

    const featuredProjects = res[0].slice() || [];
    const photo = res[1];

    return {
      props: { featuredProjects, photo },
    };
  } catch (error) {
    return error;
  }
};

const Home: NextPage<{
  featuredProjects: IProject[];
  photo: Photo;
}> = ({ featuredProjects, photo }) => {
  return (
    <Suspense fallback={<div>loading..</div>}>
      <Layout {...meta}>
        <Header />
        <Intro
          title={meta.title}
          description={meta.description!}
          photo={photo}
        />
        <About />
        <Projects projects={featuredProjects} title="Featured Projects" />
        <Contact />
        <Footer />
      </Layout>
    </Suspense>
  );
};

export default Home;
