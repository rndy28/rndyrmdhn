import { slideBottom } from 'libs/animations';
import useIntersectionObserver from 'libs/hooks/useIntersectionObserver';
import { useRef } from 'react';
import ProjectCard from 'components/molecules/ProjectCard';
import styled from 'styled-components';
import type Project from 'types/project';
import { Title } from './shared';

const Container = styled.section<{ isVisible: boolean | undefined }>`
  margin-block: 5rem;
  opacity: ${({ isVisible }) =>
    typeof isVisible !== 'undefined' && isVisible ? 1 : 0};
  animation-name: ${({ isVisible }) =>
    typeof isVisible !== 'undefined' && isVisible && slideBottom};
  animation-duration: 0.8s;
  animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  animation-fill-mode: both;
  animation-delay: 0.2s;
`;

const Wrapper = styled.div`
  display: grid;
  margin-block: 1.5rem 0.5rem;
  gap: 3rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Projects = ({
  projects,
  title,
}: {
  projects: Project[];
  title: string;
}) => {
  const rootElementRef = useRef<HTMLElement | null>(null);
  const isRootVisible = useIntersectionObserver(rootElementRef, {
    threshold: 0.3,
    once: true,
  });

  return (
    <Container id="projects" ref={rootElementRef} isVisible={isRootVisible}>
      <Title>{title}</Title>
      <Wrapper>
        {projects.map((props, index) => (
          <ProjectCard key={index} {...props} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Projects;
