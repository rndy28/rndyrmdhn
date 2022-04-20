import styled from 'styled-components';
import { Title, Description } from './shared';

const Container = styled.section`
    margin-block: 2rem;
    ${Title} {
        margin-bottom: .5rem;
    }
`;


const Contact = () => {
    return (
        <Container id='contact'>
            <Title>Contact Me</Title>
            <Description>
                If you want to get in touch, you can find me on <a href='https://www.facebook.com/rendy.farhan02/' style={{ textDecoration: 'underline' }}>facebook</a>. Or you can email me if you preferred to
            </Description>
        </Container>
    );
};

export default Contact;