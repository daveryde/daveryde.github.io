import { RefObject, useEffect } from "react";

type AnyEvent = MouseEvent | TouchEvent;

function UseDetectOutsideClick<T extends HTMLElement = HTMLElement> (ref: RefObject<T>, handler: (event: AnyEvent) => void) {
    // Hook
    useEffect(() => {
        const listener = (event: AnyEvent) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }

            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
};

export default UseDetectOutsideClick;