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
