export type Project = {
  name: string;
  project: 'FrontEnd' | 'BackEnd' | 'FullStack';
  tools: string[];
  webUrl?: string;
  githubUrl: string;
  image: string;
}