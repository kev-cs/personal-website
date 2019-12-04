declare module '*.sass' {
    const content: {[className: string]: string};
    export = content;
}

declare module '*.png' {
    const value: any;
    export = value;
}

declare module "*.svg" {
    const content: string;
    export default content;
}