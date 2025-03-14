import React, { useEffect, useState } from "react";
import SectionHeading from "../sectionHeading";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const Blogs = () => {
  interface Blog {
    node: {
      title: string;
      brief: string;
      url: string;
      coverImage: {
        url: string;
      };
    };
  }

  const [blogs, setBlogs] = useState<Blog[]>([]);

  const query = `
    query Publication {
      publication(host: "aviralsharma.hashnode.dev") {
        isTeam
        title
        posts(first: 10) {
          edges {
            node {
              title
              brief
              url
              coverImage {
                url
              }
            }
          }
        }
      }
    }
  `;

  const fetchBlogs = async () => {
    const data = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const response = await data.json();
    setBlogs(response.data.publication.posts.edges);
  };

  useEffect(() => {
    try {
      fetchBlogs();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <section className="min-h-screen max-w-screen-2xl mx-auto mb-10" id="blogs">
      <SectionHeading heading="My Blogs" number="05" />
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:pt-10">
        {blogs.slice(0, 6).map((blog) => (
          <li key={blog.node.title} className="bg-minor-project-card rounded-2xl p-4">
            <div className="h-56 w-full relative">
              <Image src={blog.node.coverImage.url} alt={blog.node.title} fill className="rounded-xl" />
            </div>
            <div className="flex flex-col p-5">
              <h2 className="text-lg text-project-card-text font-semibold">{blog.node.title}</h2>
              <p className="text-gray-600 mt-2">{truncateWords(blog.node.brief, 20)}</p>
              <a href={blog.node.url} target="_blank" rel="noreferrer" className="text-accent inline-flex items-center gap-2 mt-2">
                Read More <MoveRight className="w-5 h-5" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blogs;

const truncateWords = (text: string, wordLimit: number) => {
  const words = text.split(" ");
  return words.length > wordLimit ? `${words.slice(0, wordLimit).join(" ")}...` : text;
};
