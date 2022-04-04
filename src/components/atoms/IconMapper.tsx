import { IconBrandFacebook, IconBrandGithub, IconBrandLinkedin, IconBrandTelegram, IconBrandTwitter, IconExternalLink, IconMail } from '@tabler/icons';
import {
    SiCss3, SiFirebase, SiHtml5, SiJavascript, SiLaravel, SiMongodb,
    SiNextdotjs, SiNodedotjs,
    SiPhp, SiReact, SiSass, SiStyledcomponents, SiTypescript, SiVite
} from 'react-icons/si';
import styled from 'styled-components';

type Size = 'sm' | 'md' | 'lg';

const Small = styled.div`
    height: 1.5rem;
    width: 1.5rem;
`;

const Medium = styled.div`
    height: 2rem;
    width: 2rem;
`;

const Large = styled.div`
    height: 2.5rem;
    width: 2.5rem;
`;

const Wrapper = styled.div<{ size?: Size;}>`
    display: grid;
    place-items: center;
    border-radius: 0.2rem;
    ${({ size }) => size === 'sm' && Small};
    ${({ size }) => size === 'md' && Medium};
    ${({ size }) => size === 'lg' && Large};
`;

const IconMapper = ({ name, size, className }: { name: string; size?: Size; className?: string; }) => {
    switch (name) {
        case 'github':
            return <Wrapper size={size} className={className}><IconBrandGithub /></Wrapper>;
        case 'linkedin':
            return <Wrapper size={size} className={className}><IconBrandLinkedin /></Wrapper>;
        case 'twitter':
            return <Wrapper size={size} className={className}><IconBrandTwitter /></Wrapper>;
        case 'mail':
            return <Wrapper size={size} className={className}><IconMail /></Wrapper>;
        case 'telegram':
            return <Wrapper size={size} className={className}><IconBrandTelegram /></Wrapper>;
        case 'facebook':
            return <Wrapper size={size} className={className}><IconBrandFacebook /></Wrapper>;
        case 'external':
            return <Wrapper size={size} className={className}><IconExternalLink /></Wrapper>;
        case 'javascript':
            return <Wrapper size={size} className={className}><SiJavascript /></Wrapper>;
        case 'typescript':
            return <Wrapper size={size} className={className}><SiTypescript /></Wrapper>;
        case 'react':
        case 'reactjs':
            return <Wrapper size={size} className={className}><SiReact /></Wrapper>;
        case 'node':
            return <Wrapper size={size} className={className}><SiNodedotjs /></Wrapper>;
        case 'php':
            return <Wrapper size={size} className={className}><SiPhp /></Wrapper>;
        case 'sass':
        case 'scss':
            return <Wrapper size={size} className={className}><SiSass /></Wrapper>;
        case 'styled-components':
        case 'styled components':
            return <Wrapper size={size} className={className}><SiStyledcomponents /></Wrapper>;
        case 'vite':
            return <Wrapper size={size} className={className}><SiVite /></Wrapper>;
        case 'firebase':
            return <Wrapper size={size} className={className}><SiFirebase /></Wrapper>;
        case 'mongodb':
            return <Wrapper size={size} className={className}><SiMongodb /></Wrapper>;
        case 'next':
        case 'nextjs':
            return <Wrapper size={size} className={className}><SiNextdotjs /></Wrapper>;
        case 'laravel':
            return <Wrapper size={size} className={className}><SiLaravel /></Wrapper>;
        case 'css':
        case 'css3':
            return <Wrapper size={size} className={className}><SiCss3 /></Wrapper>;
        case 'html':
        case 'html5':
            return <Wrapper size={size} className={className}><SiHtml5 /></Wrapper>;
        default:
            throw new Error('Unknown icon name');
    }
};

export default IconMapper;