import AppIconWithWindow from "../AppIconWithWindow";
import { useState } from "react";
import post1 from "../../content/Posts/post1.mdx";
import post2 from "../../content/Posts/post2.mdx";
import post3 from "../../content/Posts/post3.mdx";
import styles from "../../styles/Blog.module.css";
import { FaFilePen } from "react-icons/fa6";

export default function Blog() {
  const postsList = [
    { title: "Hello world!", Component: post1 },
    { title: "NCP Cards", Component: post2 },
    { title: "Making an MCP", Component: post3 },
  ];
  const [selectedPost, setSelectedPost] = useState(postsList[0]);
  return (
    <AppIconWithWindow
      iconSrc={<FaFilePen size={64} color="#e5e7e8ff" />}
      label="Blog"
      windowTitle="Blog"
      windowContent={
        <>
          <div className={styles.blogWindow}>
            <div className={styles.sidebar}>
              <h2>Posts</h2>
              <ul>
                {postsList.map((post, idx) => (
                  <li
                    key={idx}
                    onClick={() => setSelectedPost(post)}
                    className={
                      selectedPost.title === post.title ? "selected" : ""
                    }
                  >
                    {post.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.blogContent}>
              <selectedPost.Component />
            </div>
          </div>
        </>
      }
    />
  );
}
