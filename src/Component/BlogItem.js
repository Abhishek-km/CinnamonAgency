import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function BlogItem() {
  const location = useLocation();
  const { element } = location.state || {};

  useEffect(() => {
    document.getElementById('heading').innerHTML = "CINNAMON - Blog Item";
  }, []);

  return (
    <div className="container text-center mt-5">
      {element ? (
        <div>
          <h1>{element.title}</h1>
          <p>{element.body}</p>
          <p><a href={element.link}>{element.link}</a></p>
        </div>
      ) : (
        <p>No blog item selected.</p>
      )}
    </div>
  );
}
