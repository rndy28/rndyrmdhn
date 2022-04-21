import { RefObject, useEffect, useState } from 'react';

/**
 * 
 * @param element the element to observe
 * @param options the options for the observer. See https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 * @returns the current visibility of the element
 * 
 */

interface Args extends IntersectionObserverInit {
    once?: boolean;
}

const useIntersectionObserver = (
    element: RefObject<Element>,
    {
        threshold = 0,
        root = null,
        rootMargin = '0px',
        once = false,
    }: Args = {}
) => {
    const [entry, setEntry] = useState<IntersectionObserverEntry>();
    const isVisible = entry?.isIntersecting;

    useEffect(() => {
        const node = element?.current;
        const hasIOSupport = 'IntersectionObserver' in window;

        if (!hasIOSupport || !node) return;

        const observer = new IntersectionObserver(([entry], observer) => {
            if (once && entry.isIntersecting) {
                observer.unobserve(node);
            }
            setEntry(entry);
        }, {
            root,
            rootMargin,
            threshold,
        });

        observer.observe(node);

        return () => observer.disconnect();

    }, [element, threshold, root, rootMargin]);

    return isVisible;
};


export default useIntersectionObserver;