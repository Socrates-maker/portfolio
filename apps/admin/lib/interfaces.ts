export interface Project {
  title: string;
  images: string[];
  id: string;
  description: string;
  url: string | null;
  coverImage: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}
