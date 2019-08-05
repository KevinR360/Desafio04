import React from "react";

function Comment({ comment }) {
  return (
    <li key={comment.id}>
      <img src={comment.author.avatar} alt="" />
      <p>
        <strong>{comment.author.name}</strong>
        {comment.content}
      </p>
    </li>
  );
}
export default Comment;
