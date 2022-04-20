import ProjectCard from 'components/molecules/ProjectCard';
import styled from 'styled-components';
import type Project from 'types/project';
import { Title } from './shared';

const Container = styled.section`
    margin-block: 5rem;
`;

const Wrapper = styled.div`
    display: grid;
    margin-block: 1.5rem .5rem;
    gap: 3rem;
    @media(min-width: 768px){
        grid-template-columns: 1fr 1fr;
    }
`;

const Projects = ({ projects }: { projects: Project[]; }) => {
    return (
        <Container id='projects'>
            <Title>Featured Projects</Title>
            <Wrapper>
                {
                    projects.map((props, index) => (
                        <ProjectCard key={index}  {...props} />
                    ))
                }
            </Wrapper>
        </Container>
    );
};

export default Projects;