import { useEffect, useRef } from 'react';

function useClickPosition(logName) {
    const ref = useRef(null);

    useEffect(() => {
        const handleOnClick = (event) => {
            const rect = ref.current.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            console.log(`[${logName}] Clicked at:`, {
                x: Math.round(x),
                y: Math.round(y),
                globalX: event.clientX,
                globalY: event.clientY,
                element: ref.current.tagName
            });

            // Visual feedback (optional, but helpful for verification)
            // alert(`${logName} click at: x=${Math.round(x)}, y=${Math.round(y)}`);
        };

        const element = ref.current;
        if (element) {
            element.addEventListener('click', handleOnClick);
        }

        return () => {
            if (element) {
                element.removeEventListener('click', handleOnClick);
            }
        };
    }, [logName]);

    return ref;
}

export default useClickPosition;
