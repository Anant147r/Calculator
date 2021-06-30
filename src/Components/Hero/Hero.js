import React, { useEffect } from "react";
import Calculator from "../Calculator/Calculator";
const Hero = ({ handleLogout, user, items }) => {
  useEffect(() => {
    // console.log(user.metadata.creationTime);
  }, []);
  return (
    <section className="hero">
      <nav>
        <h2>Welcome {user.email}</h2>
        {/* <button onClick={handleLogout}>Logout</button> */}
        <Calculator user={user} items={items} handleLogout={handleLogout} />
      </nav>
    </section>
  );
};

export default Hero;
