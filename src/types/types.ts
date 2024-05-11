export interface TSingleSkillData {
  _id?: string;
  title: string;
  imageUrl: string;
}

export interface TBlogData {
  _id?: string;
  blog_name: string;
  blog_image: string;
  blog_description: string;
  time_published: string; // Assuming time_published is always in the format "YYYY-MM-DD"
}

export interface TProjectData {
  _id?: string;
  project_name: string;
  project_image: string;
  project_description: string;
  features: string[];
  github_link: string;
  deploy_link: string;
}
