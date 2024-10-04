import Post from "../components/Post";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PostAll = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:8000/api/posts");
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <main
        style={{
          minHeight: "100vh",
        }}
      >
        <div class="container mt-4">
          <div class="row">
            <div class="col">
              <h1 class="mb-4">All Posts</h1>
              {posts.length > 0 ? (
                posts.map((post) => <Post post={post} />)
              ) : (
                <h4>No posts available</h4>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PostAll;
