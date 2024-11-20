import { ReactNode } from "react";

interface PopupProps {
    children: ReactNode,
    title: string;
    onClose: () => void;
    show: boolean;
}

export default PopupProps;