import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa";
import './Blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3000/blogs") // Change to your API URL
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const handleLike = (id) => {
    axios.patch(`http://localhost:3000/blogs/${id}/like`)
      .then((response) => {
        setBlogs(blogs.map(blog => 
          blog.id === id ? { ...blog, likes: response.data.likes } : blog
        ));
      })
      .catch((error) => console.error("Error liking blog:", error));
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Latest Blogs & Articles</h2>
      <div className="row">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-md-4 mb-4">
            <Card className="shadow-sm blog-card">
              <Card.Img variant="top" src={blog.image_url} className="blog-img" />
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text className="blog-date">
                  Published on: {new Date(blog.published_at).toDateString()}
                </Card.Text>
                <Card.Text className="text-muted">
                  {blog.content.slice(0, 100)}... {/* Show preview only */}
                </Card.Text>
                <Button variant="primary" href={`/blog/${blog.id}`} className="me-2">
  Read More
                 </Button>
                {/* <Button variant="outline-secondary" onClick={() => handleLike(blog.id)}>
                  <FaThumbsUp /> {blog.likes}
                </Button> */}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
