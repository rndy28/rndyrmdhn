import IconMapper from 'components/atoms/IconMapper';
import BaseCard from 'components/atoms/shared/BaseCard';
import styled from 'styled-components';
import type Project from 'types/project';

const Container = styled(BaseCard)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Title = styled.h1``;

const Summary = styled.p`
    margin-block: .5rem 1rem;
    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    & > div {
        display: flex;
        gap: .8rem;
    }
`;

const ProjectCard = ({ title, summary, stack, links }: Project) => {
    return (
        <Container background='#ECEFF4' borderColor='#ECEFF4'>
            <div>
                <Title>{title}</Title>
                <Summary>{summary}</Summary>
            </div>
            <Wrapper>
                <div>
                    {
                        stack.map((name) => {
                            return <IconMapper name={name} size='md' key={name} />;
                        })
                    }
                </div>
                <div>
                    <a target="_blank" href={links.github} rel="noopener noreferrer"><IconMapper name='github' className='icon icon-github' /></a>
                    <a target="_blank" href={links.live} rel="noopener noreferrer"><IconMapper name='external' className='icon icon-external' /></a>
                </div>
            </Wrapper>
        </Container>
    );
};

export default ProjectCard;