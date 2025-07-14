import React from "react";
import toast from "react-hot-toast";

const Home = () => {
  return (
    <>
      Home
      <div>
        <button type="button" onClick={() => toast.success("toast")}>
          Toast
        </button>
      </div>
    </>
  );
};

export default Home;
