import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h4>{post.username}</h4>
      <p>{post.content}</p>
      <small>{new Date(post.createdAt).toLocaleString()}</small>
    </div>
  );
};

export default PostCard;
