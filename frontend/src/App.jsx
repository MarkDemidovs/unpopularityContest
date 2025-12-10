import { useState, useEffect } from "react";
import API from "./api/axiosConfig";
import Create from "./components/postCreator";

export default function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await API.get("/");
      setPosts(res.data.posts);
    } catch (err) {
      console.error("Error fetching posts:", err);
      setPosts([]);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async (content) => {
    try {
      await API.post(`/post`, { content })
    } catch (err) {
      console.error(err)
    }
  }

  const upvote = async (postId) => {
    try {
      const res = await API.patch(`/post/${postId}`, { voteType: 1 });
      setPosts(posts.map(p => p.id === postId ? res.data : p));
      fetchPosts();
    } catch (err) {
      console.error(err);
    }
  };

  const downvote = async (postId) => {
    try {
      const res = await API.patch(`/post/${postId}`, { voteType: -1 });
      setPosts(posts.map(p => p.id === postId ? res.data : p));
      fetchPosts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <p>
                {post.content}
                <br></br>
                {post.ratio}
                <button onClick={() => upvote(post.id)}>Upvote</button>
                <button onClick={() => downvote(post.id)}>Downvote</button>
              </p>
            </li>
          ))}
        </ul>
      </div>

      <Create createPost={createPost} />
    </>
  )
}
