declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.svg" {
    import * as React from "react";

    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default Component;
}

declare module "*.svg?url" {
    const src: string;
    export default src;
}

declare module "next/image" {
    import * as React from "react";

    export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'width' | 'height'> {
        src: string | StaticImageData;
        alt: string;
        width?: number | `${number}`;
        height?: number | `${number}`;
        fill?: boolean;
        sizes?: string;
        quality?: number;
        priority?: boolean;
        loading?: 'eager' | 'lazy';
        placeholder?: 'blur' | 'empty';
        blurDataURL?: string;
        unoptimized?: boolean;
    }

    const Image: React.FC<ImageProps>;

    export default Image;
}