import React from "react";
import { useLoaderData } from "react-router";
import Photo from "../Photo/Photo";

const Albums = () => {
  const photos = useLoaderData();
  //    photos.forEach(photo => console.log(photo.title));
  return (
    <div className="mt-2 bg-orange-500 w-full p-5 text-white text-2xl font-bold">
      <h2>These are Albums : {photos.length}</h2>

      <div>
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo}></Photo>
        ))}
      </div>
    </div>
  );
};

export default Albums;
