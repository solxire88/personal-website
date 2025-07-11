export default interface Project {
    id: number;
    title: string;
    url: string;
    tools: string[];
    field: string[];
    about: string;
    images: {
        url: string;
        alt: string;
    }[];
}
