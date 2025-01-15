import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ReactNode, FC } from 'react';

type AlertType = "success" | "error" | 'loading' | null;
interface AlertProps {
    type: AlertType;
    title?: string;
    subtitle: string;
    close: () => any;
}

declare function Alert(props: AlertProps): react_jsx_runtime.JSX.Element;

declare function Footer(): react_jsx_runtime.JSX.Element;

interface PopupProps$1 {
    children: ReactNode;
    title: string;
    onClose: () => void;
    show: boolean;
}

declare const Modal: ({ children, title, onClose, show }: PopupProps$1) => React.ReactPortal | null;

interface PopupProps<T extends {} = {}> {
    Content: FC<{
        close: () => void;
    } & T>;
    settings: T;
    close: () => void;
    scroll?: boolean;
    blur?: boolean;
    noPointer?: boolean;
    classList?: string[];
}

declare function Popup<ContentProps extends {}>(props: PopupProps<ContentProps>): react_jsx_runtime.JSX.Element;

interface PreloaderProps {
    className?: string;
    fullPage?: boolean;
}

declare function Preloader(props: PreloaderProps): react_jsx_runtime.JSX.Element;

export { Alert, Footer, Modal, Popup, Preloader };
