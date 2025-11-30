import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export type Project = {
  slug: string;
  title: string;
  date: string;
  description: string;
  thumbnail: string;
  stack: string[];
  content: string;
  url: string;
  demo?: string;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  url: string;
};

export function getProjects(): Project[] {
  const projectsDirectory = path.join(contentDirectory, "projects");

  // Check if directory exists
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);

  const projects = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        thumbnail: data.thumbnail,
        stack: data.stack || [],
        content,
        url: `/projects/${slug}`,
        demo: data.demo,
      } as Project;
    });

  return projects.sort((a, b) =>
    new Date(a.date) < new Date(b.date) ? 1 : -1
  );
}

export function getProjectBySlug(slug: string): Project | null {
  const fullPath = path.join(contentDirectory, "projects", `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    thumbnail: data.thumbnail,
    stack: data.stack || [],
    content,
    url: `/projects/${slug}`,
    demo: data.demo,
  } as Project;
}

export function getPosts(): Post[] {
  const postsDirectory = path.join(contentDirectory, "posts");

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        content,
        url: `/blog/${slug}`,
      } as Post;
    });

  return posts.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(contentDirectory, "posts", `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    content,
    url: `/blog/${slug}`,
  } as Post;
}
