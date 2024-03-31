import React from "react";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Pojects MERN</h1>
      <p className="text-md text-gray-500">Build fun and engaging projects while learning HTML, CSS, and JavaScript!</p>
      <CallToAction />
    </div>
  );
};

export default Home;
