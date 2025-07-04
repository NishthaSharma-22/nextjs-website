import AppIconWithWindow from "../AppIconWithWindow";
import { useState } from "react";
import post1 from "../../content/Posts/post1.mdx";
import post2 from "../../content/Posts/post2.mdx";
import styles from "../../styles/Blog.module.css"


export default function Blog() {
  const postsList = [
    { title: "Post 1", Component: post1 },
    { title: "Post 2", Component: post2 },
  ];
  const [selectedPost, setSelectedPost] = useState(postsList[0]);
  return (
    <AppIconWithWindow
      iconSrc="/email.png"
      label="Blog"
      windowTitle="Blog"
      windowContent={
        <>

        <div className={styles.blogWindow}>
          <div className={styles.sidebar}>
            <h2>Posts</h2>
            <ul>
              {postsList.map((post, idx)=> (
                <li key={idx}
                onClick={()=> setSelectedPost(post)} className={selectedPost.title===post.title? "selected":""}>
                  {post.title}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.blogContent}>
            <selectedPost.Component/>
          </div>
        </div>


        </>
      }
    />
  );
}
