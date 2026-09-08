import { useCallback, useEffect, useRef, useState } from 'react';

type UseClipboardOptions = {
    resetAfter?: number;
};

export const useClipboard = ({ resetAfter = 3000 }: UseClipboardOptions = {}) => {
    const [isCopied, setCopied] = useState(false);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const copy = useCallback(
        async (text: string, index?: number) => {
            try {
                await navigator.clipboard.writeText(text);
                if (index) setCopiedIndex(index);
                setCopied(true);

                if (timerRef.current) {
                    clearTimeout(timerRef.current);
                }

                timerRef.current = setTimeout(() => {
                    setCopiedIndex(null);
                    setCopied(false);
                    timerRef.current = null;
                }, resetAfter);
            } catch (error) {
                console.error('Copy failed:', error);
            }
        },
        [resetAfter],
    );

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    return {
        isCopied,
        copiedIndex,
        copy,
    };
};
