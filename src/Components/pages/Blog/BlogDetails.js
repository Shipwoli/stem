import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

const BlogDetails = () => {
  const { id } = useParams(); // Get blog ID from URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/blogs/${id}`)
      .then(response => setBlog(response.data))
      .catch(error => console.error("Error fetching blog:", error));
  }, [id]);

  if (!blog) return <h2 className="text-center">Loading...</h2>;

  return (
    <div className="container my-5">
      <Card className="shadow-lg">
        <Card.Img variant="top" src={blog.image_url} className="blog-img" />
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text className="text-muted">
            Published on: {new Date(blog.published_at).toDateString()}
          </Card.Text>
          <Card.Text>{blog.content}</Card.Text>
          <Button variant="primary" href="/">Back to Blogs</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogDetails;
