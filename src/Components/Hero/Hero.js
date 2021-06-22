import React, { useEffect } from "react";
const Hero = ({ handleLogout, user }) => {
  useEffect(() => {
    // console.log(user.metadata.creationTime);
  }, []);
  return (
    <section className="hero">
      <nav>
        <h2>Welcome {user.email}</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </section>
  );
};

export default Hero;
