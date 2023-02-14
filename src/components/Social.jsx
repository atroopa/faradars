import React from 'react';

const Social = () => {
  return (
    <div>
        <div className="flex items-center">
    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin fa-lg mx-4"></i>
    </a>
    <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github fa-lg mx-4"></i>
    </a>
    <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter fa-lg mx-4"></i>
    </a>
  </div>
    </div>
  );
}

export default Social;