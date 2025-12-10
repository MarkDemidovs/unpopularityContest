import { useState, useEffect } from "react";
import API from "./api/axiosConfig";
import Create from "./components/postCreator";

export default function App() {
  const [posts, setPosts] = useState([]);
  
  useEffect(()=>{
    const fetchPosts = async () => {
      try {
        const res = await API.get("/");
        setPosts(res.data.posts)
      } catch (err) {
        console.error("Error fetching posts:", err);
        setPosts([]);
      }
    };
    fetchPosts();
  }, [])

  const createPost = async (content) => {
    try {
      await API.post(`/post`, { content })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <div>
        <ul>
          {posts.map((post, index)=>(
            <li key={index}>
              <p>
                {post.content}
                <br></br>
                {post.ratio}
                <button>Upvote</button>
                <button>Downvote</button>
              </p>
            </li>
          ))}
        </ul>
      </div>

      <Create createPost={createPost}/>
    </>
  )
}
