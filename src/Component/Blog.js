import React, { useEffect, useState } from "react";
import Body from "./Body";
import { Link, useNavigate } from "react-router-dom";

export default function Blog() {
  const [blog, setBlog] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      let url = process.env.REACT_APP_GET_POST_API_KEY;
      console.log(url);
      let data = await fetch(url);
      let parsedData = await data.json();
      setBlog(parsedData);
      setLoading(false);
    };

    fetchArticles();
  }, []);

  const handleRowClick = (userId) => {
    setSelectedRow(userId);
  };

  const handleRowDoubleClick = (element) => {
    navigate(`/blog/blogItem`, { state: { element } });
  };

  return (
    <>
      <style>
        {`
      .table-row:hover {
        cursor: pointer;
      }
      `}
      </style>
      <div>
        <Body
          heading="Bytesize - stay in the loop on tech topics."
          paragraph="Remain in the loop and relevant, make sure to read our monthly blogs on technology-related topics. We keep them concise, informative, and to the point."
          imgUrl="https://www.cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F3rtSnfmRYBsDDgZlFZOphA%2F033ea98a6c95d42194c49ee81074b673%2FPatience_blog_cover.jpeg&w=1920&q=75"
        />
        <div className="container text-center mt-5">
          <h1>
            <b>List of Blogs</b>
          </h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="table table-striped mt-3">
              <thead>
                <tr className="table-dark">
                  <th scope="col">User ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Body</th>
                  <th scope="col">Link</th>
                </tr>
              </thead>
              <tbody>
                {blog.length !== 0 &&
                  blog.map((element) => {
                    return (
                      <tr
                        key={element.userId}
                        className={`table-row ${
                          selectedRow === element.userId ? "table-info" : ""
                        }`}
                        onClick={() => handleRowClick(element.userId)}
                        onDoubleClick={() => handleRowDoubleClick(element)}
                      >
                        <th scope="row">{element.userId}</th>
                        <td>{element.title}</td>
                        <td>{element.body}</td>
                        <td>
                          <Link to={element.link}>{element.link}</Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}
