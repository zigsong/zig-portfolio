export interface ModalContent {
  id: number;
  title: string;
  period: string;
  stacks: string[];
  githubUrl: string;
  deployUrl?: string;
  intro: string;
  members: string[];
  roles: string[];
  learnings?: Record<string, string>;
  previews: string[];
}
