import styled from 'styled-components';
import { motion } from 'framer-motion';
import BaseCard from 'components/atoms/shared/BaseCard';
import Image from 'next/image';
import Button from 'components/atoms/Button';
import IconMapper from 'components/atoms/IconMapper';
import { Description } from './shared';

const Container = styled(motion.section)`
    @media(min-width: 700px) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        min-height: 80vh;
    }
`;

const Title = styled.h1`
    font-size: 1.9rem;
    margin-top: 1.8rem;
    &, & ~ p {
        color: #434C5E;
    }
    @media(min-width: 950px) {
        font-size: 2.5rem;
    }
    @media(min-width: 1200px) {
        font-size: 3rem;
        margin-top: 0;

    }
`;

const SubTitle = styled.h3`
    color: #5E81AC;
    margin-block: .3rem .8rem;
    line-height: 1.2;
    font-size: 1.3rem;
    @media(min-width: 950px) {
        font-size: 1.4rem;
    }
    @media(min-width: 1200px) {
        font-size: 1.5rem;
        margin-block: .4rem .9rem;
    }
`;


const Figure = styled(BaseCard)`
    width: 13rem;
    height: 18rem; 
    position: relative;
    border: none;
    @media (min-width: 650px) {
        width: 15rem;
        height: 20rem;
    }
    @media(min-width: 768px) {
        width: 16rem;
        height: 20rem;
    }
    @media(min-width: 1024px) {
        width: 19rem;
        height: 25rem;
    }
    & img {
        border-radius: .4rem;
    }
`;

const FigureCaption = styled.figcaption`
    position: absolute;
    left: -25px;
    bottom: 0;
    font-size: .7rem;
    height: 20rem;
    text-align: end;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    @media(min-width: 700px) {
        writing-mode: horizontal-tb;
        text-orientation: upright;
        left: initial;
        right: 0;
        bottom: -2.5rem;
        height: fit-content;
        text-align: initial;
    }
    @media(min-width: 768px) {
        font-size: .8rem;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    max-width: 25rem;
    .btn-download-resume {
        flex-direction: row-reverse;
        gap: .25rem;
        margin-top: .8rem;
        & span {
            position: relative;
            top: 3px;
            font-weight: 600;
            font-size: .813rem;
        }
    }
    .icon-upload {
        height: .95rem;
        width: .95rem;
    }
    @media(min-width: 700px) {
        width: 50%;
        .btn-download-resume {
            gap: .5rem;
            & span {
                font-size: .938rem;
                top: 4px;
            }
        }
        .icon-upload {
            height: 1.2rem;
            width: 1.2rem;
        }
    }
    @media(min-width: 1200px) {
        max-width: 28rem;
        width: 80%;
        .btn-download-resume {
            margin-top: 1rem;
        }
    }
`;

type Props = {
    title: string;
    subtitle: string;
    description?: string;
    image?: string;
};

const Intro = ({ title, subtitle, description, image }: Props) => {
    return (
        <Container>
            <Figure role='figure' borderColor='#D8DEE9' borderWidth={6} spacesBetweenStrokes={15}>
                <Image
                    layout='fill'
                    priority
                    src={image ?? 'https://images.unsplash.com/photo-1532456745301-b2c645d8b80d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}
                    alt='A picture of building'
                    quality={100} />
                <FigureCaption>
                    Photo by <a href="https://unsplash.com/@bady?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">bady abbas</a> on <a href="https://unsplash.com/s/photos/minimalist-architecture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </FigureCaption>
            </Figure>
            <Wrapper>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
                <Description>{description}</Description>
                <Button
                    onClick={() => console.log('clicked')}
                    background='#4C566A'
                    color='#ECEFF4'
                    text='Resume'
                    className='btn-download-resume'>
                    <IconMapper name='upload' className='icon-upload' />
                </Button>
            </Wrapper>
        </Container>
    );
};

export default Intro;