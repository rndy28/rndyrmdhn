import { NextSeo, NextSeoProps } from 'next-seo';

export interface SeoProps extends NextSeoProps {
    templateTitle?: string;
}


const Seo: React.FC<SeoProps> = ({...props}) => {
    const TITLE_TEMPLATE = `%s - ${props.templateTitle ?? 'Rendy F Ramadhan, Student and Web Developer from Indonesia'}`
    return (
        <NextSeo {...props} title={props.title} titleTemplate={TITLE_TEMPLATE}/>
    );
};

export default Seo;