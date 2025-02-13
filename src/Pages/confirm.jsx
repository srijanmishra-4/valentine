import React from "react";
import { useNavigate } from "react-router-dom";

const Confirm = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100 bg-[url('https://www.transparenttextures.com/patterns/heart-background.png')] bg-repeat">
      <div className="text-center space-y-6">
        <img
          src="https://tenor.com/view/love-bear-panda-gif-18519830.gif"
          alt="Think Once Again"
          className="w-full max-w-xs mx-auto rounded-lg shadow-md"
        />
        <h1 className="m-3 p-5 text-2xl font-bold text-pink-700">Are You Really Sure ?</h1>
        <button
          className="px-8 py-3 text-white bg-pink-500 hover:bg-pink-600 rounded-lg shadow-lg text-lg"
          onClick={() => navigate("/proposal/accepted")}
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default Confirm;