import React from 'react';
import './HomePage.css'; // Add this line if you're using a separate CSS file

function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to Stemtrix</h1>
      <p>Empowering kids with robotics skills!</p>
      <div className="cta-buttons">
        <button className="cta-primary">Learn More</button>
        <button className="cta-secondary">Join a Class</button>
      </div>
    </div>
  );
}

export default HomePage;
