declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.svg" {
    const content: string;
    export default content;
}

declare module "next/link" {
    import { ComponentType } from "react";
    const Link: ComponentType<any>;
    export default Link;
}

declare module "next/image" {
    import { ComponentType } from "react";
    const Image: ComponentType<any>;
    export default Image;
}