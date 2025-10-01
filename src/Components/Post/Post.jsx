import React from "react";
import { Link, useNavigate } from "react-router";

const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate();
  const handleNavigate = () =>{
    navigate("/")

  }
  return (
    <div className="bg-cyan-700 p-4 mt-2 text-white">
      <h3>{title}</h3>
      <Link to={`/posts/${id}`}>
        <button className="border-1 my-1 px-3">Show Details</button>
      </Link>
      <button onClick={handleNavigate} className="border-1 my-1 px-3">Details of : {id}</button>
    </div>
  );
};

export default Post;
