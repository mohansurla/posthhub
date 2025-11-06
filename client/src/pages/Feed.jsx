import React, { useEffect, useState } from "react";
import { API } from "../api";
import PostCard from "../components/Postcard";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  const fetchPosts = async () => {
    const res = await API.get("/posts");
    setPosts(res.data);
  };

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      await API.post("/posts", { content });
      setContent("");
      fetchPosts();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to post");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="feed-container">
        <form onSubmit={handlePost}>
          <textarea
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit">Post</button>
        </form>

        <div className="posts-list">
            {posts.length > 0 ? (
                posts.map((p) => <PostCard key={p._id} post={p} />)
            ) : (
                <p>No posts yet. Be the first to share something!</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default Feed;
