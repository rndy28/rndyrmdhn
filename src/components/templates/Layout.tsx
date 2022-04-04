import Seo, { SeoProps } from 'components/atoms/Seo';
import { NextPage } from 'next';
import styled from 'styled-components';


export interface LayoutProps extends SeoProps {
    title: string
}

const Container = styled.main`
    width: 78%;
    margin: 0 auto;
    max-width: 50rem;
`;

const Layout:NextPage<LayoutProps> = ({ children, ...props }) => {

    return (
        <>
        <Seo {...props}/>
        <Container className='layout'>{children}</Container>
        </>
    );
};

export default Layout;