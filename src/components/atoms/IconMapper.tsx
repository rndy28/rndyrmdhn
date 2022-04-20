import { IconBrandFacebook, IconBrandGithub, IconBrandLinkedin, IconBrandTelegram, IconBrandTwitter, IconExternalLink, IconMail, IconUpload } from '@tabler/icons';
import {
    SiCss3, SiFirebase, SiHtml5, SiJavascript, SiLaravel, SiMongodb,
    SiNextdotjs, SiNodedotjs,
    SiPhp, SiReact, SiSass, SiStyledcomponents, SiTypescript, SiVite
} from 'react-icons/si';

const IconMapper = ({ name, className }: { name: string; className?: string; }) => {
    switch (name) {
        case 'github':
            return <IconBrandGithub className={className}/>;
        case 'linkedin':
            return <IconBrandLinkedin className={className}/>;
        case 'twitter':
            return <IconBrandTwitter className={className}/>;
        case 'mail':
            return <IconMail className={className}/>;
        case 'telegram':
            return <IconBrandTelegram className={className}/>;
        case 'facebook':
            return <IconBrandFacebook className={className}/>;
        case 'external':
            return <IconExternalLink className={className}/>;
        case 'javascript':
            return <SiJavascript className={className}/>;
        case 'typescript':
            return <SiTypescript className={className}/>;
        case 'react':
        case 'reactjs':
            return <SiReact className={className}/>;
        case 'node':
            return <SiNodedotjs className={className}/>;
        case 'php':
            return <SiPhp className={className}/>;
        case 'sass':
        case 'scss':
            return <SiSass className={className}/>;
        case 'styled-components':
        case 'styled components':
            return <SiStyledcomponents className={className}/>;
        case 'vite':
            return <SiVite className={className}/>;
        case 'firebase':
            return <SiFirebase className={className}/>;
        case 'mongodb':
            return <SiMongodb className={className}/>;
        case 'next':
        case 'nextjs':
            return <SiNextdotjs className={className}/>;
        case 'laravel':
            return <SiLaravel className={className}/>;
        case 'css':
        case 'css3':
            return <SiCss3 className={className}/>;
        case 'html':
        case 'html5':
            return <SiHtml5 className={className}/>;
        case 'upload':
            return <IconUpload className={className}/>;
        default:
            throw new Error('Unknown icon name');
    }
};

export default IconMapper;