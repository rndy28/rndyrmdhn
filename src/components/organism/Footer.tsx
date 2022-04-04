import IconMapper from 'components/atoms/IconMapper';
import FOOTERLINKS from 'libs/constants/routes';
import SOCIALLINK from 'libs/constants/social';
import Link from 'next/link';
import styled from 'styled-components';


const Container = styled.footer`
    padding-block: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    color: #4C566A;
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;

const List = styled.ul`
    display: flex;
    gap: 1rem;
`;

const Item = styled.li``;

const Social = styled.div`
    display: flex;
    gap: 2rem;
`

const Text = styled.p``;

const Footer = () => {
    return (
        <Container>
            <List>
                {FOOTERLINKS.map((text, idx) => (
                    <Item key={idx}><Link href={`#${text}`}><a>{text}</a></Link></Item>
                ))}
            </List>
            <Social>
                {SOCIALLINK.map(({ name, url }) => (
                    <a key={name} target='_blank' href={url} rel='noopener noreferrer'><IconMapper name={name}/></a>
                ))}
            </Social>
            <Text>Made with ❤️ by Rendy Farhan Ramadhan</Text>
        </Container>
    );
};

export default Footer;