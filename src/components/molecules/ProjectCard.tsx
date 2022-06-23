import IconMapper from 'components/atoms/IconMapper';
import styled from 'styled-components';
import type Project from 'types/project';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eceff4;
  border-radius: 0.4rem;
  padding: 1rem;
`;

const Title = styled.h1``;

const Summary = styled.p`
  margin-block: 0.5rem 1rem;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

const ProjectCard = ({ title, summary, stack, links }: Project) => {
  return (
    <Container>
      <div>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
      </div>
      <Wrapper>
        <div>
          {stack.map((name) => {
            return <IconMapper name={name} key={name} />;
          })}
        </div>
        <div>
          <a target="_blank" href={links.github} rel="noopener noreferrer">
            <IconMapper name="github" className="icon icon-github" />
          </a>
          <a target="_blank" href={links.live} rel="noopener noreferrer">
            <IconMapper name="external" className="icon icon-external" />
          </a>
        </div>
      </Wrapper>
    </Container>
  );
};

export default ProjectCard;
