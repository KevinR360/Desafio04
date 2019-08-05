import React from "react";

import Comment from "../components/Comment";

function Post({ post }) {
  return (
    <li key={post.id}>
      <strong>
        <img src={post.author.avatar} alt="" />
        <div>
          {post.author.name}
          <span>{post.date}</span>
        </div>
      </strong>
      <p>{post.content}</p>
      <div className="comments">
        <ul>
          {post.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </ul>
      </div>
    </li>
  );
}

export default Post;
