import React, { Suspense, useState } from "react";
import { Link, Navigate, useLocation } from "react-router";
import UserDetails2 from "../UserDetails2/UserDetails2";

const UserData = ({ users }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [visitHome, setVisitHome] = useState(false);
  const location = useLocation();
  console.log(location);
  const { id, name, email, phone, website } = users;

  if (visitHome) {
    return <Navigate to="/"></Navigate>;
  }

  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());

  return (
    <div className="border-1 p-4 bg-blue-200 m-2 text-start grid grid-cols-2">
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Website: {website}</p>
      <p>
        <small>Phone: {phone}</small>
      </p>
      <Link className="text-blue-700 font-bold" to={`/UserData/${id}`}>
        Show Details
      </Link>
      <button
        onClick={() => setShowInfo(!showInfo)}
        className="text-blue-700 font-bold"
      >
        {showInfo ? "Hide" : "Show"} info
      </button>
      {showInfo && (
        <Suspense fallback={<span>Wait Loading ......</span>}>
          <UserDetails2 userPromise={userPromise}></UserDetails2>
        </Suspense>
      )}
      <button
        onClick={() => setVisitHome(true)}
        className="text-blue-700 font-bold"
      >
        VisitHome
      </button>
    </div>
  );
};

export default UserData;
