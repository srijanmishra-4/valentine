import React from "react";
import { useNavigate } from "react-router-dom";

const Proposal = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100 bg-[url('https://www.transparenttextures.com/patterns/heart-background.png')] bg-repeat">
      <div className="text-center space-y-6">
        <img
          src="https://tenor.com/view/milk-and-mocha-love-heart-cute-bear-gif-20366214.gif"
          alt="Milk and Mocha Love"
          className="w-full max-w-xs mx-auto rounded-lg shadow-md"
        />
        <h1 className="m-3 p-2 text-2xl font-bold text-pink-700">Will you be my Valentine My Dear Patni Ji Kea?</h1>
        <div className="flex space-x-4 justify-center">
          <button
            className="px-6 py-2 text-white bg-pink-500 hover:bg-pink-600 rounded-lg shadow-lg"
            onClick={() => navigate("/proposal/accepted")}
          >
            Yes
          </button>
          <button
            className="px-6 py-2 text-pink-500 border border-pink-500 hover:bg-pink-100 rounded-lg shadow-lg"
            onClick={() => navigate("/proposal/confirmReject")}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
