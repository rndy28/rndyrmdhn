import { Variants } from 'framer-motion';

const common: Variants = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: .3,
            type: 'spring',
        }
    },
    exit: {
        opacity: 0,
        y: -100,
        transition: {
            type: 'spring',
        }
    }
};

const figure: Variants = {
    hidden: {
        opacity: 0,
        x: 200,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: .8,
            type: 'spring',
        }
    },
    exit: {
        opacity: 0,
        x: -200,
        transition: {
            type: 'spring',
        }
    }
};

export default {
    common,
    figure
}