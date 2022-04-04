import BaseCard from 'components/atoms/shared/BaseCard';
import { AnimatePresence, motion } from 'framer-motion';
import variants from 'libs/animation/variants';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled(BaseCard)`
    width: 13rem;
    height: 14rem; 
    @media(min-width: 768px) {
        width: 16rem;
        height: 20rem;
    }
    @media(min-width: 1024px) {
        width: 19rem;
        height: 25rem;
    }
    border: none;
    & > div{
        width: inherit;
        height: inherit;
        border-radius: inherit;
        position: relative;
        transform: translate(-15px, -15px);
        & > span {
            position: unset !important;
        }
        & img {
            border-radius: .4rem;
        }
    }
`;


const Credit = styled.span`
    position: absolute;
    left: -2rem;
    bottom: 0;
    font-size: .8rem;
    height: 20rem;
    text-align: end;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    @media(min-width: 400px) {
        left: -2.5rem;
    }
    @media(min-width: 600px) {
        left: -3rem;
    }
    @media(min-width: 768px) {
        writing-mode: horizontal-tb;
        text-orientation: upright;
        left: initial;
        right: 0;
        bottom: -2.9rem;
        height: fit-content;
        text-align: initial;
    }
`;

const Figure = ({ }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={variants.figure}
            >
                <Container  role='figure' borderColor='#D8DEE9' borderWidth={6} spacesBetweenStrokes={15}>
                    <div>
                        <Image
                            layout='fill'
                            priority
                            src='https://images.unsplash.com/photo-1532456745301-b2c645d8b80d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                            alt='A picture of building'
                            quality={100}
                        />
                    </div>
                    <Credit>
                        Photo by <a href="https://unsplash.com/@bady?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">bady abbas</a> on <a href="https://unsplash.com/s/photos/minimalist-architecture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </Credit>
                </Container>
            </motion.div>
        </AnimatePresence>
    );
};

export default Figure;